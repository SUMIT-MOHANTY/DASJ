#!/usr/bin/env bash
set -euo pipefail
URL="${LAD_URL:?Set LAD_URL}"
RESULT=$(lighthouse "$URL" --quiet --output=json --chrome-flags="--headless")
LOAD_TIME=$(echo "$RESULT" | jq '.timings.firstContentfulPaint')
if (( $(echo "$LOAD_TIME < 0.200" | bc -l) )); then
  echo "PASS: Load time $LOAD_TIME s"
else
  echo "FAIL: Load time $LOAD_TIME s exceeds 200 ms"
  exit 1
fi
