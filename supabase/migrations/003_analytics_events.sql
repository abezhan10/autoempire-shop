-- Analytics Events — server-side event logging for conversion tracking + page views
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name TEXT NOT NULL,
  user_id UUID REFERENCES profiles(id),
  session_id TEXT,
  properties JSONB DEFAULT '{}'::jsonb,
  page_url TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read analytics_events"
  ON analytics_events FOR SELECT
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role can insert analytics_events"
  ON analytics_events FOR INSERT
  WITH CHECK (auth.role() = 'service_role');

-- Indexes for query performance
CREATE INDEX idx_analytics_events_name ON analytics_events(event_name);
CREATE INDEX idx_analytics_events_created ON analytics_events(created_at DESC);
CREATE INDEX idx_analytics_events_user ON analytics_events(user_id);
