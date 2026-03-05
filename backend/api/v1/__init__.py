from flask import Blueprint
from flask_restful import Api
from ...resources.user import UserResource

api_bp = Blueprint('api_v1', __name__, url_prefix='/api/v1')
api = Api(api_bp)
# Register resources
api.add_resource(UserResource, '/users/<int:user_id>', '/users')
