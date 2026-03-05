# Security & Operational Risks - Books Management

## Identified Risks
1. **Exposed Secrets** - `.env` files may be committed inadvertently.
2. **SQL Injection** - Direct query strings without parameterisation.
3. **Insufficient CORS Policy** - Overly permissive origins.
4. **Lack of Rate Limiting** - Potential for brute‑force attacks on CRUD endpoints.
5. **No Health‑Check Endpoint** - Orchestrators cannot verify service liveness.

## Mitigation Actions
- Add `.env.example` and enforce `.gitignore` for real `.env` files.
- Ensure all TypeORM queries use repository methods (parameterised).
- Configure CORS middleware to allow only trusted domains.
- Integrate `express-rate-limit` with sensible thresholds.
- Implement `/health` endpoint returning `{status: "ok"}`.
