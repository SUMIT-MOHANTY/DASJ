from fastapi import APIRouter, FastAPI
from fastapi.responses import RedirectResponse
from fastapi.openapi.utils import get_openapi
from backend.config import Settings

router = APIRouter()
settings = Settings()

def custom_openapi(app: FastAPI) -> dict:
    if app.openapi_schema:
        return app.openapi_schema
    schema = get_openapi(
        title=app.title,
        version=app.version,
        routes=app.routes,
    )
    schema["servers"] = [{
        "url": settings.docs_url,
        "description": "Placeholder docs base URL",
    }]
    app.openapi_schema = schema
    return schema

@router.get("/docs", include_in_schema=False)
async def swagger_ui_redirect() -> RedirectResponse:
    return RedirectResponse(url="/docs/swagger-ui")
