# Security Guidelines for codeguide-landing-pro

## 1. Introduction

This document provides security guidelines tailored to the `codeguide-landing-pro` repository—a starter template for modern web applications using Next.js, Tailwind CSS, shadcn/ui, Clerk, Supabase, Stripe, and OpenAI. Adhering to these guidelines will help ensure that your landing page and evolving full-stack application are designed and deployed with security in mind.

## 2. Scope

These guidelines cover:

- Authentication & access control for user onboarding (Clerk)
- Input validation and data handling (Next.js server actions, Supabase)
- Data protection and privacy (TLS, encryption, secrets management)
- API and service security (Stripe webhooks, OpenAI integration)
- Web application security hygiene (CSP, cookies, CSRF)
- Infrastructure and configuration hardening (CI/CD, environment variables)
- Dependency management and vulnerability scanning

## 3. Core Security Principles

- **Security by Design:** Integrate security at every phase—from design to deployment.
- **Least Privilege:** Grant the minimum permissions required (e.g., Supabase RLS, Stripe restricted keys).
- **Defense in Depth:** Layer controls so one failure does not compromise the system.
- **Fail Securely:** Do not expose stack traces or sensitive data in errors.
- **Keep Security Simple:** Prefer clear, maintainable controls over complexity.
- **Secure Defaults:** Ship with lock-down settings; require explicit opt-in to reduce risk.

---

## 4. Authentication & Access Control

### 4.1 Clerk Configuration

- Enforce strong password policies (minimum length, complexity, no reused passwords).
- Enable Multi-Factor Authentication (MFA) for production user sign-in flows.
- Use Clerk’s built-in session management; set short idle timeouts and absolute session lifetimes.
- Regenerate session tokens on privilege changes (signup, password resets) to prevent fixation.

### 4.2 Role-Based Access Control (RBAC)

- Clearly define user roles (e.g., `visitor`, `member`, `admin`).
- Perform all authorization checks server-side in Next.js API routes and Supabase RLS policies.

### 4.3 Secure API Routes

- Protect Next.js serverless functions (`app/api/...`) behind authentication middleware.
- Validate JWTs or Clerk session tokens on each request; reject expired or tampered tokens.

---

## 5. Input Handling & Processing

### 5.1 Server-Side Validation

- Never rely solely on client-side checks: validate all inputs in Next.js server actions or API routes.
- Use TypeScript types (e.g., Zod schemas) to enforce correct payload shapes.

### 5.2 Injection Prevention

- Use Supabase’s query builder or prepared statements—avoid concatenating strings for SQL.
- Sanitize any user-provided HTML or markdown before rendering (e.g., `DOMPurify`).

### 5.3 File Uploads (if applicable)

- Restrict allowed file types and max file sizes.
- Scan uploads for malware and store them outside the public webroot (e.g., in Supabase Storage with RLS).

---

## 6. Data Protection & Privacy

### 6.1 Encryption in Transit & At Rest

- Enforce HTTPS via Vercel or custom TLS settings (minimum TLS 1.2).
- Enable database encryption at rest in Supabase settings.

### 6.2 Secrets Management

- Do not commit `.env` or API keys. Use Vercel environment variables, AWS Secrets Manager, or HashiCorp Vault.
- Rotate secrets periodically and revoke unused credentials.

### 6.3 Logging & Masking

- Log only metadata—never PII, passwords, or tokens.
- Mask or redact sensitive fields in logs (e.g., payment details).

---

## 7. API & Service Security

### 7.1 Stripe Webhooks

- Verify webhook signatures using the Stripe SDK and your endpoint’s signing secret.
- Use a low-privilege Stripe key for webhook handling; do not expose your secret key client-side.

### 7.2 OpenAI Integration

- Restrict OpenAI API key usage by referrer or IP if possible.
- Validate and sanitize prompts if they incorporate user input to prevent prompt injection.

### 7.3 Rate Limiting & Throttling

- Implement rate limiting on critical endpoints (auth, webhooks) using middleware (e.g., `express-rate-limit` in Next.js).  
- Protect against brute-force and DoS attacks.

---

## 8. Web Application Security Hygiene

### 8.1 Security Headers

- **Content-Security-Policy:** Restrict scripts, styles, and frames to trusted origins.
- **Strict-Transport-Security:** Enforce HTTPS for all subdomains (`max-age=63072000; includeSubDomains; preload`).
- **X-Content-Type-Options:** `nosniff` to prevent MIME-type sniffing.
- **X-Frame-Options:** `DENY` or `SAMEORIGIN` to mitigate clickjacking.
- **Referrer-Policy:** `no-referrer-when-downgrade` or stricter.

### 8.2 Cross-Site Request Forgery (CSRF)

- Use anti-CSRF tokens for state-changing Next.js API routes (e.g., via `next-csrf`).

### 8.3 Secure Cookies

- Set `HttpOnly`, `Secure`, and `SameSite=Strict` or `Lax` on session cookies.

### 8.4 Third-Party Resources

- Employ Subresource Integrity (SRI) for any CDN-served scripts or styles.

---

## 9. Infrastructure & Configuration Management

### 9.1 CI/CD Pipeline

- Integrate automated linting, type checking, and security scanning in GitHub Actions or Vercel.
- Fail builds on high-severity vulnerabilities or lint errors.

### 9.2 Environment Hardening

- Disable debug logs and verbose error pages in production.
- Restrict open ports to only those required (80/443).

### 9.3 TLS Configuration

- Regularly audit cipher suites; disable deprecated protocols (SSLv3, TLS 1.0/1.1).

---

## 10. Dependency Management

- Maintain a lockfile (`package-lock.json`) for reproducible installs.
- Regularly run an SCA tool (e.g., `npm audit`, Snyk, Dependabot) and address critical/vulnerable packages.
- Remove unused dependencies to minimize your attack surface.

---

## 11. Monitoring & Incident Response

- Implement real-time monitoring (Sentry, LogRocket) for exceptions and performance issues.
- Define an incident response plan: detection, containment, eradication, recovery, and post-mortem.

---

## 12. Summary

By embedding these security practices throughout the `codeguide-landing-pro` lifecycle—from local development to production deployments—you will ensure a robust, compliant, and trustworthy foundation for `codeguide.dev`. Keep this document updated as your application and threat landscape evolve.