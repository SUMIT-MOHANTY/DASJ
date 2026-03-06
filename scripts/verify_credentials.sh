#!/usr/bin/env bash
# verify_credentials.sh - Helper to verify that updated credentials work post‑deployment.

set -e

echo "Verifying Azure login..."
az login --service-principal -u "$AZURE_CLIENT_ID" -p "$AZURE_CLIENT_SECRET" --tenant "$AZURE_TENANT_ID"

echo "Checking resource group..."
az group show --name "$AZURE_RESOURCE_GROUP"

echo "Checking backend health endpoint..."
curl -f https://localhost/health

echo "All checks passed."
