from flask import request
from flask_restful import Resource
from ..models.user import User
from ..schemas.user import UserSchema
from ..extensions import db

user_schema = UserSchema()

class UserResource(Resource):
    def get(self, user_id):
        user = User.query.get_or_404(user_id)
        return user_schema.dump(user)

    def post(self):
        data = request.get_json() or {}
        user = user_schema.load(data, session=db.session)
        db.session.add(user)
        db.session.commit()
        return user_schema.dump(user), 201
