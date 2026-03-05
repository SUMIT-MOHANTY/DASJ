#!/usr/bin/env bash
set -euo pipefail

STATIC_SITE_URL="${STATIC_SITE_URL:-https://$STATIC_WEB_APP_NAME.azurestaticapps.net}"

echo "Simulating latency..."
# Simple curl with artificial delay via sleep on server side not possible; we invoke a dummy endpoint that sleeps.
curl -s "$STATIC_SITE_URL/api/slow" || true

echo "Waiting for alert evaluation (approx 5 minutes)..."
sleep 300

echo "Check Azure portal for alert status."
