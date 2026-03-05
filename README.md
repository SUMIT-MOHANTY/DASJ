# Project Overview

This repository contains a FastAPI backend and a React (CRA) frontend.

## Development Setup
1. Copy `.env.example` to `.env` and fill in real credentials.
2. Run `docker compose up --build` to start API and PostgreSQL.

## CI/CD Pipeline
The GitHub Actions workflow builds the Docker image, lints the code, and runs placeholder tests on each push.

## Placeholder Credentials
The repo ships with placeholder values (e.g., `<PLACEHOLDER>`). Replace them with actual secrets before deploying.
