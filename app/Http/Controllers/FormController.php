<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\FormField;
use App\Models\FormSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class FormController extends Controller
{
    // ── Helpers ───────────────────────────────────────────────────────────────

    private const FIELD_TYPES = [
        'text', 'email', 'tel', 'number', 'url',
        'textarea', 'select', 'radio', 'checkbox', 'date', 'file',
    ];

    private function formatForm(Form $form): array
    {
        return [
            'id'               => $form->id,
            'name'             => $form->name,
            'form_type'        => $form->form_type,
            'description'      => $form->description,
            'is_active'        => (bool) $form->is_active,
            'fields_count'     => $form->fields_count ?? $form->fields()->count(),
            'submissions_count'=> $form->submissions_count ?? $form->submissions()->count(),
            'created_at'       => $form->created_at->format('Y-m-d'),
        ];
    }

    // ── Forms Index ───────────────────────────────────────────────────────────

    public function index(): Response
    {
        $forms = Form::withCount(['fields', 'submissions'])
            ->latest()
            ->get()
            ->map(fn (Form $form) => $this->formatForm($form));

        return Inertia::render('forms/index', [
            'forms' => $forms,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('forms/create', [
            'fieldTypes' => self::FIELD_TYPES,
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name'                          => ['required', 'string', 'max:191'],
            'form_type'                     => ['required', 'string', 'max:100'],
            'description'                   => ['nullable', 'string', 'max:1000'],
            'is_active'                     => ['boolean'],
            'fields'                        => ['array'],
            'fields.*.label'               => ['required', 'string', 'max:191'],
            'fields.*.field_type'          => ['required', Rule::in(self::FIELD_TYPES)],
            'fields.*.is_required'         => ['boolean'],
            'fields.*.options'             => ['nullable', 'string'],
            'fields.*.placeholder'         => ['nullable', 'string', 'max:191'],
        ]);

        $form = Form::create([
            'name'        => $data['name'],
            'form_type'   => $data['form_type'],
            'description' => $data['description'] ?? null,
            'is_active'   => $data['is_active'] ?? true,
        ]);

        $this->syncFields($form, $data['fields'] ?? []);

        return redirect()->route('forms.index')
            ->with('success', 'Form created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Form $form): Response
    {
        $form->load('fields');

        return Inertia::render('forms/edit', [
            'form' => [
                'id'          => $form->id,
                'name'        => $form->name,
                'form_type'   => $form->form_type,
                'description' => $form->description,
                'is_active'   => (bool) $form->is_active,
                'fields'      => $form->fields->map(fn (FormField $f) => [
                    'id'          => $f->id,
                    'label'       => $f->label,
                    'field_type'  => $f->field_type,
                    'is_required' => (bool) $f->is_required,
                    'sort_order'  => $f->sort_order,
                    'options'     => $f->options ?? '',
                    'placeholder' => $f->placeholder ?? '',
                ])->values(),
            ],
            'fieldTypes' => self::FIELD_TYPES,
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Form $form): RedirectResponse
    {
        $data = $request->validate([
            'name'                          => ['required', 'string', 'max:191'],
            'form_type'                     => ['required', 'string', 'max:100'],
            'description'                   => ['nullable', 'string', 'max:1000'],
            'is_active'                     => ['boolean'],
            'fields'                        => ['array'],
            'fields.*.id'                  => ['nullable', 'integer'],
            'fields.*.label'               => ['required', 'string', 'max:191'],
            'fields.*.field_type'          => ['required', Rule::in(self::FIELD_TYPES)],
            'fields.*.is_required'         => ['boolean'],
            'fields.*.options'             => ['nullable', 'string'],
            'fields.*.placeholder'         => ['nullable', 'string', 'max:191'],
        ]);

        $form->update([
            'name'        => $data['name'],
            'form_type'   => $data['form_type'],
            'description' => $data['description'] ?? null,
            'is_active'   => $data['is_active'] ?? true,
        ]);

        $this->syncFields($form, $data['fields'] ?? []);

        return redirect()->route('forms.index')
            ->with('success', 'Form updated successfully.');
    }

    // ── Toggle active status ──────────────────────────────────────────────────

    public function toggle(Form $form): RedirectResponse
    {
        $form->update(['is_active' => !$form->is_active]);
        return back()->with('success', 'Form status updated.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Form $form): RedirectResponse
    {
        // Cascade handled by DB (or manually)
        $form->submissions()->each(fn ($s) => $s->responses()->delete());
        $form->submissions()->delete();
        $form->fields()->delete();
        $form->delete();

        return redirect()->route('forms.index')
            ->with('success', 'Form deleted.');
    }

    // ── All Submissions ───────────────────────────────────────────────────────

    public function submissions(): Response
    {
        $submissions = FormSubmission::with('form:id,name,form_type')
            ->latest('submitted_at')
            ->get()
            ->map(fn (FormSubmission $s) => [
                'id'           => $s->id,
                'form_id'      => $s->form_id,
                'form_name'    => $s->form?->name,
                'form_type'    => $s->form?->form_type,
                'sender_name'  => $s->sender_name,
                'sender_email' => $s->sender_email,
                'phone'        => $s->phone,
                'status'       => $s->status,
                'submitted_at' => $s->submitted_at?->format('Y-m-d H:i'),
            ]);

        $forms = Form::orderBy('name')->get(['id', 'name']);

        return Inertia::render('submissions/index', [
            'submissions' => $submissions,
            'forms'       => $forms,
        ]);
    }

    // ── Single submission detail ──────────────────────────────────────────────

    public function showSubmission(FormSubmission $submission): Response
    {
        $submission->load(['form', 'responses.field']);

        return Inertia::render('submissions/show', [
            'submission' => [
                'id'           => $submission->id,
                'form_name'    => $submission->form?->name,
                'sender_name'  => $submission->sender_name,
                'sender_email' => $submission->sender_email,
                'phone'        => $submission->phone,
                'status'       => $submission->status,
                'submitted_at' => $submission->submitted_at?->format('Y-m-d H:i'),
                'responses'    => $submission->responses->map(fn ($r) => [
                    'label'      => $r->field?->label ?? 'Unknown Field',
                    'field_type' => $r->field?->field_type,
                    'value'      => $r->value,
                ])->values(),
            ],
        ]);
    }

    // ── Update submission status ──────────────────────────────────────────────

    public function updateSubmission(Request $request, FormSubmission $submission): RedirectResponse
    {
        $data = $request->validate([
            'status' => ['required', Rule::in(['new', 'read', 'replied', 'archived'])],
        ]);

        $submission->update(['status' => $data['status']]);
        return back()->with('success', 'Status updated.');
    }

    // ── Delete submission ─────────────────────────────────────────────────────

    public function destroySubmission(FormSubmission $submission): RedirectResponse
    {
        $submission->responses()->delete();
        $submission->delete();
        return back()->with('success', 'Submission deleted.');
    }

    // ── Field sync helper ─────────────────────────────────────────────────────

    private function syncFields(Form $form, array $fields): void
    {
        $incomingIds = collect($fields)
            ->filter(fn ($f) => !empty($f['id']))
            ->pluck('id')
            ->all();

        // Delete removed fields
        $form->fields()->whereNotIn('id', $incomingIds)->delete();

        foreach ($fields as $i => $fieldData) {
            $payload = [
                'form_id'     => $form->id,
                'label'       => $fieldData['label'],
                'field_type'  => $fieldData['field_type'],
                'is_required' => $fieldData['is_required'] ?? false,
                'sort_order'  => $i,
                'options'     => $fieldData['options'] ?? null,
                'placeholder' => $fieldData['placeholder'] ?? null,
            ];

            if (!empty($fieldData['id'])) {
                FormField::where('id', $fieldData['id'])->update($payload);
            } else {
                FormField::create($payload);
            }
        }
    }
}
