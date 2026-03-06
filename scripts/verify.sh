#!/usr/bin/env bash

# Verify that unknown routes return the custom 404 page.
# Replace <staging-url> with your actual Azure Static Web Apps staging URL before running.
STAGING_URL="https://<staging-url>"
curl -I "$STAGING_URL/nonexistent"
echo "\nRunning Lighthouse audit..."
lighthouse "$STAGING_URL/nonexistent" --quiet --output=json --output-path=./lighthouse-report.json
