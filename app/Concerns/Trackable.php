<?php

namespace App\Concerns;

use App\Jobs\TrackPageViewJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

trait Trackable
{
    protected static function bootTrackable(): void
    {
        static::retrieved(function ($model) {
            if (app()->runningInConsole()) {
                return;
            }

            if (!request()->isMethod('get') || request()->isJson()) {
                return;
            }

            $user = Auth::user();

            TrackPageViewJob::dispatch(
                contentId:   $model->getKey(),
                contentType: get_class($model),
                userId:      $user?->id,
                ipAddress:   request()->ip(),
                userAgent:   request()->userAgent(),
            )->onQueue('page-views');
        });
    }
}
