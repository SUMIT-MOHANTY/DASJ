from flask import Blueprint, send_from_directory, current_app, Response
import os
seo_bp = Blueprint('seo', __name__)
@seo_bp.route('/robots.txt')
def robots():
    return send_from_directory(os.path.abspath(current_app.static_folder), 'robots.txt', mimetype='text/plain')
@seo_bp.route('/sitemap.xml')
def sitemap():
    return send_from_directory(os.path.abspath(current_app.static_folder), 'sitemap.xml', mimetype='application/xml')
