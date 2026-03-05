# backend package
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .routes.book_routes import book_bp
from .routes.transaction_routes import transaction_bp
from .routes.report_routes import report_bp

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    app.register_blueprint(book_bp)
    app.register_blueprint(transaction_bp)
    app.register_blueprint(report_bp)
    return app
