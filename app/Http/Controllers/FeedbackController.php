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
    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson();
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $feedbacks = Feedback::orderByRaw("FIELD(status, 'pending', 'reviewed', 'resolved')")
            ->orderByDesc('created_at')
            ->get(['id', 'name', 'email', 'category', 'rating', 'message', 'status', 'admin_notes', 'reviewed_at', 'created_at']);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Feedbacks retrieved successfully.',
                'data'    => $feedbacks,
            ]);
        }

        return Inertia::render('feedback/index', [
            'feedbacks' => $feedbacks,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('feedback/create');
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request)
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

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Feedback submitted successfully.',
                'data'    => $feedback,
            ], 201);
        }

        return back()->with('success', 'Feedback submitted successfully.');
    }

    // ── Show ──────────────────────────────────────────────────────────────────

    public function show(Request $request, Feedback $feedback)
    {
        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Feedback retrieved successfully.',
                'data'    => $feedback,
            ]);
        }

        return Inertia::render('feedback/show', [
            'feedback' => $feedback,
        ]);
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Feedback $feedback): Response
    {
        return Inertia::render('feedback/edit', [
            'feedback' => $feedback,
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Feedback $feedback)
    {
        $data = $request->validate([
            'status'      => ['sometimes', 'in:pending,reviewed,resolved'],
            'admin_notes' => ['nullable', 'string', 'max:5000'],
        ]);

        if (
            isset($data['status']) &&
            $feedback->status === 'pending' &&
            $data['status'] !== 'pending'
        ) {
            $data['reviewed_at'] = now();
        }

        $feedback->update($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Feedback updated successfully.',
                'data'    => $feedback->fresh(),
            ]);
        }

        return redirect('/feedback')->with('success', 'Feedback updated successfully.');
    }

    // ── Toggle Status ─────────────────────────────────────────────────────────

    public function toggleStatus(Request $request, Feedback $feedback)
    {
        $data = $request->validate([
            'status' => ['required', 'in:pending,reviewed,resolved'],
        ]);

        if (
            $feedback->status === 'pending' &&
            $data['status'] !== 'pending'
        ) {
            $data['reviewed_at'] = now();
        }

        $feedback->update($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Status updated successfully.',
                'data'    => $feedback->fresh(),
            ]);
        }

        return back()->with('success', 'Status updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Request $request, Feedback $feedback)
    {
        $feedback->delete();

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Feedback deleted successfully.',
            ]);
        }

        return redirect('/feedback')->with('success', 'Feedback deleted successfully.');
    }
}
