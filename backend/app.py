from fastapi import FastAPI
from backend.config import settings
from backend.routers.health import router as health_router

def create_app() -> FastAPI:
    app = FastAPI()
    app.include_router(health_router)
    return app

app = create_app()
