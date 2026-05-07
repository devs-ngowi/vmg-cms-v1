<?php
namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\HttpException; // ← catch this instead

class Handler extends ExceptionHandler
{
    public function register(): void
    {
        $this->renderable(function (HttpException $e, $request) {
            if ($request->expectsJson()) return null;

            $status = $e->getStatusCode();

            return match ($status) {
                403 => Inertia::render('errors/403')->toResponse($request)->setStatusCode(403),
                404 => Inertia::render('errors/404')->toResponse($request)->setStatusCode(404),
                default => null,
            };
        });
    }
}
