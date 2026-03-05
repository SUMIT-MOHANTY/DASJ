# Books Management Project

This repository contains a simple Books Management system with a React
frontend and a Node.js (Express) backend backed by PostgreSQL.

## Project Structure
- `frontend/` - React/TypeScript SPA
- `backend/` - Node.js Express API
- `config/` - Environment configuration files
- `docker/` - Dockerfiles and compose definitions
- `docs/` - Documentation (including DNS setup)

## Quick Start
1. Copy `.env.example` to `.env` and fill in real values.
2. Run `docker compose up --build` to start all services.
3. Access the frontend at `http://localhost:3000`.
4. Use the API at `http://localhost:8000/api/books`.
