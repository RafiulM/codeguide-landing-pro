# Project Requirements Document (PRD)

## 1. Project Overview

`codeguide-landing-pro` is a starter template designed to accelerate the launch of modern web applications. It provides a fully configured environment for both an SEO-friendly landing page and a scalable, interactive application backend. By bundling server-side rendering (SSR), authentication, database integration, payment processing, real-time updates, and AI hooks out of the box, this template removes boilerplate setup so teams can focus on branding and feature development.

For the upcoming `codeguide.dev` platform, this codebase solves two main problems: (1) standing up a polished, responsive marketing site quickly and (2) offering a rock-solid foundation for user management, monetization, and future interactive learning features. Success will be measured by how fast we can go from an empty repository to a public-facing landing page with a waitlist form, secure sign-up flow, and demo payment integration—all while maintaining best practices in performance, security, and maintainability.

## 2. In-Scope vs. Out-of-Scope

### In-Scope (Version 1)
- Responsive marketing landing page built with Next.js 14 App Router and Tailwind CSS + shadcn/ui
- “Join the Waitlist” form connected to Supabase for lead capture
- User authentication (sign-up, sign-in, profile management) via Clerk
- Basic Stripe checkout flow for one-time or subscription signups
- Webhook handler in Next.js API routes to update subscription status in Supabase
- Real-time notifications demo using Supabase’s real-time features
- A proof-of-concept AI integration with OpenAI API (e.g., simple code suggestion endpoint)
- TypeScript throughout, including auto-generated Supabase types
- CI/CD-ready configuration examples (Vercel or GitHub Actions)

### Out-of-Scope (Phase 1)
- Full course creation, management, or delivery system
- Complex AI-driven personalized learning paths (beyond a basic demo)
- Social authentication beyond Clerk’s default providers
- Multi-tenant or enterprise-grade billing dashboards
- Advanced analytics dashboards (only basic pageview tracking)
- Native mobile apps

## 3. User Flow

A new visitor lands on `codeguide.dev` and sees a hero section, feature highlights, and a clear call-to-action to join the waitlist. They scroll through responsive sections built from shadcn/ui components—Testimonials, Pricing overview, FAQ—and decide to enter their email in the waitlist form. After hitting submit, they receive an on-screen confirmation and an email notification stored in Supabase.

Once the platform opens for early access, the user follows an invitation link to register via Clerk. They fill out basic profile details and land on a minimal dashboard. From there, they navigate to a billing page, choose a plan, and are redirected to a Stripe-hosted checkout. After a successful payment, a Stripe webhook updates their subscription record in Supabase. Finally, the dashboard updates in real time to unlock “premium” content and an AI-powered code suggestion widget appears.

## 4. Core Features

- **Dynamic Landing Page**: Fully responsive Next.js 14 App Router pages, SEO-optimized, customizable via Tailwind CSS and shadcn/ui.
- **Waitlist Form**: Simple lead capture using a Server Action that writes to a Supabase table.
- **Authentication & Profile**: Sign-up, sign-in, password resets, and profile management provided by Clerk.
- **Database & Migrations**: Supabase-managed PostgreSQL with auto-generated TypeScript types and Role-Level Security.
- **Payment Processing**: Stripe integration for one-time purchases and subscriptions, including checkout sessions and webhook handling in Next.js API routes.
- **Real-Time Updates**: Push notifications or UI changes via Supabase’s real-time subscriptions.
- **AI Integration**: Example endpoint showing how to call OpenAI API for code suggestions.
- **State Management**: TanStack React Query for caching and data synchronization.
- **Environment Management**: Secure handling of API keys via environment variables and `.env` files.

## 5. Tech Stack & Tools

- **Frontend**: Next.js 14 (App Router), TypeScript, React.
- **Styling & UI Components**: Tailwind CSS, shadcn/ui (Radix-based React components).
- **Authentication**: Clerk.
- **Database & Backend**: Supabase (PostgreSQL, migrations, RLS).
- **Payments**: Stripe API and webhooks.
- **Data Fetching**: TanStack React Query.
- **AI/ML**: OpenAI API (GPT-3.5/GPT-4) demo integration.
- **CI/CD**: Vercel or GitHub Actions (example configs included).
- **IDE Plugins (optional)**: Cursor for AI-assisted coding, Windsurf for code search/navigation.

## 6. Non-Functional Requirements

- **Performance**: First Contentful Paint (FCP) under 1s; TTFB under 200 ms on Vercel.
- **SEO**: Proper meta tags, open graph tags, sitemap, robots.txt.
- **Security**: HTTPS only, secure cookies, HTTP headers (CSP, HSTS), PCI DSS compliance for Stripe, RLS in Supabase.
- **Scalability**: Able to handle 1,000+ concurrent users in waitlist form and simple dashboard actions.
- **Accessibility**: WCAG 2.1 AA compliance for landing page components.
- **Usability**: Clear error messages, form validation, mobile-first design.

## 7. Constraints & Assumptions

- **External Services**: Reliable availability of Clerk, Supabase, Stripe, and OpenAI APIs.
- **Hosting**: Assumes deployment on Vercel or a similar serverless platform that supports Next.js 14 SSR.
- **Budget**: Usage limits for Supabase free tier and Stripe transaction fees.
- **Team Skills**: Familiarity with TypeScript, React, and Tailwind CSS.
- **Browser Support**: Modern evergreen browsers (Chrome, Firefox, Edge, Safari).

## 8. Known Issues & Potential Pitfalls

- **API Rate Limits**: Supabase and OpenAI have rate caps. Implement exponential backoff on retries.
- **Stripe Webhook Delivery**: Might fail or retry; ensure idempotency in webhook handlers.
- **Environment Drift**: Keep `.env.example` in sync with actual variables to avoid deployment failures.
- **RLS Misconfiguration**: Incorrect policies can block valid queries—test with multiple user roles early.
- **SSR vs. CSR Hydration**: Dynamic imports or mismatched markup can cause React hydration warnings—use Next.js conventions.
- **Real-Time Complexity**: Overusing real-time subscriptions can overwhelm the client—scope updates to necessary channels only.

---

This PRD provides a clear, unambiguous blueprint for the AI or development team to build the `codeguide.dev` landing page and initial feature set using the `codeguide-landing-pro` template. All subsequent technical documents (Tech Stack specs, Frontend Guidelines, Backend Structure) can reference this as the single source of truth.