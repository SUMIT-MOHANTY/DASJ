from flask import Flask
from .config import Config
from .extensions import db, ma, jwt, migrate
from .api.v1 import api_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    ma.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    app.register_blueprint(api_bp)
    return app
