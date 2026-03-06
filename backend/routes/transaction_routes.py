from flask import Blueprint, jsonify
from ..models.transaction import Transaction

transaction_bp = Blueprint('transaction', __name__, url_prefix='/transactions')

@transaction_bp.route('/', methods=['GET'])
def list_transactions():
    txs = Transaction.query.all()
    result = [{'id': t.id, 'book_id': t.book_id, 'user_id': t.user_id} for t in txs]
    return jsonify(result)
