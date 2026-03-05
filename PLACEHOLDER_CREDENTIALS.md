# Placeholder Credentials Guide

## Inventory
| Placeholder | Location (file:line) | Purpose |
|---|---|---|
| DB_PASSWORD | src/config/.env.example:1 | Database connection password |
| AZURE_CLIENT_ID | src/config/.env.example:2 | Azure AD application ID |
| AZURE_CLIENT_SECRET | src/config/.env.example:3 | Azure AD secret |
| JWT_SECRET | src/config/.env.example:4 | JWT signing secret |

## Replacement Process
1. Retrieve the real secret from the secret manager (Azure Key Vault, HashiCorp Vault, etc.).
2. Update your local `.env` file (not the `.env.example`) with the real value.
3. Commit **only** the `.env.example` (keep placeholders) and push. Ensure `.env` is listed in `.gitignore`.
4. Rotate the secret in the external manager after deployment.
5. Update GitHub Actions secrets (`Settings -> Secrets and variables -> Actions`).

## Post‑deployment Verification Checklist
- [ ] Successful `az login` with the new service principal.
- [ ] `az group show --name <resource-group>` returns the expected group.
- [ ] Backend health endpoint reachable: `curl -f https://<host>/health`.
- [ ] Database connection established (run a simple read query).

## Security Best Practices
- Never store real credentials in source control.
- Use `.gitignore` to exclude `.env` files containing real secrets.
- Prefer environment‑variable injection via CI/CD pipelines.
- Rotate secrets periodically and after any suspect exposure.

> This guide is linked from the main README for quick access.
