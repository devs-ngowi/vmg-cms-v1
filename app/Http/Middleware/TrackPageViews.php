<?php

namespace App\Http\Middleware;

use App\Jobs\TrackPageViewJob;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class TrackPageViews
{
    /**
     * List of route name patterns or exact names to track
     * You can expand this list as you add more content types
     */
    protected array $trackableRoutes = [
        'pages.show',
        'blog.show',
        'projects.show',
        'services.show',
        'vacancies.show',
        // add more: 'industries.show', etc.
    ];

    /**
     * Map route parameter names → model class
     * This avoids hardcoding logic per route
     */
    protected array $contentTypes = [
        'page'      => \App\Models\Page::class,
        'post'      => \App\Models\BlogPost::class,
        'project'   => \App\Models\Project::class,
        'service'   => \App\Models\Service::class,
        'vacancy'   => \App\Models\Vacancy::class,
    ];

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Skip tracking in these cases
        if (
            $request->isMethod('get') === false ||
            $request->expectsJson() ||
            $request->route() === null ||
            app()->runningInConsole() ||
            $this->isBot($request->userAgent() ?? '')
        ) {
            return $response;
        }

        // Check if current route should be tracked
        $routeName = $request->route()->getName();

        if (!$routeName || !in_array($routeName, $this->trackableRoutes)) {
            return $response;
        }

        // Try to find which parameter holds the content model
        $content = null;
        $contentType = null;

        foreach ($this->contentTypes as $paramName => $modelClass) {
            $content = $request->route()->parameter($paramName);
            if ($content !== null) {
                $contentType = $modelClass;
                break;
            }
        }

        if ($content === null || !is_object($content)) {
            return $response;
        }

        // Dispatch job with minimal data (ID + class name)
        TrackPageViewJob::dispatch(
            contentId:   $content->getKey(),
            contentType: $contentType,
            userId:      Auth::id(),
            ipAddress:   $request->ip(),
            userAgent:   $request->userAgent(),
        )->onQueue('page-views'); // optional: use dedicated queue

        return $response;
    }

    /**
     * Basic bot/crawler detection
     */
    protected function isBot(string $userAgent): bool
    {
        $userAgent = strtolower($userAgent);

        $botPatterns = [
            'bot', 'spider', 'crawl', 'slurp', 'mediapartners', 'adsbot',
            'googlebot', 'bingbot', 'yandex', 'baiduspider', 'duckduckbot',
            'facebot', 'ia_archiver', 'ahrefsbot', 'semrushbot',
        ];

        foreach ($botPatterns as $pattern) {
            if (str_contains($userAgent, $pattern)) {
                return true;
            }
        }

        return false;
    }
}
