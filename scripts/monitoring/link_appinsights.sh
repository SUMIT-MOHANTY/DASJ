#!/usr/bin/env bash
set -euo pipefail

APPINSIGHTS_NAME="${STATIC_WEB_APP_NAME}-ai"
RESOURCE_GROUP="${RESOURCE_GROUP:-my-rg}"

# Get Static Web App resource ID
SWA_ID=$(az staticwebapp show -n "$STATIC_WEB_APP_NAME" -g "$RESOURCE_GROUP" --query id -o tsv)

# Link Application Insights to the Static Web App
az staticwebapp update \
  --ids "$SWA_ID" \
  --app-insights "$APPINSIGHTS_NAME" \
  --app-insights-key "$(az monitor app-insights component show -a "$APPINSIGHTS_NAME" -g "$RESOURCE_GROUP" --query instrumentationKey -o tsv)"
echo "Linked Application Insights '$APPINSIGHTS_NAME' to Static Web App '$STATIC_WEB_APP_NAME'."
