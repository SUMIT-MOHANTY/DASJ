import os

class Config:
    DEBUG = os.getenv('DEBUG', 'False') == 'True'
    # Add DB URI etc. when Azure OpenAI integration is ready
