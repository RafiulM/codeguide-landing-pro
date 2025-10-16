-- Add waitlist table for lead capture
create table "public"."waitlist" (
    "id" uuid not null default gen_random_uuid(),
    "email" text not null,
    "name" text,
    "created_at" timestamp with time zone not null default timezone('utc'::text, now()),
    "updated_at" timestamp with time zone not null default timezone('utc'::text, now()),
    "status" text not null default 'pending'
);

alter table "public"."waitlist" enable row level security;

CREATE UNIQUE INDEX waitlist_pkey ON public.waitlist USING btree (id);

CREATE UNIQUE INDEX waitlist_email_key ON public.waitlist USING btree (email);

alter table "public"."waitlist" add constraint "waitlist_pkey" PRIMARY KEY using index "waitlist_pkey";

alter table "public"."waitlist" add constraint "waitlist_email_key" UNIQUE using index "waitlist_email_key";

alter table "public"."waitlist" add constraint "waitlist_email_check" CHECK ((email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')) not valid;

alter table "public"."waitlist" validate constraint "waitlist_email_check";

grant delete on table "public"."waitlist" to "anon";

grant insert on table "public"."waitlist" to "anon";

grant references on table "public"."waitlist" to "anon";

grant select on table "public"."waitlist" to "anon";

grant trigger on table "public"."waitlist" to "anon";

grant truncate on table "public"."waitlist" to "anon";

grant update on table "public"."waitlist" to "anon";

grant delete on table "public"."waitlist" to "authenticated";

grant insert on table "public"."waitlist" to "authenticated";

grant references on table "public"."waitlist" to "authenticated";

grant select on table "public"."waitlist" to "authenticated";

grant trigger on table "public"."waitlist" to "authenticated";

grant truncate on table "public"."waitlist" to "authenticated";

grant update on table "public"."waitlist" to "authenticated";

grant delete on table "public"."waitlist" to "postgres";

grant insert on table "public"."waitlist" to "postgres";

grant references on table "public"."waitlist" to "postgres";

grant select on table "public"."waitlist" to "postgres";

grant trigger on table "public"."waitlist" to "postgres";

grant truncate on table "public"."waitlist" to "postgres";

grant update on table "public"."waitlist" to "postgres";

grant delete on table "public"."waitlist" to "service_role";

grant insert on table "public"."waitlist" to "service_role";

grant references on table "public"."waitlist" to "service_role";

grant select on table "public"."waitlist" to "service_role";

grant trigger on table "public"."waitlist" to "service_role";

grant truncate on table "public"."waitlist" to "service_role";

grant update on table "public"."waitlist" to "service_role";

create policy "public can insert waitlist entries"
on "public"."waitlist"
as permissive
for insert
to public
with check (true);

create policy "public read-only waitlist"
on "public"."waitlist"
as permissive
for select
to public
using (false); -- No public read access for privacy