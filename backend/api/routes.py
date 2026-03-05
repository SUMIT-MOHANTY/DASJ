from flask import Blueprint, request, jsonify
from ..services.item_service import (
    get_all_items, create_item, get_item, update_item, delete_item)
from .schemas import (
    ItemCreateRequest, ItemUpdateRequest, ItemResponse, ItemListResponse)

api_bp = Blueprint('api', __name__)

@api_bp.route('/items', methods=['GET'])
def list_items():
    items = get_all_items()
    return jsonify({'status': 'success','data': ItemListResponse(items=items).dict(),'error': None})

@api_bp.route('/items', methods=['POST'])
def add_item():
    data = ItemCreateRequest(**request.json)
    item = create_item(data)
    return jsonify({'status': 'success','data': ItemResponse.from_orm(item).dict(),'error': None}), 201

@api_bp.route('/items/<int:item_id>', methods=['GET'])
def get_one(item_id):
    item = get_item(item_id)
    return jsonify({'status': 'success','data': ItemResponse.from_orm(item).dict(),'error': None})

@api_bp.route('/items/<int:item_id>', methods=['PUT'])
def edit_item(item_id):
    data = ItemUpdateRequest(**request.json)
    item = update_item(item_id, data)
    return jsonify({'status': 'success','data': ItemResponse.from_orm(item).dict(),'error': None})

@api_bp.route('/items/<int:item_id>', methods=['DELETE'])
def remove_item(item_id):
    delete_item(item_id)
    return jsonify({'status': 'success','data': None,'error': None}), 204
