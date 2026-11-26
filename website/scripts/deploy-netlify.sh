#!/usr/bin/env bash
# Build and deploy the site to https://zayoni-ai.netlify.app (production).
# Auth: in the Claude cloud env the token is injected by the proxy; locally export NETLIFY_AUTH_TOKEN.
set -euo pipefail
cd "$(dirname "$0")/.."
SITE_ID="${NETLIFY_SITE_ID:-56a40642-cedf-4b94-b89e-f2afde76619c}"
npm run build
ZIP="$(mktemp -d)/site.zip"
(cd dist && zip -qr "$ZIP" .)
AUTH=()
[ -n "${NETLIFY_AUTH_TOKEN:-}" ] && AUTH=(-H "Authorization: Bearer $NETLIFY_AUTH_TOKEN")
curl -fsS -X POST "${AUTH[@]}" -H "Content-Type: application/zip" --data-binary @"$ZIP" \
  "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print('deploy', d['id'], d['state'], d.get('ssl_url'))"
