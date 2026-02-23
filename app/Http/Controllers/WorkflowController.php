<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Page;
use App\Models\Service;
use App\Models\User;
use App\Models\Workflow;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class WorkflowController extends Controller
{
    // ── Content type registry ─────────────────────────────────────────────────

    private const CONTENT_TYPES = [
        BlogPost::class,
        // Page::class,
        // Service::class,
    ];

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        // Load only the latest workflow record per content item
        $latestWorkflows = Workflow::latestPerContent()
            ->with(['assignee:id,name', 'assigner:id,name'])
            ->orderByDesc('updated_at')
            ->get();

        // Group them and resolve the actual content titles
        $grouped = collect(Workflow::STEPS)->mapWithKeys(function (string $step) use ($latestWorkflows) {
            $items = $latestWorkflows
                ->where('step', $step)
                ->map(fn (Workflow $w) => $this->formatWorkflowItem($w))
                ->filter()   // remove any where content was deleted
                ->values();

            return [$step => $items];
        });

        // Stats
        $stats = [
            'total'     => $latestWorkflows->count(),
            'draft'     => $latestWorkflows->where('step', 'draft')->count(),
            'review'    => $latestWorkflows->where('step', 'review')->count(),
            'published' => $latestWorkflows->where('step', 'published')->count(),
            'archived'  => $latestWorkflows->where('step', 'archived')->count(),
        ];

        $users = User::orderBy('full_name')->get(['id', 'full_name']);

        return Inertia::render('workflow/index', [
            'grouped' => $grouped,
            'stats'   => $stats,
            'steps'   => array_map(fn ($s) => [
                'key'   => $s,
                'label' => Workflow::STEP_LABELS[$s],
            ], Workflow::STEPS),
            'users'   => $users,
        ]);
    }

    // ── Move to a new step ────────────────────────────────────────────────────

    public function move(Request $request, Workflow $workflow): RedirectResponse
    {
        $data = $request->validate([
            'step'        => ['required', Rule::in(Workflow::STEPS)],
            'assigned_to' => ['nullable', 'exists:users,id'],
            'notes'       => ['nullable', 'string', 'max:1000'],
        ]);

        // Load the original content so we can also update its status
        $content = $workflow->content;

        // Create a new workflow record (history is preserved)
        Workflow::create([
            'content_type' => $workflow->content_type,
            'content_id'   => $workflow->content_id,
            'step'         => $data['step'],
            'assigned_by'  => auth()->id(),
            'assigned_to'  => $data['assigned_to'] ?? auth()->id(),
            'notes'        => $data['notes'] ?? null,
        ]);

        // Sync the content model's own status field so they stay in agreement
        if ($content && method_exists($content, 'update')) {
            $content->update(['status' => $data['step']]);
        }

        return back()->with('success', 'Workflow step updated.');
    }

    // ── Full history for one content item ─────────────────────────────────────

    public function history(string $contentType, int $contentId): Response
    {
        abort_unless(in_array($contentType, self::CONTENT_TYPES), 404);

        $history = Workflow::where('content_type', $contentType)
            ->where('content_id', $contentId)
            ->with(['assignee:id,name', 'assigner:id,name'])
            ->latest()
            ->get()
            ->map(fn (Workflow $w) => [
                'id'          => $w->id,
                'step'        => $w->step,
                'step_label'  => $w->step_label,
                'assignee'    => $w->assignee?->name,
                'assigner'    => $w->assigner?->name,
                'notes'       => $w->notes,
                'created_at'  => $w->created_at->format('Y-m-d H:i'),
            ]);

        // Resolve the content title for the heading
        $model       = app($contentType)->find($contentId);
        $contentTitle = $model?->title ?? $model?->name ?? "#{$contentId}";

        return Inertia::render('workflow/history', [
            'history'      => $history,
            'contentTitle' => $contentTitle,
            'contentType'  => class_basename($contentType),
        ]);
    }

    // ── Format helper ─────────────────────────────────────────────────────────

    private function formatWorkflowItem(Workflow $w): ?array
    {
        $content = $w->content;

        // Content was hard-deleted — skip it
        if (!$content) {
            return null;
        }

        // Resolve a display title from common column names
        $title = $content->title
            ?? $content->name
            ?? 'Untitled #' . $content->getKey();

        // Resolve an edit URL based on type
        $editUrl = $this->editUrl($w->content_type, $content->getKey());

        return [
            'workflow_id'  => $w->id,
            'content_id'   => $w->content_id,
            'content_type' => $w->content_type,
            'type_label'   => $w->type_label,
            'title'        => $title,
            'step'         => $w->step,
            'step_label'   => $w->step_label,
            'assignee'     => $w->assignee?->name,
            'assigner'     => $w->assigner?->name,
            'notes'        => $w->notes,
            'edit_url'     => $editUrl,
            'updated_at'   => $w->updated_at->diffForHumans(),
        ];
    }

    private function editUrl(string $contentType, int $id): ?string
    {
        return match ($contentType) {
            BlogPost::class => route('blog.edit',     ['post'    => $id]),
            // Page::class  => route('pages.edit',    ['page'    => $id]),
            // Service::class => route('services.edit', ['service' => $id]),
            default         => null,
        };
    }
}
