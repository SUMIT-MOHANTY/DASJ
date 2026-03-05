from fastapi import FastAPI
from .api import routes_user, routes_auth

def create_app() -> FastAPI:
    app = FastAPI()
    app.include_router(routes_user.router, prefix="/api/v1/users", tags=["users"])
    app.include_router(routes_auth.router, prefix="/api/v1/auth", tags=["auth"])
    return app
