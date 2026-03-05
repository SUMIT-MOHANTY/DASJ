from pydantic import BaseSettings, AnyUrl

class Settings(BaseSettings):
    docs_url: AnyUrl = "https://placeholder.docs"

    class Config:
        env_file = ".env"
