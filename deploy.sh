#!/usr/bin/env bash
set -e
# Placeholder environment variables - replace with real values before running
export AZURE_SUBSCRIPTION_ID="your-subscription-id"
export RESOURCE_GROUP="your-resource-group"
export STATIC_WEB_APP_NAME="your-app-name"

az login --identity || az login
az account set --subscription "$AZURE_SUBSCRIPTION_ID"

az staticwebapp create \
  --name "$STATIC_WEB_APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --location "WestUS2" \
  --source . \
  --branch main \
  --app-location "frontend" \
  --api-location "backend" \
  --output-location "frontend/build"
echo "Deployment triggered."
