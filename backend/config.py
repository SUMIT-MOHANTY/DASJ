from pydantic import BaseSettings, Field

class Settings(BaseSettings):
    # Placeholder Azure values
    AZURE_CLIENT_ID: str = Field('', env='AZURE_CLIENT_ID')
    AZURE_TENANT_ID: str = Field('', env='AZURE_TENANT_ID')
    AZURE_CLIENT_SECRET: str = Field('', env='AZURE_CLIENT_SECRET')
    POSTGRES_DB: str = Field('postgres', env='POSTGRES_DB')
    POSTGRES_USER: str = Field('postgres', env='POSTGRES_USER')
    POSTGRES_PASSWORD: str = Field('password', env='POSTGRES_PASSWORD')
    POSTGRES_HOST: str = Field('db', env='POSTGRES_HOST')
    POSTGRES_PORT: str = Field('5432', env='POSTGRES_PORT')

    class Config:
        env_file = '.env'
        env_file_encoding = 'utf-8'
