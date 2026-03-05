from ..models.item import Item
from ..utils.db import db_session

def get_all_items():
    return db_session.query(Item).all()

def create_item(data):
    item = Item(name=data.name, description=data.description)
    db_session.add(item)
    db_session.commit()
    db_session.refresh(item)
    return item

def get_item(item_id):
    item = db_session.query(Item).get(item_id)
    if not item:
        raise Exception('Item not found')
    return item

def update_item(item_id, data):
    item = get_item(item_id)
    if data.name is not None:
        item.name = data.name
    if data.description is not None:
        item.description = data.description
    db_session.commit()
    return item

def delete_item(item_id):
    item = get_item(item_id)
    db_session.delete(item)
    db_session.commit()
