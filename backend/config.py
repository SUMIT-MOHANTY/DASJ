from pydantic import BaseSettings
class Settings(BaseSettings):
    DATABASE_URL: str = "sqlite:///:memory:"
    JWT_SECRET: str = "changeme"
    class Config:
        env_file = ".env"
settings = Settings()
