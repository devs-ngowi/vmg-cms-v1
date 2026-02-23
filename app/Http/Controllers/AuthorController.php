<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class AuthorController extends Controller
{
    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $authors = Author::with('user')
            ->latest()
            ->get()
            ->map(fn (Author $author) => [
                'author_id'   => $author->author_id,
                'name'        => $author->name,
                'bio'         => $author->bio,
                'user'        => $author->user
                    ? ['id' => $author->user->id, 'email' => $author->user->email]
                    : null,
                'created_at'  => $author->created_at->format('Y-m-d'),
            ]);

        return Inertia::render('authors/index', [
            'authors' => $authors,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        // Only users who don't already have an author profile
        $users = User::whereDoesntHave('author')
            ->orderBy('full_name')
            ->get(['id', 'full_name', 'username', 'email']);

        return Inertia::render('authors/create', [
            'users' => $users,
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'user_id' => ['required', 'exists:users,id', 'unique:authors,user_id'],
            'name'    => ['required', 'string', 'max:191'],
            'bio'     => ['nullable', 'string', 'max:2000'],
        ]);

        Author::create($data);

        return redirect()->route('authors.index')
            ->with('success', 'Author created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Author $author): Response
    {
        // Include the current user + unlinked users
        $users = User::where(function ($q) use ($author) {
                $q->whereDoesntHave('author')
                  ->orWhere('id', $author->user_id);
            })
            ->orderBy('full_name')
            ->get(['id', 'full_name', 'username', 'email']);

        return Inertia::render('authors/edit', [
            'author' => [
                'author_id' => $author->author_id,
                'user_id'   => $author->user_id,
                'name'      => $author->name,
                'bio'       => $author->bio,
            ],
            'users' => $users,
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Author $author): RedirectResponse
    {
        $data = $request->validate([
            'user_id' => [
                'required',
                'exists:users,id',
                Rule::unique('authors', 'user_id')->ignore($author->author_id, 'author_id'),
            ],
            'name' => ['required', 'string', 'max:191'],
            'bio'  => ['nullable', 'string', 'max:2000'],
        ]);

        $author->update($data);

        return redirect()->route('authors.index')
            ->with('success', 'Author updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Author $author): RedirectResponse
    {
        $author->delete();

        return redirect()->route('authors.index')
            ->with('success', 'Author deleted successfully.');
    }
}
