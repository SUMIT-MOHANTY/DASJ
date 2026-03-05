from flask import Blueprint, jsonify, current_app
from ..services.report_service import get_report

report_bp = Blueprint('report', __name__, url_prefix='/reports')

@report_bp.route('/', methods=['GET'])
def get_report_endpoint():
    session = current_app.extensions['sqlalchemy'].db.session
    data = get_report(session)
    return jsonify(data)
