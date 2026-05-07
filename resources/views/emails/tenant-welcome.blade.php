<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Welcome to {{ $appName }}</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            background-color: #f0f2f5;
            font-family: 'Plus Jakarta Sans', Arial, sans-serif;
            color: #1a1a2e;
            -webkit-font-smoothing: antialiased;
        }

        .email-wrapper {
            width: 100%;
            background-color: #f0f2f5;
            padding: 40px 16px;
        }

        .email-card {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 40px rgba(0,0,0,0.08);
        }

        /* ── Header ── */
        .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0369a1 100%);
            padding: 48px 48px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -60px; right: -60px;
            width: 200px; height: 200px;
            border-radius: 50%;
            background: rgba(255,255,255,0.04);
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: -80px; left: -40px;
            width: 240px; height: 240px;
            border-radius: 50%;
            background: rgba(3,105,161,0.15);
        }

        .header-logo {
            display: inline-block;
            background: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.18);
            border-radius: 14px;
            padding: 10px 24px;
            margin-bottom: 28px;
        }

        .header-logo span {
            color: #ffffff;
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.5px;
        }

        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .header p {
            color: rgba(255,255,255,0.72);
            font-size: 15px;
            font-weight: 400;
            line-height: 1.6;
            position: relative;
            z-index: 1;
        }

        /* ── Status Badge ── */
        .status-badge {
            display: inline-block;
            background: rgba(34,197,94,0.15);
            border: 1px solid rgba(34,197,94,0.3);
            color: #16a34a;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            padding: 4px 14px;
            border-radius: 100px;
            margin-bottom: 18px;
        }

        /* ── Body ── */
        .body {
            padding: 44px 48px;
        }

        .greeting {
            font-size: 17px;
            color: #374151;
            line-height: 1.7;
            margin-bottom: 32px;
        }

        .greeting strong {
            color: #0f172a;
            font-weight: 700;
        }

        /* ── Section title ── */
        .section-title {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #9ca3af;
            margin-bottom: 14px;
        }

        /* ── Info Card ── */
        .info-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            overflow: hidden;
            margin-bottom: 24px;
        }

        .info-card-header {
            background: #f1f5f9;
            border-bottom: 1px solid #e2e8f0;
            padding: 14px 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .info-card-header .icon {
            width: 28px;
            height: 28px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }

        .info-card-header .icon.blue  { background: #dbeafe; }
        .info-card-header .icon.green { background: #dcfce7; }

        .info-card-header .card-title {
            font-size: 13px;
            font-weight: 700;
            color: #1e293b;
        }

        .info-row {
            display: flex;
            padding: 13px 20px;
            border-bottom: 1px solid #e2e8f0;
            align-items: center;
        }

        .info-row:last-child { border-bottom: none; }

        .info-label {
            width: 140px;
            flex-shrink: 0;
            font-size: 13px;
            font-weight: 500;
            color: #64748b;
        }

        .info-value {
            font-size: 13px;
            font-weight: 600;
            color: #0f172a;
            word-break: break-all;
        }

        .info-value.mono {
            font-family: 'Courier New', monospace;
            font-size: 12.5px;
            background: #f1f5f9;
            padding: 2px 8px;
            border-radius: 5px;
            color: #1e40af;
        }

        .badge-plan {
            display: inline-block;
            background: linear-gradient(135deg, #dbeafe, #ede9fe);
            color: #3730a3;
            font-size: 12px;
            font-weight: 700;
            padding: 3px 12px;
            border-radius: 100px;
            letter-spacing: 0.3px;
        }

        .badge-active {
            display: inline-block;
            background: #dcfce7;
            color: #15803d;
            font-size: 12px;
            font-weight: 700;
            padding: 3px 12px;
            border-radius: 100px;
        }

        /* ── CTA Button ── */
        .cta-wrapper {
            text-align: center;
            margin: 36px 0 28px;
        }

        .cta-btn {
            display: inline-block;
            background: linear-gradient(135deg, #0369a1 0%, #1d4ed8 100%);
            color: #ffffff !important;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
            padding: 15px 40px;
            border-radius: 12px;
            letter-spacing: 0.3px;
            box-shadow: 0 4px 20px rgba(3,105,161,0.35);
        }

        .cta-hint {
            font-size: 12px;
            color: #9ca3af;
            margin-top: 12px;
        }

        .cta-hint a {
            color: #0369a1;
            text-decoration: none;
            word-break: break-all;
        }

        /* ── Tip Box ── */
        .tip-box {
            background: linear-gradient(135deg, #eff6ff, #f0fdf4);
            border: 1px solid #bfdbfe;
            border-radius: 12px;
            padding: 18px 22px;
            margin-bottom: 36px;
        }

        .tip-box p {
            font-size: 13.5px;
            color: #1e40af;
            line-height: 1.65;
        }

        .tip-box strong { font-weight: 700; }

        /* ── Divider ── */
        .divider {
            border: none;
            border-top: 1px solid #e2e8f0;
            margin: 32px 0;
        }

        /* ── Footer ── */
        .footer {
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            padding: 28px 48px;
            text-align: center;
        }

        .footer p {
            font-size: 12.5px;
            color: #94a3b8;
            line-height: 1.7;
        }

        .footer a {
            color: #0369a1;
            text-decoration: none;
        }

        .footer .app-name {
            font-size: 13px;
            font-weight: 700;
            color: #64748b;
            margin-bottom: 6px;
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
            .email-wrapper { padding: 20px 10px; }
            .header        { padding: 36px 24px 32px; }
            .body          { padding: 32px 24px; }
            .footer        { padding: 24px; }
            .header h1     { font-size: 22px; }
            .info-label    { width: 110px; }
        }
    </style>
</head>
<body>
<div class="email-wrapper">
<div class="email-card">

    {{-- ── Header ── --}}
    <div class="header">
        <div class="header-logo"><span>{{ $appName }}</span></div>
        <div class="status-badge">&#10003;&nbsp; Account Activated</div>
        <h1>Welcome aboard, {{ $adminName }}!</h1>
        <p>Your workspace has been provisioned and is ready to use.</p>
    </div>

    {{-- ── Body ── --}}
    <div class="body">

        <p class="greeting">
            Hi <strong>{{ $adminName }}</strong>, congratulations! Your company
            <strong>{{ $companyName }}</strong> has been successfully registered on
            <strong>{{ $appName }}</strong>. Below are your account details — keep
            them somewhere safe.
        </p>

        {{-- Company Details --}}
        <p class="section-title">Company Details</p>
        <div class="info-card">
            <div class="info-card-header">
                <div class="icon blue">🏢</div>
                <span class="card-title">Company Information</span>
            </div>
            <div class="info-row">
                <span class="info-label">Company Name</span>
                <span class="info-value">{{ $companyName }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Domain</span>
                <span class="info-value mono">{{ $companyDomain }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Plan</span>
                <span class="info-value"><span class="badge-plan">{{ $companyPlan }}</span></span>
            </div>
            <div class="info-row">
                <span class="info-label">Status</span>
                <span class="info-value"><span class="badge-active">&#10003;&nbsp;{{ $companyStatus }}</span></span>
            </div>
        </div>

        {{-- Admin Account --}}
        <p class="section-title">Administrator Account</p>
        <div class="info-card">
            <div class="info-card-header">
                <div class="icon green">👤</div>
                <span class="card-title">Login Credentials</span>
            </div>
            <div class="info-row">
                <span class="info-label">Full Name</span>
                <span class="info-value">{{ $adminName }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Username</span>
                <span class="info-value mono">{{ $adminUsername }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Email</span>
                <span class="info-value mono">{{ $adminEmail }}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Role</span>
                <span class="info-value">Administrator</span>
            </div>
        </div>

        {{-- CTA --}}
        <div class="cta-wrapper">
            <a href="{{ $loginUrl }}" class="cta-btn">Go to My Dashboard &rarr;</a>
            <p class="cta-hint">
                Or visit: <a href="{{ $loginUrl }}">{{ $loginUrl }}</a>
            </p>
        </div>

        {{-- Tip --}}
        <div class="tip-box">
            <p>
                <strong>🔐 Security tip:</strong> For your protection, we recommend
                changing your password after your first login and enabling any available
                two-factor authentication.
            </p>
        </div>

        <hr class="divider" />

        <p style="font-size:13.5px; color:#64748b; line-height:1.7;">
            Need help getting started? Reply to this email or reach our support
            team at <a href="mailto:{{ $supportEmail }}" style="color:#0369a1; text-decoration:none;">{{ $supportEmail }}</a>.
            We're here whenever you need us.
        </p>

    </div>{{-- /body --}}

    {{-- ── Footer ── --}}
    <div class="footer">
        <p class="app-name">{{ $appName }}</p>
        <p>
            This email was sent because an account was created for
            <strong>{{ $companyName }}</strong> on {{ $appName }}.<br />
            If you did not register, please contact
            <a href="mailto:{{ $supportEmail }}">{{ $supportEmail }}</a> immediately.
        </p>
        <p style="margin-top:12px;">
            &copy; {{ date('Y') }} {{ $appName }}. All rights reserved.
        </p>
    </div>

</div>{{-- /email-card --}}
</div>{{-- /email-wrapper --}}
</body>
</html>
