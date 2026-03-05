from flask import Blueprint, jsonify
from ..models.book import Book
from .. import db

book_bp = Blueprint('book', __name__, url_prefix='/books')

@book_bp.route('/', methods=['GET'])
def list_books():
    books = Book.query.all()
    result = [{'id': b.id, 'title': b.title, 'author': b.author} for b in books]
    return jsonify(result)
