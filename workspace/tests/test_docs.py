from fastapi.testclient import TestClient
from backend import create_app

def test_docs_endpoint() -> None:
    client = TestClient(create_app())
    response = client.get("/docs")
    assert response.status_code == 200
    assert "Swagger" in response.text
