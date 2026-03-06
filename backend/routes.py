from flask import Blueprint, request, jsonify

api_bp = Blueprint('api', __name__)

books = []  # in‑memory store for demo

@api_bp.route('/books', methods=['GET'])
def list_books():
    return jsonify(books), 200

@api_bp.route('/books', methods=['POST'])
def add_book():
    data = request.get_json() or {}
    if not data.get('title'):
        return jsonify({'error':'title required'}), 400
    books.append({'id': len(books)+1, 'title': data['title']})
    return jsonify(books[-1]), 201
