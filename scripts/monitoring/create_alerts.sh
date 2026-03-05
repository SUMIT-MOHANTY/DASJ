#!/usr/bin/env bash
set -euo pipefail

APPINSIGHTS_NAME="${STATIC_WEB_APP_NAME}-ai"
RESOURCE_GROUP="${RESOURCE_GROUP:-my-rg}"
SUBSCRIPTION_ID=$(az account show --query id -o tsv)
AI_ID=$(az monitor app-insights component show -a "$APPINSIGHTS_NAME" -g "$RESOURCE_GROUP" --query id -o tsv)

# Availability (Uptime) Alert - fire if availability < 99%
az monitor metrics alert create \
  --name "${STATIC_WEB_APP_NAME}-availability-alert" \
  --resource-group "$RESOURCE_GROUP" \
  --scopes "$AI_ID" \
  --condition "availability < 99" \
  --description "Availability fell below 99%" \
  --action "email" \
  --severity 2

# Response Time Alert - fire if avg response > 2000ms over 5 mins
az monitor metrics alert create \
  --name "${STATIC_WEB_APP_NAME}-response-time-alert" \
  --resource-group "$RESOURCE_GROUP" \
  --scopes "$AI_ID" \
  --condition "requests/responseTime avg > 2000" \
  --window-size PT5M \
  --description "Average response time > 2s" \
  --action "email" \
  --severity 3
echo "Alert rules created for Application Insights '$APPINSIGHTS_NAME'."
