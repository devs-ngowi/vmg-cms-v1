<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FeedbackController extends Controller
{
    // ── Index (Inertia CMS) ───────────────────────────────────────────────────

    public function index(): Response
    {
        $feedbacks = Feedback::orderByRaw("FIELD(status, 'pending', 'reviewed', 'resolved')")
            ->orderByDesc('created_at')
            ->get(['id', 'name', 'email', 'category', 'rating', 'message', 'status', 'admin_notes', 'reviewed_at', 'created_at']);

        return Inertia::render('feedbacks/index', [
            'feedbacks' => $feedbacks,
        ]);
    }

    // ── Create (Inertia CMS form page) ────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('feedbacks/create');
    }

    // ── Store — supports both Inertia redirect AND API JSON ──────────────────

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $data = $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'email',  'max:255'],
            'category' => ['required', 'in:general,compliment,suggestion,complaint,other'],
            'rating'   => ['required', 'integer', 'min:1', 'max:5'],
            'message'  => ['required', 'string',  'max:5000'],
        ]);

        $data['status'] = 'pending';

        $feedback = Feedback::create($data);

        // API clients get JSON; Inertia/browser gets redirect
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Feedback submitted successfully.',
                'data'    => $feedback,
            ], 201);
        }

        return back()->with('success', 'Feedback submitted successfully.');
    }

    // ── Show (Inertia CMS) ────────────────────────────────────────────────────

    public function show(Feedback $feedback): Response
    {
        return Inertia::render('feedbacks/show', [
            'feedback' => $feedback,
        ]);
    }

    // ── Edit (Inertia CMS) ────────────────────────────────────────────────────

    public function edit(Feedback $feedback): Response
    {
        return Inertia::render('feedbacks/edit', [
            'feedback' => $feedback,
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Feedback $feedback): RedirectResponse|JsonResponse
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:255'],
            'email'       => ['required', 'email',  'max:255'],
            'category'    => ['required', 'in:general,compliment,suggestion,complaint,other'],
            'rating'      => ['required', 'integer', 'min:1', 'max:5'],
            'message'     => ['required', 'string',  'max:5000'],
            'status'      => ['required', 'in:pending,reviewed,resolved'],
            'admin_notes' => ['nullable', 'string',  'max:5000'],
        ]);

        if ($feedback->status === 'pending' && $data['status'] !== 'pending') {
            $data['reviewed_at'] = now();
        }

        $feedback->update($data);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Feedback updated successfully.',
                'data'    => $feedback->fresh(),
            ]);
        }

        return redirect('/feedback')->with('success', 'Feedback updated successfully.');
    }

    // ── Toggle Status ─────────────────────────────────────────────────────────

    public function toggleStatus(Request $request, Feedback $feedback): RedirectResponse|JsonResponse
    {
        $data = $request->validate([
            'status' => ['required', 'in:pending,reviewed,resolved'],
        ]);

        if ($feedback->status === 'pending' && $data['status'] !== 'pending') {
            $data['reviewed_at'] = now();
        }

        $feedback->update($data);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Status updated.',
                'data'    => $feedback->fresh(),
            ]);
        }

        return back()->with('success', 'Status updated.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Feedback $feedback): RedirectResponse|JsonResponse
    {
        $feedback->delete();

        if (request()->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Feedback deleted.',
            ]);
        }

        return redirect('/feedback')->with('success', 'Feedback deleted.');
    }
}
