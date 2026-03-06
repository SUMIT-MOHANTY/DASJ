## Avoid committing real credentials

- Never store real credentials in source control.
- Ensure `.env` is listed in `.gitignore`.
- Inject secrets via CI/CD environment variables.
- Rotate credentials regularly.
