#!/usr/bin/env bash
set -euo pipefail

echo "=== AutoEmpire Shop - Deploy to Vercel ==="

# Build
echo "Building..."
npm run build

# Deploy
if command -v vercel &> /dev/null; then
  vercel --prod
else
  echo "Vercel CLI not found. Install it: npm i -g vercel"
  exit 1
fi

echo "Deployment complete!"
