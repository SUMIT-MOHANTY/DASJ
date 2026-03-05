from fastapi import FastAPI
from .routers import health
def create_app() -> FastAPI:
    app = FastAPI(title='Backend Service')
    app.include_router(health.router)
    return app
