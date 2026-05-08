<?php

namespace App\Http\Controllers;

use App\Models\SupportTicket;
use App\Models\SupportTicketReply;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SupportTicketController extends Controller
{
    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request): Response
    {
        $query = SupportTicket::with('assignee:id,full_name')
            ->withCount('replies');

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        if ($request->filled('priority')) {
            $query->where('priority', $request->priority);
        }
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }
        if ($request->filled('search')) {
            $query->where(fn ($q) => $q
                ->where('ticket_number', 'like', "%{$request->search}%")
                ->orWhere('name',        'like', "%{$request->search}%")
                ->orWhere('email',       'like', "%{$request->search}%")
                ->orWhere('subject',     'like', "%{$request->search}%")
            );
        }

        $tickets = $query
            ->orderByRaw("FIELD(priority, 'urgent', 'high', 'medium', 'low')")
            ->orderByRaw("FIELD(status, 'open', 'in_progress', 'waiting_reply', 'resolved', 'closed')")
            ->orderByDesc('created_at')
            ->paginate(20)
            ->through(fn ($t) => [
                'id'            => $t->id,
                'ticket_number' => $t->ticket_number,
                'name'          => $t->name,
                'email'         => $t->email,
                'channel'       => $t->channel,
                'category'      => $t->category,
                'priority'      => $t->priority,
                'subject'       => $t->subject,
                'status'        => $t->status,
                'replies_count' => $t->replies_count,
                'assignee'      => $t->assignee?->full_name,
                'is_overdue'    => $t->is_overdue,
                'created_at'    => $t->created_at->diffForHumans(),
                'resolved_at'   => $t->resolved_at?->diffForHumans(),
            ]);

        $stats = [
            'total'       => SupportTicket::count(),
            'open'        => SupportTicket::where('status', 'open')->count(),
            'in_progress' => SupportTicket::where('status', 'in_progress')->count(),
            'resolved'    => SupportTicket::whereIn('status', ['resolved', 'closed'])->count(),
            'urgent'      => SupportTicket::where('priority', 'urgent')
                                ->whereNotIn('status', ['resolved', 'closed'])->count(),
        ];

        return Inertia::render('support/index', [
            'tickets' => $tickets,
            'stats'   => $stats,
            'filters' => $request->only(['search', 'status', 'priority', 'category']),
        ]);
    }

    // ── Show ──────────────────────────────────────────────────────────────────

    public function show(Request $request, SupportTicket $supportTicket): Response|JsonResponse
    {
        $supportTicket->load([
            'replies'  => fn ($q) => $q->orderBy('created_at'),
            'assignee:id,full_name',
        ]);

        // Auto-advance status when admin first opens ticket
        if ($supportTicket->status === 'open') {
            $supportTicket->update(['status' => 'in_progress']);
            $supportTicket->status = 'in_progress';
        }

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data'    => $supportTicket,
            ]);
        }

        return Inertia::render('support/show', [
            'ticket' => $supportTicket,
            'agents' => User::select('id', 'full_name')->get(),
        ]);
    }

    // ── Store (public ticket submission) ──────────────────────────────────────

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $data = $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'email',  'max:255'],
            'phone'    => ['nullable', 'string',  'max:30'],
            'category' => ['required', 'in:account,jobs,employers,billing,cv,technical,other'],
            'priority' => ['sometimes', 'in:low,medium,high,urgent'],
            'subject'  => ['required', 'string',  'max:255'],
            'message'  => ['required', 'string',  'max:5000'],
            'channel'  => ['sometimes', 'in:live_chat,email,phone,ticket'],
        ]);

        $data['channel']       = $data['channel']  ?? 'ticket';
        $data['priority']      = $data['priority'] ?? 'medium';
        $data['status']        = 'open';
        $data['ticket_number'] = $this->generateTicketNumber();

        $ticket = SupportTicket::create($data);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Your ticket has been submitted. We will get back to you shortly.',
                'data'    => [
                    'id'            => $ticket->id,
                    'ticket_number' => $ticket->ticket_number,
                ],
            ], 201);
        }

        return back()->with('success', 'Your ticket has been submitted. We will get back to you shortly.');
    }

    // ── Update (status / priority / assign / notes) ───────────────────────────

    public function update(Request $request, SupportTicket $supportTicket): RedirectResponse|JsonResponse
    {
        $data = $request->validate([
            'status'      => ['sometimes', 'in:open,in_progress,waiting_reply,resolved,closed'],
            'priority'    => ['sometimes', 'in:low,medium,high,urgent'],
            'assigned_to' => ['sometimes', 'nullable', 'exists:users,id'],
            'admin_notes' => ['sometimes', 'nullable', 'string', 'max:5000'],
        ]);

        if (
            isset($data['status']) &&
            in_array($data['status'], ['resolved', 'closed']) &&
            ! $supportTicket->resolved_at
        ) {
            $data['resolved_at'] = now();
        }

        $supportTicket->update($data);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Ticket updated successfully.',
                'data'    => $supportTicket->fresh(),
            ]);
        }

        return back()->with('success', 'Ticket updated successfully.');
    }

    // ── Reply ─────────────────────────────────────────────────────────────────

    public function reply(Request $request, SupportTicket $supportTicket): RedirectResponse|JsonResponse
    {
        $data = $request->validate([
            'message'     => ['required', 'string', 'max:5000'],
            'is_internal' => ['boolean'],
        ]);

        $user = auth()->user();

        $reply = SupportTicketReply::create([
            'support_ticket_id' => $supportTicket->id,
            'user_id'           => $user->id,
            'author_name'       => $user->full_name,
            'author_email'      => $user->email,
            'message'           => $data['message'],
            'is_internal'       => $data['is_internal'] ?? false,
        ]);

        // Record first staff response time and move status
        if (! $supportTicket->first_responded_at && ! $reply->is_internal) {
            $supportTicket->update([
                'first_responded_at' => now(),
                'status'             => 'waiting_reply',
            ]);
        }

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Reply added successfully.',
                'data'    => $reply,
            ], 201);
        }

        return back()->with('success', 'Reply added successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Request $request, SupportTicket $supportTicket): RedirectResponse|JsonResponse
    {
        $supportTicket->delete();

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Ticket deleted.',
            ]);
        }

        return redirect('/support')->with('success', 'Ticket deleted.');
    }

    // ── Helper ────────────────────────────────────────────────────────────────

    private function generateTicketNumber(): string
    {
        $last = SupportTicket::orderByDesc('id')->value('ticket_number');

        if ($last && preg_match('/TKT-(\d+)/', $last, $m)) {
            $next = (int) $m[1] + 1;
        } else {
            $next = 1;
        }

        return 'TKT-' . str_pad($next, 6, '0', STR_PAD_LEFT); // TKT-000001
    }
}
