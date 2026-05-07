<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    const LOCATIONS = [
        'primary' => 'Primary Navigation',
        'footer'  => 'Footer Navigation',
    ];

    const TARGETS = ['_self', '_blank'];

    // ── Helpers ───────────────────────────────────────────────────────────────

    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson();
    }

    private function itemValidationRules(): array
    {
        return [
            'label'      => ['required', 'string', 'max:191'],
            'url'        => ['required', 'string', 'max:500'],
            'target'     => ['nullable', 'in:_self,_blank'],
            'parent_id'  => ['nullable', 'exists:menu_items,id'],
            'is_visible' => ['boolean'],
        ];
    }

    /**
     * ✅ Recursively load all nested levels (children, grandchildren, etc.)
     */
    private function loadNestedChildren($item)
    {
        if ($item && $item->children) {
            $item->children = $item->children->map(fn ($child) => $this->loadNestedChildren($child));
        }
        return $item;
    }

    private function resolveMenu(string $location): Menu
    {
        abort_unless(array_key_exists($location, self::LOCATIONS), 404);

        $menu = Menu::with(['items' => function ($q) {
            $q->with('children.children.children.children')  // ✅ Load up to 4 levels deep
              ->whereNull('parent_id')
              ->orderBy('sort_order');
        }])->firstOrCreate(
            ['location' => $location],
            ['name' => self::LOCATIONS[$location], 'is_active' => true]
        );

        // ✅ Recursively load all levels for deep nesting
        $menu->items = $menu->items->map(fn ($item) => $this->loadNestedChildren($item));

        return $menu;
    }

    // ── Shared renderer ───────────────────────────────────────────────────────

    private function renderBuilder(Request $request, string $location)
    {
        $menu = $this->resolveMenu($location);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Menu retrieved successfully.',
                'data'    => [
                    'menu'      => $this->formatMenu($menu),
                    'location'  => $location,
                    'locations' => self::LOCATIONS,
                    'targets'   => self::TARGETS,
                ],
            ]);
        }

        return Inertia::render('menus/builder', [
            'menu'      => $this->formatMenu($menu),
            'location'  => $location,
            'locations' => self::LOCATIONS,
            'targets'   => self::TARGETS,
        ]);
    }

    // ── Pages ─────────────────────────────────────────────────────────────────

    public function primary(Request $request) { return $this->renderBuilder($request, 'primary'); }
    public function footer(Request $request)  { return $this->renderBuilder($request, 'footer');  }

    // ── Menu Settings ─────────────────────────────────────────────────────────

    public function updateMenu(Request $request, Menu $menu)
    {
        $data = $request->validate([
            'name'      => ['required', 'string', 'max:191'],
            'is_active' => ['boolean'],
        ]);

        $menu->update($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Menu settings saved.',
                'data'    => $this->formatMenu($menu->load(['items.children.children.children'])),
            ]);
        }

        return back()->with('success', 'Menu settings saved.');
    }

    // ── Items CRUD ────────────────────────────────────────────────────────────

    public function storeItem(Request $request, Menu $menu)
    {
        $data = $request->validate($this->itemValidationRules());

        // ✅ Prevent circular references (item cannot be descendant of itself)
        if (!empty($data['parent_id'])) {
            $this->validateNoCircularReference($data['parent_id'], null);
        }

        $max = MenuItem::where('menu_id', $menu->id)
            ->where('parent_id', $data['parent_id'] ?? null)
            ->max('sort_order') ?? -1;

        $item = MenuItem::create([
            'menu_id'    => $menu->id,
            'parent_id'  => $data['parent_id'] ?? null,
            'label'      => $data['label'],
            'url'        => $data['url'],
            'target'     => $data['target'] ?? '_self',
            'is_visible' => $data['is_visible'] ?? true,  // ✅ Default visible
            'sort_order' => $max + 1,
        ]);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Item added.',
                'data'    => $this->formatItem($item->load('children.children.children')),
            ], 201);
        }

        return back()->with('success', 'Item added.');
    }

    public function updateItem(Request $request, Menu $menu, MenuItem $item)
{
    abort_unless($item->menu_id === $menu->id, 403);

    $data = $request->validate($this->itemValidationRules());

    // ✅ Prevent item from being its own parent
    if (!empty($data['parent_id']) && (int) $data['parent_id'] === $item->id) {
        if ($this->isApi($request)) {
            return response()->json([
                'success' => false,
                'message' => 'An item cannot be its own parent.',
            ], 422);
        }
        return back()->withErrors(['parent_id' => 'An item cannot be its own parent.']);
    }

    // ✅ Only validate circular reference if parent is actually CHANGING
    $newParentId = $data['parent_id'] ?? null;
    $oldParentId = $item->parent_id;

    if (!is_null($newParentId) && $newParentId !== $oldParentId) {
        $this->validateNoCircularReference($newParentId, $item->id);
    }

    $item->update($data);

    if ($this->isApi($request)) {
        return response()->json([
            'success' => true,
            'message' => 'Item updated.',
            'data'    => $this->formatItem($item->load('children.children.children')),
        ]);
    }

    return back()->with('success', 'Item updated.');
}

    /**
     * ✅ Toggle visibility of a menu item
     */
    public function toggleVisibility(Request $request, Menu $menu, MenuItem $item)
    {
        abort_unless($item->menu_id === $menu->id, 403);

        $item->update([
            'is_visible' => !$item->is_visible,
        ]);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => $item->is_visible ? 'Item is now visible.' : 'Item is now hidden.',
                'data'    => $this->formatItem($item->load('children.children.children')),
            ]);
        }

        return back()->with('success', 'Item visibility updated.');
    }

    public function destroyItem(Request $request, Menu $menu, MenuItem $item)
    {
        abort_unless($item->menu_id === $menu->id, 403);

        // ✅ Recursively delete all descendants
        $this->deleteItemAndDescendants($item);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Item deleted.',
            ]);
        }

        return back()->with('success', 'Item deleted.');
    }

    // ── Reorder ───────────────────────────────────────────────────────────────

    /**
     * ✅ FIXED: Reorder items without strict circular reference checking
     */
    public function reorder(Request $request, Menu $menu)
    {
        $data = $request->validate([
            'items'             => ['required', 'array'],
            'items.*.id'        => ['required', 'integer', 'exists:menu_items,id'],
            'items.*.order'     => ['required', 'integer', 'min:0'],
            'items.*.parent_id' => ['nullable', 'integer', 'exists:menu_items,id'],
        ]);

        // ✅ Build a map of old parent_ids to detect changes
        $oldParents = MenuItem::where('menu_id', $menu->id)
            ->pluck('parent_id', 'id')
            ->toArray();

        // ✅ Validate the NEW structure is circular-reference-free BEFORE applying
        foreach ($data['items'] as $itemData) {
            $newParentId = $itemData['parent_id'];
            $itemId = $itemData['id'];
            $parentChanged = ($oldParents[$itemId] ?? null) !== $newParentId;

            // Only validate if parent is being CHANGED to something new
            if ($parentChanged && !is_null($newParentId)) {
                // Make sure new parent isn't a descendant of this item
                $this->validateNoCircularReference($newParentId, $itemId);
            }
        }

        // ✅ All validations passed - update all items
        foreach ($data['items'] as $item) {
            MenuItem::where('id', $item['id'])
                ->where('menu_id', $menu->id)
                ->update([
                    'sort_order' => $item['order'],
                    'parent_id'  => $item['parent_id']
                ]);
        }

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Order saved.',
            ]);
        }

        return back()->with('success', 'Order saved.');
    }

    // ── Validation helpers ──────────────────────────────────────────────────────

    /**
     * ✅ Check if parentId is already a descendant of itemId
     */
    private function validateNoCircularReference(int $parentId, ?int $itemId = null): void
    {
        $parent = MenuItem::find($parentId);

        if (!$parent) {
            return;
        }

        $descendants = $this->getAllDescendantIds($parent);

        if (!is_null($itemId) && in_array($itemId, $descendants)) {
            abort(422, 'Cannot move item - would create a circular reference.');
        }
    }

    /**
     * ✅ Recursively get all descendant IDs
     */
    private function getAllDescendantIds(MenuItem $item): array
    {
        $ids = [];

        // ✅ Load children if not already loaded
        if (!$item->relationLoaded('children')) {
            $item->load('children');
        }

        if ($item->children && $item->children->count() > 0) {
            foreach ($item->children as $child) {
                $ids[] = $child->id;
                $ids = array_merge($ids, $this->getAllDescendantIds($child));
            }
        }

        return $ids;
    }

    /**
     * ✅ Recursively delete item and all its descendants
     */
    private function deleteItemAndDescendants(MenuItem $item): void
    {
        if ($item->children && $item->children->count() > 0) {
            foreach ($item->children as $child) {
                $this->deleteItemAndDescendants($child);
            }
        }

        $item->delete();
    }

    // ── Formatters ────────────────────────────────────────────────────────────

    private function formatMenu(Menu $menu): array
    {
        return [
            'id'        => $menu->id,
            'name'      => $menu->name,
            'location'  => $menu->location,
            'is_active' => (bool) $menu->is_active,
            'items'     => $menu->items->map(fn ($i) => $this->formatItem($i))->values(),
        ];
    }

    /**
     * ✅ Recursively format items with unlimited nesting + visibility
     */
    private function formatItem(MenuItem $item): array
    {
        return [
            'id'         => $item->id,
            'label'      => $item->label,
            'url'        => $item->url,
            'target'     => $item->target ?? '_self',
            'sort_order' => $item->sort_order,
            'parent_id'  => $item->parent_id,
            'is_visible' => (bool) $item->is_visible,
            'children'   => $item->children ? $item->children->map(fn ($c) => $this->formatItem($c))->values() : [],
        ];
    }
}
