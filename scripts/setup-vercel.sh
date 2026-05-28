#!/usr/bin/env bash
set -euo pipefail

echo "=== AutoEmpire Shop - Vercel Deployment Setup ==="
echo ""
echo "This script guides you through deploying to Vercel."
echo "You'll need: GitHub account, Vercel account, Stripe account, Supabase account."
echo ""

# Check prerequisites
if ! command -v git &>/dev/null; then echo "Install git first."; exit 1; fi
if ! command -v node &>/dev/null; then echo "Install Node.js first."; exit 1; fi
if ! command -v vercel &>/dev/null; then
  echo "Installing Vercel CLI..."
  npm install -g vercel
fi

echo "Step 1: Push to GitHub"
echo "  Create a repo at https://github.com/new, then run:"
echo "    git remote add origin git@github.com:YOUR_USER/autoempire-shop.git"
echo "    git push -u origin master"
echo ""

echo "Step 2: Import to Vercel"
echo "  Run: vercel"
echo "  - Link to existing project or create new"
echo "  - Select GitHub repo"
echo "  - Framework: Next.js (auto-detected)"
echo ""

echo "Step 3: Set environment variables in Vercel"
echo "  For each variable, run: vercel env add <KEY>"
echo ""
echo "  Production env vars needed:"
echo "  - NEXT_PUBLIC_SUPABASE_URL"
echo "  - NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "  - SUPABASE_SERVICE_ROLE_KEY"
echo "  - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"
echo "  - STRIPE_SECRET_KEY"
echo "  - STRIPE_WEBHOOK_SECRET"
echo "  - OPENROUTER_API_KEY"
echo "  - NEXT_PUBLIC_BASE_URL (your Vercel domain, e.g. https://autoempire-shop.vercel.app)"
echo ""

echo "Step 4: Stripe Webhook"
echo "  - Go to https://dashboard.stripe.com/webhooks"
echo "  - Add endpoint: https://YOUR_DOMAIN/api/webhooks/stripe"
echo "  - Listen for: checkout.session.completed"
echo "  - Copy signing secret -> vercel env add STRIPE_WEBHOOK_SECRET"
echo ""

echo "Step 5: Supabase Production"
echo "  - Create project at https://supabase.com"
echo "  - Run: supabase link --project-ref YOUR_REF"
echo "  - Run: supabase db push"
echo ""

echo "Step 6: Deploy"
echo "  Run: vercel --prod"
echo "  Or push to GitHub (auto-deploy)"
echo ""

echo "Step 7: Configure domain (optional)"
echo "  - In Vercel dashboard: Project > Domains"
echo "  - Add custom domain and configure DNS"
echo "  - Update NEXT_PUBLIC_BASE_URL in Vercel env"
echo ""

echo "Step 8: Verify"
echo "  - Open the deployed URL"
echo "  - Test: browse products, checkout, Stripe redirect"
echo "  - Check webhook: Stripe dashboard > Webhooks > Recent deliveries"
echo ""

echo "=== Setup guide complete ==="
