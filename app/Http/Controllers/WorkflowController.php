<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Page;
use App\Models\Service;
use App\Models\User;
use App\Models\Workflow;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class WorkflowController extends Controller
{
    // ── Content type registry ─────────────────────────────────────────────────

    private const CONTENT_TYPES = [
        'BlogPost' => BlogPost::class,
        'Page'     => Page::class,
        'Service'  => Service::class,
    ];

    // ── Helpers ───────────────────────────────────────────────────────────────

    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson();
    }

    private function editUrl(string $contentType, int $id): ?string
    {
        return match ($contentType) {
            BlogPost::class => route('blog.edit', ['post' => $id]),
            Page::class     => route('pages.edit', ['page' => $id]),
            Service::class  => route('services.edit', ['service' => $id]),
            default         => null,
        };
    }

    private function formatWorkflowItem(Workflow $w): ?array
    {
        $content = $w->content;

        if (!$content) {
            return null;
        }

        return [
            'workflow_id'  => $w->id,
            'content_id'   => $w->content_id,
            'content_type' => $w->content_type,
            'type_label'   => $w->type_label,
            'title'        => $content->title ?? $content->name ?? 'Untitled #' . $content->getKey(),
            'step'         => $w->step,
            'step_label'   => $w->step_label,
            'assignee'     => $w->assignee?->full_name,
            'assigner'     => $w->assigner?->full_name,
            'notes'        => $w->notes,
            'edit_url'     => $this->editUrl($w->content_type, $content->getKey()),
            'updated_at'   => $w->updated_at->diffForHumans(),
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $latestWorkflows = Workflow::latestPerContent()
            ->with(['assignee:id,full_name', 'assigner:id,full_name', 'content'])
            ->orderByDesc('updated_at')
            ->get();

        $grouped = collect(Workflow::STEPS)->mapWithKeys(function (string $step) use ($latestWorkflows) {
            $items = $latestWorkflows
                ->where('step', $step)
                ->map(fn (Workflow $w) => $this->formatWorkflowItem($w))
                ->filter()
                ->values();

            return [$step => $items];
        });

        $stats = [
            'total'     => $latestWorkflows->count(),
            'draft'     => $latestWorkflows->where('step', 'draft')->count(),
            'review'    => $latestWorkflows->where('step', 'review')->count(),
            'published' => $latestWorkflows->where('step', 'published')->count(),
            'archived'  => $latestWorkflows->where('step', 'archived')->count(),
        ];

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'data'    => [
                    'grouped' => $grouped,
                    'stats'   => $stats,
                ]
            ]);
        }

        return Inertia::render('workflow/index', [
            'grouped' => $grouped,
            'stats'   => $stats,
            'steps'   => array_map(fn ($s) => [
                'key'   => $s,
                'label' => Workflow::STEP_LABELS[$s],
            ], Workflow::STEPS),
            'users'   => User::orderBy('full_name')->get(['id', 'full_name']),
        ]);
    }

    // ── Move ──────────────────────────────────────────────────────────────────

    public function move(Request $request, Workflow $workflow)
    {
        $data = $request->validate([
            'step'        => ['required', Rule::in(Workflow::STEPS)],
            'assigned_to' => ['nullable', 'exists:users,id'],
            'notes'       => ['nullable', 'string', 'max:1000'],
        ]);

        $newWorkflow = Workflow::create([
            'content_type' => $workflow->content_type,
            'content_id'   => $workflow->content_id,
            'step'         => $data['step'],
            'assigned_by'  => auth()->id(),
            'assigned_to'  => $data['assigned_to'] ?? auth()->id(),
            'notes'        => $data['notes'] ?? null,
        ]);

        // Sync original content status
        if ($workflow->content && method_exists($workflow->content, 'update')) {
            $workflow->content->update(['status' => $data['step']]);
        }

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Workflow updated.',
                'data'    => $this->formatWorkflowItem($newWorkflow->load(['assignee', 'assigner', 'content']))
            ]);
        }

        return back()->with('success', 'Workflow step updated.');
    }

    // ── History ───────────────────────────────────────────────────────────────

    public function history(Request $request, string $contentType, int $contentId)
    {
        // Handle short names (e.g., "BlogPost") vs FQCN
        $fqcn = self::CONTENT_TYPES[$contentType] ?? $contentType;
        abort_unless(in_array($fqcn, self::CONTENT_TYPES), 404);

        $history = Workflow::where('content_type', $fqcn)
            ->where('content_id', $contentId)
            ->with(['assignee:id,full_name', 'assigner:id,full_name'])
            ->latest()
            ->get()
            ->map(fn (Workflow $w) => [
                'id'         => $w->id,
                'step'       => $w->step,
                'step_label' => $w->step_label,
                'assignee'   => $w->assignee?->full_name,
                'assigner'   => $w->assigner?->full_name,
                'notes'      => $w->notes,
                'created_at' => $w->created_at->format('Y-m-d H:i'),
            ]);

        $model = app($fqcn)->find($contentId);
        $contentTitle = $model?->title ?? $model?->full_name ?? "#{$contentId}";

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'data'    => [
                    'title'   => $contentTitle,
                    'history' => $history
                ]
            ]);
        }

        return Inertia::render('workflow/history', [
            'history'      => $history,
            'contentTitle' => $contentTitle,
            'contentType'  => class_basename($fqcn),
        ]);
    }
}
