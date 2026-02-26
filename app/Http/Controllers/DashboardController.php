<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\BlogPost;
use App\Models\Form;
use App\Models\FormSubmission;
use App\Models\HeroSlide;
use App\Models\Industry;
use App\Models\Media;
use App\Models\Page;
use App\Models\PageView;
use App\Models\Project;
use App\Models\Role;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\User;
use App\Models\Workflow;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('dashboard', [
            'stats'            => $this->stats(),
            'recentPosts'      => $this->recentPosts(),
            'recentSubmissions'=> $this->recentSubmissions(),
            'workflowCounts'   => $this->workflowCounts(),
            'contentByStatus'  => $this->contentByStatus(),
            'pageViewsChart'   => $this->pageViewsChart(),
            'storageStats'     => $this->storageStats(),
            'topPages'         => $this->topPages(),
        ]);
    }

    // ── Top-level stat cards ──────────────────────────────────────────────────

    private function stats(): array
    {
        return [
            'users'         => User::count(),
            'authors'       => Author::count(),
            'blog_posts'    => BlogPost::count(),
            'published_posts' => BlogPost::where('status', 'published')->count(),
            'pages'         => Page::count(),
            'projects'      => Project::count(),
            'services'      => Service::count(),
            'industries'    => Industry::count(),
            'media_files'   => Media::count(),
            'forms'         => $this->safeCount('forms'),
            'submissions_new' => $this->safeCount('form_submissions', ['status' => 'new']),
            'testimonials_pending' => Testimonial::where('is_approved', false)->count(),
            'hero_slides_active' => HeroSlide::where('is_active', true)->count(),
            'roles'         => Role::count(),
        ];
    }

    // ── Recent blog posts ─────────────────────────────────────────────────────

    private function recentPosts(): array
    {
        return BlogPost::with('author:id,name')
            ->latest()
            ->limit(6)
            ->get(['id', 'title', 'status', 'author_id', 'published_at', 'created_at'])
            ->map(fn ($p) => [
                'id'           => $p->id,
                'title'        => $p->title,
                'status'       => $p->status,
                'author'       => $p->author?->name,
                'published_at' => $p->published_at?->format('M d, Y'),
                'created_at'   => $p->created_at->diffForHumans(),
                'edit_url'     => "/blog/{$p->id}/edit",
            ])
            ->all();
    }

    // ── Recent form submissions ───────────────────────────────────────────────

    private function recentSubmissions(): array
    {
        if (!$this->tableExists('form_submissions')) return [];

        return DB::table('form_submissions')
            ->join('forms', 'form_submissions.form_id', '=', 'forms.id')
            ->select([
                'form_submissions.id',
                'form_submissions.status',
                'form_submissions.created_at',
                'forms.name as form_name',
            ])
            ->orderByDesc('form_submissions.created_at')
            ->limit(5)
            ->get()
            ->map(fn ($s) => [
                'id'        => $s->id,
                'form_name' => $s->form_name,
                'status'    => $s->status,
                'received'  => \Carbon\Carbon::parse($s->created_at)->diffForHumans(),
            ])
            ->all();
    }

    // ── Workflow counts by step ───────────────────────────────────────────────

    private function workflowCounts(): array
    {
        if (!$this->tableExists('workflows')) return [];

        // Latest workflow per content item, grouped by step
        $counts = DB::table('workflows')
            ->select('step', DB::raw('COUNT(*) as total'))
            ->whereIn('id', function ($sub) {
                $sub->select(DB::raw('MAX(id)'))
                    ->from('workflows')
                    ->groupBy('content_type', 'content_id');
            })
            ->groupBy('step')
            ->pluck('total', 'step')
            ->all();

        $steps = ['draft', 'review', 'published', 'archived'];
        return array_map(fn ($s) => [
            'step'  => $s,
            'label' => ucfirst($s === 'review' ? 'In Review' : $s),
            'count' => (int)($counts[$s] ?? 0),
        ], $steps);
    }

    // ── Content breakdown by status ───────────────────────────────────────────

    private function contentByStatus(): array
    {
        $postStatuses = BlogPost::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->pluck('count', 'status')
            ->all();

        $projectStatuses = Project::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->pluck('count', 'status')
            ->all();

        return [
            'blog_posts' => [
                'draft'     => (int)($postStatuses['draft']     ?? 0),
                'review'    => (int)($postStatuses['review']    ?? 0),
                'published' => (int)($postStatuses['published'] ?? 0),
                'archived'  => (int)($postStatuses['archived']  ?? 0),
            ],
            'projects' => [
                'draft'     => (int)($projectStatuses['draft']     ?? 0),
                'review'    => (int)($projectStatuses['review']    ?? 0),
                'published' => (int)($projectStatuses['published'] ?? 0),
                'archived'  => (int)($projectStatuses['archived']  ?? 0),
            ],
        ];
    }

    // ── Page views (last 30 days, grouped by day) ─────────────────────────────

    private function pageViewsChart(): array
    {
        if (!$this->tableExists('page_views')) return [];

        return DB::table('page_views')
            ->select(
                DB::raw('DATE(viewed_at) as date'),
                DB::raw('COUNT(*) as views')
            )
            ->where('viewed_at', '>=', now()->subDays(29))
            ->groupBy('date')
            ->orderBy('date')
            ->get()
            ->map(fn ($r) => [
                'date'  => $r->date,
                'views' => (int)$r->views,
            ])
            ->all();
    }

    // ── Media storage stats ───────────────────────────────────────────────────

    private function storageStats(): array
    {
        $totals = Media::select(
            DB::raw('COUNT(*) as total_files'),
            DB::raw('SUM(size_bytes) as total_bytes'),
            DB::raw('COUNT(CASE WHEN mime_type LIKE "image/%" THEN 1 END) as images'),
            DB::raw('COUNT(CASE WHEN mime_type NOT LIKE "image/%" THEN 1 END) as documents'),
        )->first();

        $bytes = (int)($totals->total_bytes ?? 0);

        return [
            'total_files' => (int)($totals->total_files ?? 0),
            'images'      => (int)($totals->images ?? 0),
            'documents'   => (int)($totals->documents ?? 0),
            'total_bytes' => $bytes,
            'human_size'  => $this->humanBytes($bytes),
        ];
    }

    // ── Top pages by view count ───────────────────────────────────────────────

    private function topPages(): array
    {
        if (!$this->tableExists('page_views')) return [];

        return DB::table('page_views')
            ->select('content_type', 'content_id', DB::raw('COUNT(*) as views'))
            ->where('viewed_at', '>=', now()->subDays(30))
            ->groupBy('content_type', 'content_id')
            ->orderByDesc('views')
            ->limit(5)
            ->get()
            ->map(fn ($r) => [
                'label' => class_basename($r->content_type) . ' #' . $r->content_id,
                'views' => (int)$r->views,
            ])
            ->all();
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private function safeCount(string $table, array $where = []): int
    {
        if (!$this->tableExists($table)) return 0;
        $q = DB::table($table);
        foreach ($where as $col => $val) $q->where($col, $val);
        return (int)$q->count();
    }

    private function tableExists(string $table): bool
    {
        return DB::getSchemaBuilder()->hasTable($table);
    }

    private function humanBytes(int $bytes): string
    {
        if ($bytes >= 1_073_741_824) return round($bytes / 1_073_741_824, 1) . ' GB';
        if ($bytes >= 1_048_576)    return round($bytes / 1_048_576, 1) . ' MB';
        if ($bytes >= 1_024)        return round($bytes / 1_024) . ' KB';
        return $bytes . ' B';
    }
}
