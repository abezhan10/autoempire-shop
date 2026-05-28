#!/usr/bin/env bash
set -euo pipefail

echo "=== AutoEmpire Shop - Deploy to Vercel ==="

# Check prerequisites
for cmd in git vercel; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "Error: $cmd is required. Install it first."
    exit 1
  fi
done

# Ensure clean working tree
if ! git diff --quiet HEAD; then
  echo "Error: Working tree has uncommitted changes. Commit or stash first."
  exit 1
fi

# Verify env vars for deployment
echo ""
echo "Checking environment variables..."
REQUIRED_VARS=(
  NEXT_PUBLIC_SUPABASE_URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY
  SUPABASE_SERVICE_ROLE_KEY
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  STRIPE_SECRET_KEY
  STRIPE_WEBHOOK_SECRET
  OPENROUTER_API_KEY
  NEXT_PUBLIC_BASE_URL
)
MISSING=0
for var in "${REQUIRED_VARS[@]}"; do
  env_val=$(vercel env get "$var" production 2>/dev/null || echo "")
  if [ -z "$env_val" ]; then
    echo "  WARNING: $var not set in Vercel (production)"
    MISSING=$((MISSING + 1))
  fi
done
if [ "$MISSING" -gt 0 ]; then
  echo "Set missing vars: vercel env add <KEY> production"
fi

# Build
echo ""
echo "Building production bundle..."
npm run build

# Deploy
echo ""
echo "Deploying to Vercel..."
vercel --prod
echo ""
echo "Deployment complete!"
