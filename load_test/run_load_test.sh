#!/usr/bin/env bash
set -e

if ! command -v k6 >/dev/null 2>&1; then
  echo "k6 not found, installing via npm..."
  npm install -g k6
fi

if [ -z "$STATIC_SITE_URL" ]; then
  echo "STATIC_SITE_URL is not set. Exiting."
  exit 1
fi

k6 run load_test/k6_test.js
