import os
from fastapi import FastAPI
from opentelemetry import trace
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor
from .api.router import router

# Resource defines service name for telemetry
resource = Resource.create({"service.name": "monitoring-placeholder-api"})
provider = TracerProvider(resource=resource)
trace.set_tracer_provider(provider)
# Export to Azure Application Insights via OTLP (placeholder endpoint)
exporter = OTLPSpanExporter(endpoint="https://api.applicationinsights.io/v1/track", headers={"x-api-key": os.getenv("APP_INSIGHTS_KEY", "your-key-here")})
provider.add_span_processor(BatchSpanProcessor(exporter))

def create_app() -> FastAPI:
    app = FastAPI(title="Monitoring Placeholder API")
    FastAPIInstrumentor().instrument_app(app)
    app.include_router(router)
    return app

app = create_app()
