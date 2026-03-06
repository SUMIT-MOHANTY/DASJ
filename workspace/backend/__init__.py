from fastapi import FastAPI
from fastapi.openapi.docs import get_swagger_ui_html
from backend.config import Settings
from backend.api.health import router as health_router
from backend.api.docs_route import router as docs_router, custom_openapi

def create_app() -> FastAPI:
    settings = Settings()
    app = FastAPI()
    app.title = "My Service"
    app.include_router(health_router)
    app.include_router(docs_router)
    app.openapi = lambda: custom_openapi(app)
    @app.get("/docs/swagger-ui", include_in_schema=False)
    async def swagger_ui_html() -> any:
        return get_swagger_ui_html(openapi_url="/openapi.json", title="API Docs")
    return app
