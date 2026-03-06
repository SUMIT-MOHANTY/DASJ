from flask import Flask
from dotenv import load_dotenv
import os, sys
load_dotenv('.env')
# generate SEO files on start‑up
from scripts.generate_robots import generate_robots
from scripts.generate_sitemap import generate_sitemap
generate_robots()
generate_sitemap()
def create_app():
    app = Flask(__name__, static_folder='../frontend/public', static_url_path='')
    from backend.routes.seo_routes import seo_bp
    app.register_blueprint(seo_bp)
    return app
if __name__ == '__main__':
    create_app().run(host='0.0.0.0', port=8000)
