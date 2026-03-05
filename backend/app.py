from flask import Flask, jsonify
from .config import Config
from .api.routes import api_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.register_blueprint(api_bp, url_prefix='/api/v1')
    @app.errorhandler(Exception)
    def handle_error(e):
        code = getattr(e, 'code', 500)
        return jsonify({
            'status': 'error',
            'error': {'code': code, 'message': str(e), 'details': None},
            'data': None
        }), code
    return app
