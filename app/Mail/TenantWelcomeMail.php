<?php

namespace App\Mail;

use App\Models\Company;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class TenantWelcomeMail extends Mailable
{
    use SerializesModels;

    public function __construct(
        public readonly Company $company,
        public readonly array   $admin,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Welcome to ' . config('app.name') . ' — Your account is ready',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.tenant-welcome',   // compatible with all Laravel 9/10/11
            with: [
                'companyName'   => $this->company->name,
                'companyDomain' => $this->company->domain,
                'companyPlan'   => ucfirst($this->company->plan ?? 'basic'),
                'companyStatus' => ucfirst($this->company->status ?? 'active'),
                'adminName'     => $this->admin['full_name'],
                'adminEmail'    => $this->admin['email'],
                'adminUsername' => $this->admin['username'],
                'loginUrl'      => 'https://' . $this->company->domain . '/login',
                'appName'       => config('app.name'),
                'appUrl'        => config('app.url'),
                'supportEmail'  => config('mail.from.address'),
            ],
        );
    }
}