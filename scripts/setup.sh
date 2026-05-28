#!/usr/bin/env bash
set -euo pipefail

echo "=== AutoEmpire Shop - Setup ==="

# Install dependencies
echo "Installing npm dependencies..."
npm install

# Copy env file if not exists
if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "Created .env.local from .env.example - please update with your keys"
fi

# Check for required tools
if ! command -v supabase &> /dev/null; then
  echo "Installing Supabase CLI..."
  npm install -g supabase
fi

echo ""
echo "Setup complete! Next steps:"
echo "  1. Update .env.local with your Supabase and Stripe keys"
echo "  2. Run: supabase start (local Supabase)"
echo "  3. Run: npm run dev (start dev server)"
echo ""
