from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class ItemBase(BaseModel):
    name: str
    description: Optional[str] = None

class ItemCreateRequest(ItemBase):
    pass

class ItemUpdateRequest(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None

class ItemResponse(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    class Config:
        orm_mode = True

class ItemListResponse(BaseModel):
    items: List[ItemResponse]
