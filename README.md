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
