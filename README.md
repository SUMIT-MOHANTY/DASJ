# Project Overview

This repository contains a FastAPI backend and a React (CRA) frontend.

## Development Setup
1. Copy `.env.example` to `.env` and fill in real credentials.
2. Run `docker compose up --build` to start API and PostgreSQL.

## CI/CD Pipeline
The GitHub Actions workflow builds the Docker image, lints the code, and runs placeholder tests on each push.

## Placeholder Credentials
The repo ships with placeholder values (e.g., `<PLACEHOLDER>`). Replace them with actual secrets before deploying.
## Azure Resource Group Deployment Script

### Prerequisites
- Azure CLI installed and accessible in your PATH (`az --version`).
- Bash environment (Linux, macOS, or Windows Subsystem for Linux).
- Permissions to create resource groups in the target subscription (service principal with `Contributor` role or higher).

### Setup
1. Navigate to the project root directory.
2. Copy the sample environment file and edit it:
   ```bash
   cp scripts/.env.sample .env
   nano .env   # or use any editor to replace placeholders
   ```
   Replace each `YOUR_...` placeholder with the actual values from your Azure AD service principal and desired resource group.

### Execution
```bash
chmod +x scripts/deploy-rg.sh   # make the script executable
./scripts/deploy-rg.sh          # run the deployment
```

### Placeholder Replacement Guide
- **AZURE_SUBSCRIPTION_ID** - Your Azure subscription ID (found in the Azure portal > Subscriptions).
- **AZURE_TENANT_ID** - Your Azure AD tenant (directory) ID.
- **AZURE_CLIENT_ID** - The Application (client) ID of the service principal.
- **AZURE_CLIENT_SECRET** - The client secret/password created for the service principal.
- **RESOURCE_GROUP_NAME** - Desired name for the new resource group (must be globally unique within the subscription).
- **RESOURCE_GROUP_LOCATION** - Azure region where the group will be created (e.g., `eastus`, `westeurope`).

### Expected Outcome & Error Handling
- If any required variable is missing, the script will terminate early and list the missing variables.
- If the placeholders are not replaced, Azure CLI authentication will fail with a message similar to:
  ```
  Please ensure you have the correct Azure credentials.
  ```
- Successful execution ends with a confirmation line:
  ```
  ✅ Resource group '<name>' created successfully in '<location>'.
  ```

### Notes
- The script is deliberately strict (`set -euo pipefail`) to stop on any unexpected error.
- Remember to keep your `.env` file out of version control. See `.gitignore` in the `ci/` folder.
- After reviewing, you may want to add this script to your CI/CD pipeline for automated provisioning.
# Books Management


## Fallback Routing

A custom **404 Not Found** page has been added to improve user experience for unknown routes.

- **File:** `404.html` - Friendly HTML page with branding "Books Management - Page Not Found".
- **CSS:** `css/404.css` - Minimal styling for a centered, readable layout.
- **Configuration:** Updated `staticwebapp.config.json` (or `azure-storage-config.json`) to include a
  `navigationFallback` entry that rewrites any unmatched request to `404.html`.
- **Git Tag:** `fallback-404`
- Post‑Deployment Verification Checklist: [docs/POST_DEPLOYMENT_CHECKLIST.md](docs/POST_DEPLOYMENT_CHECKLIST.md)
<!-- Existing README content preserved -->

## Documentation

- [Placeholder Credentials Guide](./PLACEHOLDER_CREDENTIALS.md)
# Books Management Project\n\n## Overview\nThis project provides a simple SPA (React/TypeScript) front‑end and a Flask back‑end offering CRUD endpoints for a `Book` resource.\n\n## Deployment Steps (final)\n1. Build the frontend (placeholder command).\n2. Install Python requirements (see `requirements.txt`).\n3. Run the backend with `python -m backend.run`.\n\n## Azure OpenAI Integration (future)\nCreate the following environment variables before enabling the integration:\n- `AZURE_OPENAI_ENDPOINT` - Azure OpenAI endpoint URL\n- `AZURE_OPENAI_API_KEY` - Access key for the service\n- `AZURE_OPENAI_DEPLOYMENT` - Deployment name for the model\n\nThese placeholders are documented in `backend/config.py`.\n