#!/usr/bin/env bash
set -euo pipefail

placeholders=("PLACEHOLDER" "YOUR_CLIENT_ID" "YOUR_CLIENT_SECRET" "YOUR_TENANT_ID")

for var in AZURE_CLIENT_ID AZURE_CLIENT_SECRET AZURE_TENANT_ID; do
  val="${!var}"
  for ph in "${placeholders[@]}"; do
    if [[ "$val" == "$ph" ]]; then
      echo "::error::${var} contains placeholder value. Please replace it with a real secret." >&2
      exit 1
    fi
  done
done
echo "All Azure credentials are set to non‑placeholder values."
