<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\FormField;
use App\Models\FormResponse;
use App\Models\FormSubmission;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class FormController extends Controller
{
    // ── Helpers ───────────────────────────────────────────────────────────────

    private const FIELD_TYPES = [
        'text', 'email', 'tel', 'number', 'url',
        'textarea', 'select', 'radio', 'checkbox', 'date', 'file',
    ];

    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson();
    }

    private function formatForm(Form $form): array
    {
        return [
            'id'                => $form->id,
            'name'              => $form->name,
            'form_type'         => $form->form_type,
            'description'       => $form->description,
            'is_active'         => (bool) $form->is_active,
            'fields_count'      => $form->fields_count ?? $form->fields->count(),
            'submissions_count' => $form->submissions_count ?? $form->submissions()->count(),
            'fields'            => $form->fields->map(fn (FormField $f) => [
                'id'          => $f->id,
                'label'       => $f->label,
                'field_type'  => $f->field_type,
                'is_required' => (bool) $f->is_required,
                'sort_order'  => $f->sort_order,
                'options'     => $f->options     ?? '',
                'placeholder' => $f->placeholder ?? '',
            ])->values(),
            'created_at'        => $form->created_at->format('Y-m-d'),
        ];
    }

    private function formatFormDetail(Form $form): array
    {
        return [
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
                'options'     => $f->options     ?? '',
                'placeholder' => $f->placeholder ?? '',
            ])->values(),
        ];
    }

    private function formatSubmission(FormSubmission $s): array
    {
        return [
            'id'           => $s->id,
            'form_id'      => $s->form_id,
            'form_name'    => $s->form?->name,
            'form_type'    => $s->form?->form_type,
            'sender_name'  => $s->sender_name,
            'sender_email' => $s->sender_email,
            'phone'        => $s->phone,
            'status'       => $s->status ?? 'new',
            'submitted_at' => $s->submitted_at?->format('Y-m-d H:i'),
            'responses'    => $s->relationLoaded('responses')
                ? $s->responses->map(fn ($r) => [
                    'label'      => $r->field?->label ?? 'Unknown Field',
                    'field_type' => $r->field?->field_type,
                    'value'      => $r->value,
                ])->values()
                : [],
        ];
    }

    private function formValidationRules(bool $isUpdate = false): array
    {
        return [
            'name'                 => ['required', 'string', 'max:191'],
            'form_type'            => ['required', 'string', 'max:100'],
            'description'          => ['nullable', 'string', 'max:1000'],
            'is_active'            => ['boolean'],
            'fields'               => ['array'],
            'fields.*.label'       => ['required', 'string', 'max:191'],
            'fields.*.field_type'  => ['required', Rule::in(self::FIELD_TYPES)],
            'fields.*.is_required' => ['boolean'],
            'fields.*.options'     => ['nullable', 'string'],
            'fields.*.placeholder' => ['nullable', 'string', 'max:191'],
            ...($isUpdate ? ['fields.*.id' => ['nullable', 'integer']] : []),
        ];
    }

    // ── Forms Index ───────────────────────────────────────────────────────────
    public function index(Request $request)
{
    $submissions = FormSubmission::with('form')
        ->latest()
        ->get()
        ->map(fn (FormSubmission $s) => [
            'id'           => $s->id,
            'form_id'      => $s->form_id,
            'form_name'    => $s->form?->name,
            'form_type'    => $s->form?->form_type,
            'sender_name'  => $s->sender_name,
            'sender_email' => $s->sender_email,
            'phone'        => $s->phone,
            'status'       => $s->status ?? 'new',
            'submitted_at' => $s->created_at?->diffForHumans(),
        ]);

    $forms = Form::select('id', 'name')->orderBy('name')->get();

    return Inertia::render('submissions/index', [
        'submissions' => $submissions,
        'forms'       => $forms,
    ]);
}

    // ── Create ────────────────────────────────────────────────────────────────

    public function create()
    {
        if ($this->isApi(request())) {
            return response()->json([
                'success' => true,
                'data'    => ['field_types' => self::FIELD_TYPES],
            ]);
        }

        return Inertia::render('forms/create', [
            'fieldTypes' => self::FIELD_TYPES,
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request)
    {
        $data = $request->validate($this->formValidationRules());

        $form = Form::create([
            'name'        => $data['name'],
            'form_type'   => $data['form_type'],
            'description' => $data['description'] ?? null,
            'is_active'   => $data['is_active']   ?? true,
        ]);

        $this->syncFields($form, $data['fields'] ?? []);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Form created successfully.',
                'data'    => $this->formatFormDetail($form->load('fields')),
            ], 201);
        }

        return redirect()->route('forms.index')
            ->with('success', 'Form created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Request $request, Form $form)
    {
        $form->load('fields');

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Form retrieved successfully.',
                'data'    => $this->formatFormDetail($form),
            ]);
        }

        return Inertia::render('forms/edit', [
            'form'       => $this->formatFormDetail($form),
            'fieldTypes' => self::FIELD_TYPES,
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Form $form)
    {
        $data = $request->validate($this->formValidationRules(isUpdate: true));

        $form->update([
            'name'        => $data['name'],
            'form_type'   => $data['form_type'],
            'description' => $data['description'] ?? null,
            'is_active'   => $data['is_active']   ?? true,
        ]);

        $this->syncFields($form, $data['fields'] ?? []);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Form updated successfully.',
                'data'    => $this->formatFormDetail($form->load('fields')),
            ]);
        }

        return redirect()->route('forms.index')
            ->with('success', 'Form updated successfully.');
    }

    // ── Toggle ────────────────────────────────────────────────────────────────

    public function toggle(Request $request, Form $form)
    {
        $form->update(['is_active' => !$form->is_active]);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Form status updated.',
                'data'    => $this->formatForm($form),
            ]);
        }

        return back()->with('success', 'Form status updated.');
    }

    // ── Destroy Form ──────────────────────────────────────────────────────────

    public function destroy(Request $request, Form $form)
    {
        $form->submissions()->each(fn ($s) => $s->responses()->delete());
        $form->submissions()->delete();
        $form->fields()->delete();
        $form->delete();

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Form deleted.',
            ]);
        }

        return redirect()->route('forms.index')
            ->with('success', 'Form deleted.');
    }

    // ── Public Form Submit ────────────────────────────────────────────────────

    public function submit(Request $request, Form $form)
    {
        if (!$form->is_active) {
            return response()->json([
                'success' => false,
                'message' => 'This form is not currently accepting submissions.',
            ], 403);
        }

        $data = $request->validate([
            'responses'             => ['required', 'array'],
            'responses.*.field_id'  => ['required', 'exists:form_fields,id'],
            'responses.*.value'     => ['nullable', 'string', 'max:5000'],
            'sender_name'           => ['nullable', 'string', 'max:191'],
            'sender_email'          => ['nullable', 'email', 'max:191'],
            'phone'                 => ['nullable', 'string', 'max:50'],
        ]);

        $form->load('fields');
        $fieldMap = $form->fields->keyBy('id');

        $senderName  = $data['sender_name']  ?? null;
        $senderEmail = $data['sender_email'] ?? null;
        $phone       = $data['phone']        ?? null;

        foreach ($data['responses'] as $response) {
            $field = $fieldMap->get($response['field_id']);
            if (!$field) continue;

            $value     = trim($response['value'] ?? '');
            $fieldType = $field->field_type;
            $label     = strtolower($field->label);

            if (!$senderEmail && $fieldType === 'email')                                          $senderEmail = $value;
            if (!$phone       && $fieldType === 'tel')                                            $phone       = $value;
            if (!$senderName  && $fieldType === 'text' && (str_contains($label, 'name') || str_contains($label, 'full')))
                $senderName = $value;
        }

        $submission = FormSubmission::create([
            'form_id'      => $form->id,
            'sender_name'  => $senderName,
            'sender_email' => $senderEmail,
            'phone'        => $phone,
            'status'       => 'new',
            'submitted_at' => now(),
        ]);

        foreach ($data['responses'] as $responseData) {
            FormResponse::create([
                'submission_id' => $submission->id,
                'field_id'      => $responseData['field_id'],
                'value'         => $responseData['value'] ?? '',
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Your submission has been received. We will be in touch shortly.',
            'data'    => ['submission_id' => $submission->id],
        ], 201);
    }

    // ── All Submissions ───────────────────────────────────────────────────────

    public function submissions(Request $request)
    {
        $submissions = FormSubmission::with([
                'form:id,name,form_type',
                'responses.field',
            ])
            ->latest('submitted_at')
            ->get()
            ->map(fn (FormSubmission $s) => $this->formatSubmission($s));

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Submissions retrieved successfully.',
                'data'    => $submissions,
            ]);
        }

        $forms = Form::orderBy('name')->get(['id', 'name']);

        return Inertia::render('submissions/index', compact('submissions', 'forms'));
    }

    // ── Single Submission ─────────────────────────────────────────────────────

    public function showSubmission(Request $request, FormSubmission $submission)
    {
        $submission->load(['form', 'responses.field']);

        $detail = $this->formatSubmission($submission);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Submission retrieved successfully.',
                'data'    => $detail,
            ]);
        }

        return Inertia::render('submissions/show', ['submission' => $detail]);
    }

    // ── Update Submission Status ──────────────────────────────────────────────

    public function updateSubmission(Request $request, FormSubmission $submission)
    {
        $data = $request->validate([
            'status' => ['required', Rule::in(['new', 'read', 'replied', 'archived'])],
        ]);

        $submission->update(['status' => $data['status']]);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Status updated.',
                'data'    => $this->formatSubmission($submission->load('form')),
            ]);
        }

        return back()->with('success', 'Status updated.');
    }

    // ── Delete Submission ─────────────────────────────────────────────────────

    public function destroySubmission(Request $request, FormSubmission $submission)
    {
        $submission->responses()->delete();
        $submission->delete();

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Submission deleted.',
            ]);
        }

        return back()->with('success', 'Submission deleted.');
    }

    // ── Field Sync Helper ─────────────────────────────────────────────────────

    private function syncFields(Form $form, array $fields): void
    {
        $incomingIds = collect($fields)
            ->filter(fn ($f) => !empty($f['id']))
            ->pluck('id')
            ->all();

        $form->fields()->whereNotIn('id', $incomingIds)->delete();

        foreach ($fields as $i => $fieldData) {
            $payload = [
                'form_id'     => $form->id,
                'label'       => $fieldData['label'],
                'field_type'  => $fieldData['field_type'],
                'is_required' => $fieldData['is_required'] ?? false,
                'sort_order'  => $i,
                'options'     => $fieldData['options']     ?? null,
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
