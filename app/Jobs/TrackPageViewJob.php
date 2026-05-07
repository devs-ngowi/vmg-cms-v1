<?php

namespace App\Jobs;

use App\Models\PageView;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Carbon;

class TrackPageViewJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public int $contentId,
        public string $contentType,
        public ?int $userId = null,
        public ?string $ipAddress = null,
        public ?string $userAgent = null,
    ) {
        //
    }

    public function handle(): void
    {
        // Optional: skip duplicate views from same IP in short time (e.g. last 5 min)
        $exists = PageView::where('content_id', $this->contentId)
            ->where('content_type', $this->contentType)
            ->where('ip_address', $this->ipAddress)
            ->where('viewed_at', '>=', Carbon::now()->subMinutes(5))
            ->exists();

        if ($exists) {
            return;
        }

        PageView::create([
            'content_id'   => $this->contentId,
            'content_type' => $this->contentType,
            'user_id'      => $this->userId,
            'ip_address'   => $this->ipAddress,
            'user_agent'   => $this->userAgent,
            'viewed_at'    => now(),
        ]);
    }
}
