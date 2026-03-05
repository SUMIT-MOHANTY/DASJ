from fastapi import FastAPI
from .api import health
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor

def create_app() -> FastAPI:
    app = FastAPI(title="Monitoring Placeholder API")
    app.include_router(health.router)
    # Instrument FastAPI for OpenTelemetry (Azure Application Insights placeholder)
    FastAPIInstrumentor().instrument_app(app)
    return app

app = create_app()
