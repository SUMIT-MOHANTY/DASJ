import os

class Config:
    # Replace DATABASE_URL with real credentials before production
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://user:password@localhost/library')
    SECRET_KEY = os.getenv('SECRET_KEY', 'change-me')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
