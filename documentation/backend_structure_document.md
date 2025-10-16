# Backend Structure Document for codeguide-landing-pro

This document explains the backend setup for the `codeguide-landing-pro` starter template in simple, everyday language. You’ll learn how the system is built, how data is stored, and how everything works together so you can quickly launch and scale your project.

## 1. Backend Architecture

### Overview
- We use a modern, serverless-style architecture powered by Next.js API routes and Supabase’s managed PostgreSQL service.
- Backend logic lives in small, focused functions (also called serverless functions) that run whenever your app needs to process data, handle payments, or talk to external services.

### Design Patterns and Frameworks
- **Next.js API Routes**: Organize server logic alongside your front-end code, so everything stays in one place.
- **Server Actions**: Next.js co-locates form and mutation handling with the UI, reducing boilerplate and keeping related code together.
- **BaaS (Backend-as-a-Service)**: Supabase handles the database, authentication, real-time, and storage, reducing the need to manage servers.

### Scalability, Maintainability, and Performance
- **Scalability**: Serverless functions scale automatically with traffic. Supabase scales the database and real-time features under the hood.
- **Maintainability**: Co-located code (API routes next to components) plus TypeScript types makes the codebase easy to understand and update.
- **Performance**: Next.js provides server-side rendering and edge caching. Supabase real-time channels push updates instantly.

## 2. Database Management

### Technologies Used
- We use only one database technology:
  - Supabase (managed PostgreSQL with built-in real-time, authentication, and storage)

### Data Storage and Access
- **Tables**: Organized by feature (e.g., waitlist, profiles, subscriptions).
- **Migrations**: Versioned files that describe changes to your schema over time. You can add or update tables by creating a new migration.
- **Type Safety**: Supabase generates TypeScript types from your schema, so your code always matches the database structure.
- **Access Control**: Role-Level Security (RLS) policies in Supabase limit who can read or write each table.

## 3. Database Schema

Below is a human-readable version of the core tables. You’ll find a SQL example afterward.

### Tables and Their Purpose
- **profiles**: Stores user metadata beyond authentication (name, avatar).
- **waitlist**: Captures visitor emails for early access or announcements.
- **subscriptions**: Tracks a user’s payment plan, status, and billing details.

### SQL Schema (PostgreSQL)
```sql
-- Enable UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. profiles: Additional user info
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT,
  avatar_url TEXT,
  user_id UUID UNIQUE NOT NULL,    -- matches Clerk / Supabase auth ID
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. waitlist: Landing page leads
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. subscriptions: Payment and plan details
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,               -- links to profiles.user_id
  stripe_subscription_id TEXT UNIQUE,
  plan_name TEXT,
  status TEXT,                         -- e.g., active, canceled
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES profiles(user_id)
);
```

## 4. API Design and Endpoints

We follow a REST-style pattern using Next.js API routes. Each endpoint lives under `pages/api/` or `app/api/`.

Key endpoints:

- **Authentication (Clerk)**
  - Clerk manages `/api/auth/*` internally. You don’t need to build sign-in/sign-up routes—Clerk handles them.

- **Waitlist**
  - `POST /api/waitlist` — Add an email to the waitlist.
  - `GET /api/waitlist` — (Admin) List all waitlist entries.

- **Subscription Checkout**
  - `POST /api/subscriptions/create-checkout-session` — Initiates a Stripe checkout.
  - `POST /api/webhooks/stripe` — Stripe sends events here. We verify the signature and update subscription records in Postgres.
  - `GET /api/subscriptions` — Retrieve the current user’s subscription status.

- **Real-time Updates**
  - Handled by Supabase real-time channels. Clients subscribe to channels (e.g., `onChanges('subscriptions')`) to get instant updates.

## 5. Hosting Solutions

- **Next.js App and API Routes**
  - Hosted on Vercel (or any serverless provider like Netlify). Vercel gives you automatic scaling, a global CDN, and zero-configuration HTTPS.

- **Supabase**
  - A managed cloud service. It runs PostgreSQL with automatic backups, high availability, and a built-in real-time server.

Benefits:
- **Reliability**: Both Vercel and Supabase offer 99.9%+ uptime SLAs.
- **Scalability**: Handle traffic spikes without manual intervention.
- **Cost-effectiveness**: Pay only for what you use; free tiers help you get started.

## 6. Infrastructure Components

- **Load Balancer**
  - Provided by Vercel’s edge network. Routes user requests to the nearest edge location.

- **CDN (Content Delivery Network)**
  - Vercel’s CDN caches your static content (CSS, JavaScript, images) globally, reducing load times.

- **Caching Mechanisms**
  - **Next.js ISR/SSR Caching**: Cache rendered pages at the edge for fast repeated loads.
  - **TanStack React Query**: Client-side caching of API responses to avoid unnecessary network calls.

- **Database Connection Pooling**
  - Supabase automatically pools connections to your PostgreSQL database to optimize performance.

## 7. Security Measures

- **Authentication & Authorization**
  - **Clerk** handles user sign-in/up and secure session management.
  - **Role-Level Security (RLS)** in Supabase ensures users only see and modify their own data.

- **Data Encryption**
  - All connections (Next.js ↔︎ Supabase, client ↔︎ Next.js) use HTTPS/TLS.
  - Supabase encrypts data at rest by default.

- **Environment Variables**
  - Store API keys and secrets (Clerk, Stripe, Supabase) in environment variables—never hard-code them.

- **Webhook Verification**
  - Validate Stripe webhook signatures to ensure events are genuine.

- **Content Security**
  - Use HTTP security headers (CSP, HSTS) configured by Vercel-friendly defaults to protect against common web attacks.

## 8. Monitoring and Maintenance

### Monitoring Tools
- **Vercel Analytics**: Tracks performance metrics (TTFB, Largest Contentful Paint) for your Next.js app.
- **Supabase Dashboard**: Real-time database metrics (CPU, connections), logs for queries and errors.
- **Error Tracking**: Integrate a service like Sentry or LogRocket to capture exceptions in your API routes or client code.

### Maintenance Strategies
- **Automated Backups**: Supabase takes regular backups of your database. You can also schedule exports.
- **CI/CD Pipeline**: Use GitHub Actions or Vercel’s Git integration to run tests, linters, and deploy on every push.
- **Dependency Updates**: Enable Dependabot or Renovate to keep libraries up to date and patch security vulnerabilities.
- **Schema Migrations**: Manage changes with versioned migration files. Run migrations automatically as part of your deployment process.

## 9. Conclusion and Overall Backend Summary

The backend of `codeguide-landing-pro` combines serverless Next.js functions, Clerk for authentication, Stripe for payments, and a Supabase-powered PostgreSQL database. This setup:

- Scales automatically with traffic and data needs.
- Keeps your code modular and maintainable with co-located API routes and TypeScript types.
- Ensures security through managed services, RLS policies, and encrypted communication.
- Provides real-time and payment workflows out of the box, so you can focus on building features.

With this solid foundation, you can confidently launch your landing page, capture leads, onboard users, and start monetizing without worrying about infrastructure details. As you grow, simply extend the database schema, add new API routes, and rely on the same serverless and managed services to keep everything running smoothly.