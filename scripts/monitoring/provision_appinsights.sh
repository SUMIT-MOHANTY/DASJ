#!/usr/bin/env bash
set -euo pipefail

# Variables (override as needed)
APPINSIGHTS_NAME="${STATIC_WEB_APP_NAME}-ai"
RESOURCE_GROUP="${RESOURCE_GROUP:-my-rg}"
LOCATION="${LOCATION:-eastus}"

# Create Application Insights component in SANDBOX subscription
az account set --subscription "$SANDBOX_SUBSCRIPTION_ID"
az monitor app-insights component create \
  --app "$APPINSIGHTS_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --location "$LOCATION" \
  --kind web
echo "Application Insights '$APPINSIGHTS_NAME' created."
