create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('paint', 'ink', 'plastic', 'rubber')),
  name text not null,
  spec text,
  cas_no text,
  description text,
  image_url text,
  created_at timestamptz not null default now()
);

alter table products enable row level security;

create policy "Public read access"
  on products for select
  to anon
  using (true);
