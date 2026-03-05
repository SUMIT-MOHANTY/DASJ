#!/usr/bin/env bash
# Azure CLI script to create the Azure Static Web App for this project.
# ---------------------------------------------------------------
# IMPORTANT: Replace all placeholder values (<YOUR_...>) with real
# credentials before running. Do NOT commit real secrets to source control.
# ---------------------------------------------------------------

# Load environment variables from the example file (uncomment after you create a real .env).
# source $(dirname $(realpath $0))/../backend/.env.example

# ---- Configuration ------------------------------------------------
SUBSCRIPTION_ID="${AZ_SUBSCRIPTION_ID:-<YOUR_SUBSCRIPTION_ID>}"
RESOURCE_GROUP="${AZ_RESOURCE_GROUP:-<YOUR_RESOURCE_GROUP>}"
APP_NAME="${STATIC_WEB_APP_NAME:-<YOUR_STATIC_WEB_APP_NAME>}"
LOCATION="${AZ_LOCATION:-<YOUR_LOCATION>}"
REPO_URL="${FRONTEND_REPO_URL:-<YOUR_GIT_REPOSITORY_URL>}"
BRANCH="${FRONTEND_BRANCH:-main}"

# ---- Preconditions -------------------------------------------------
if ! command -v az >/dev/null 2>&1; then
  echo "[ERROR] Azure CLI (az) is not installed. Aborting." >&2
  exit 1
fi

# Ensure we are operating in the correct subscription.
az account set --subscription "$SUBSCRIPTION_ID"

# ---- Create the Static Web App ------------------------------------
az staticwebapp create \
  --name "$APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --location "$LOCATION" \
  --source "$REPO_URL" \
  --branch "$BRANCH" \
  --app-location "frontend" \
  --output-location "dist" \
  --login-with-github

if [ $? -eq 0 ]; then
  echo "[INFO] Static Web App '$APP_NAME' created successfully."
else
  echo "[ERROR] Failed to create Static Web App. Review the error messages above." >&2
fi
