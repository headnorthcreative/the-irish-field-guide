CREATE TABLE public.journey_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  travel_dates text NOT NULL,
  party_size integer NOT NULL DEFAULT 2,
  destinations text[] NOT NULL DEFAULT '{}',
  ancestry_search boolean NOT NULL DEFAULT false,
  ancestry_notes text,
  message text
);
GRANT INSERT ON public.journey_inquiries TO anon, authenticated;
GRANT ALL ON public.journey_inquiries TO service_role;
ALTER TABLE public.journey_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can send an inquiry" ON public.journey_inquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 120 AND char_length(email) BETWEEN 3 AND 255
    AND char_length(travel_dates) BETWEEN 1 AND 200
    AND party_size BETWEEN 1 AND 7
    AND coalesce(char_length(message),0) <= 2000
    AND coalesce(char_length(ancestry_notes),0) <= 1000
  );