# Mock Azure OpenAI Service

This document explains how the project uses a **mock** implementation of the Azure OpenAI client for local development and CI.

## When to use the mock
- During local development without Azure credentials.
- In CI pipelines (see `.github/workflows/ci.yml`).

## Switching to the real service
1. Ensure the following Azure environment variables are set:
   - `AZURE_OPENAI_ENDPOINT`
   - `AZURE_OPENAI_API_KEY`
   - Any other required configuration for the `azure-openai` SDK.
2. Set `USE_MOCK_OPENAI=false` (or remove it) in your environment.
3. Deploy the code; the factory will now `require('azure-openai')`.

## Security considerations
- The mock never makes network calls and returns deterministic data, so it is safe for CI.
- Never store real Azure keys in source control. Use Azure Key Vault or CI secret storage.
