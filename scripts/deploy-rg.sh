#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------
# Azure Resource Group Deployment Script
# ------------------------------------------------------------
# NOTE: All variables below are placeholders and must be provided
# via a .env file or environment variables before execution.

# Load variables from .env if the file exists in the current directory
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# ------------------------------------------------------------
# Validate required environment variables
# ------------------------------------------------------------
required_vars=(AZURE_SUBSCRIPTION_ID AZURE_TENANT_ID AZURE_CLIENT_ID AZURE_CLIENT_SECRET RESOURCE_GROUP_NAME RESOURCE_GROUP_LOCATION)
missing=()
for var in "${required_vars[@]}"; do
  if [ -z "${!var:-}" ]; then
    missing+=("$var")
  fi
done

if [ ${#missing[@]} -ne 0 ]; then
  echo "Error: The following required environment variables are missing:"
  for v in "${missing[@]}"; do
    echo "  - $v"
  done
  exit 1
fi

# ------------------------------------------------------------
# Authenticate with Azure using a Service Principal
# ------------------------------------------------------------
echo "Authenticating to Azure..."
az login --service-principal -u "$AZURE_CLIENT_ID" -p "$AZURE_CLIENT_SECRET" --tenant "$AZURE_TENANT_ID"

# Set the desired subscription
az account set --subscription "$AZURE_SUBSCRIPTION_ID"

# ------------------------------------------------------------
# Create the Resource Group
# ------------------------------------------------------------
echo "Creating resource group '$RESOURCE_GROUP_NAME' in location '$RESOURCE_GROUP_LOCATION'..."
az group create --name "$RESOURCE_GROUP_NAME" --location "$RESOURCE_GROUP_LOCATION"

echo "✅ Resource group '$RESOURCE_GROUP_NAME' created successfully in '$RESOURCE_GROUP_LOCATION'."
