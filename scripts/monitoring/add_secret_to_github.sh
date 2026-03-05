#!/usr/bin/env bash
set -euo pipefail

APPINSIGHTS_NAME="${STATIC_WEB_APP_NAME}-ai"
RESOURCE_GROUP="${RESOURCE_GROUP:-my-rg}"

# Retrieve connection string (includes instrumentation key)
CONN_STR=$(az monitor app-insights component show -a "$APPINSIGHTS_NAME" -g "$RESOURCE_GROUP" --query connectionString -o tsv)
INSTR_KEY=$(echo "$CONN_STR" | sed -n 's/.*InstrumentationKey=\([^;]*\).*/\1/p')

# Add as GitHub secret (requires GH CLI auth & repo context)
gh secret set APPINSIGHTS_INSTRUMENTATIONKEY -b "$INSTR_KEY"
echo "GitHub secret APPINSIGHTS_INSTRUMENTATIONKEY added."
