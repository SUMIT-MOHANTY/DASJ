# Authentication API

## POST `/api/auth/login`

- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response (`200`):**
  ```json
  { "token": "<jwt>" }
  ```
- **Error Response (`400`):**
  ```json
  { "error": "Invalid credentials" }
  ```
- **Example Curl:**
  ```bash
  curl -X POST http://localhost:3000/api/auth/login \
    -H 'Content-Type: application/json' \
    -d '{"email":"user@example.com","password":"secret"}'
  ```

## Protected Task Endpoints

All routes under `/api/tasks` now require a valid JWT token.
Include the token in the `Authorization` header as:
```
Authorization: Bearer <token>
```

## Security Note

The secret used for signing tokens is defined in `.env` as `JWT_SECRET`.
In production replace the placeholder value (`your-secret-key`) with a strong, confidential secret.
