# Project Retrospective - Books Management

## What Went Well
- **Clear Architecture**: Separation of concerns between React frontend, Express backend, and PostgreSQL was well‑defined.
- **Type Safety**: Use of TypeScript DTOs and TypeORM entities reduced runtime bugs.
- **Modular Codebase**: Controllers, services, and routes kept business logic isolated and testable.
- **Docker Support**: Containerisation allowed consistent local development and CI pipelines.

## Challenges
- **Validation Consistency**: Some request validation was duplicated between frontend hooks and backend DTOs.
- **Error Propagation**: In a few endpoints, stack traces leaked to the client due to missing middleware guards.
- **Static‑Site Context**: The project was built as a SPA, but future static‑site needs require pre‑rendering and SEO considerations that were not addressed.
- **Testing Gaps**: Unit tests existed for services, but integration tests for the full request‑response cycle were limited.

## Lessons Learned & Recommendations
1. **Unified Validation Layer** - Adopt a shared schema library (e.g., Zod) that can be used both on the client and server.
2. **Strict Error Middleware** - Ensure all errors are caught and transformed into a consistent JSON payload without exposing internals.
3. **Static‑Site Strategy** - For future projects, evaluate Next.js or Remix for server‑side rendering, or generate a static build via `react-snap`.
4. **Comprehensive Testing** - Add integration tests that spin up the Express app and hit the real endpoints against a test DB.
5. **Security Checklist** - Integrate OWASP Top‑10 checks into CI (e.g., dependency‑check, npm audit, helmet middleware).
6. **Performance Benchmarks** - Record response time metrics using k6 or Artillery to guide scaling decisions.
7. **Documentation Pipeline** - Automate generation of API docs (Swagger/OpenAPI) and keep the retrospective in the `docs/` folder for future reference.
