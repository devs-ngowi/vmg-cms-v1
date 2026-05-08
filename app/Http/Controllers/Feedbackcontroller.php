<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FeedbackController extends Controller
{
    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $feedbacks = Feedback::query()
            ->orderByRaw("FIELD(status, 'pending', 'reviewed', 'resolved')")
            ->orderByDesc('created_at')
            ->get([
                'id', 'name', 'email', 'category', 'rating',
                'message', 'status', 'created_at',
            ]);

        return Inertia::render('feedbacks/index', [
            'feedbacks' => $feedbacks,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('feedbacks/create');
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

        Feedback::create($data);

        return redirect('/feedbacks')
            ->with('success', 'Feedback submitted successfully.');
    }

    // ── Show ──────────────────────────────────────────────────────────────────

    public function show(Feedback $feedback): Response
    {
        return Inertia::render('feedbacks/show', [
            'feedback' => $feedback,
        ]);
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Feedback $feedback): Response
    {
        return Inertia::render('feedbacks/edit', [
            'feedback' => $feedback,
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Feedback $feedback)
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:255'],
            'email'       => ['required', 'email',  'max:255'],
            'category'    => ['required', 'in:general,compliment,suggestion,complaint,other'],
            'rating'      => ['required', 'integer', 'min:1', 'max:5'],
            'message'     => ['required', 'string',  'max:5000'],
            'status'      => ['required', 'in:pending,reviewed,resolved'],
            'admin_notes' => ['nullable', 'string', 'max:5000'],
        ]);

        if ($data['status'] !== 'pending' && $feedback->status === 'pending') {
            $data['reviewed_at'] = now();
        }

        $feedback->update($data);

        return redirect('/feedbacks')
            ->with('success', 'Feedback updated successfully.');
    }

    // ── Toggle status ─────────────────────────────────────────────────────────

    public function toggleStatus(Request $request, Feedback $feedback)
    {
        $data = $request->validate([
            'status' => ['required', 'in:pending,reviewed,resolved'],
        ]);

        if ($feedback->status === 'pending' && $data['status'] !== 'pending') {
            $data['reviewed_at'] = now();
        }

        $feedback->update($data);

        return back()->with('success', 'Status updated.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Feedback $feedback)
    {
        $feedback->delete();

        return redirect('/feedbacks')
            ->with('success', 'Feedback deleted.');
    }
}
