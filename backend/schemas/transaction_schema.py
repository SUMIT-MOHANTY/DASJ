from datetime import datetime
from pydantic import BaseModel

class TransactionSchema(BaseModel):
    id: int
    book_id: int
    user_id: int
    borrowed_at: datetime
    due_at: datetime
    returned_at: datetime | None = None

    class Config:
        orm_mode = True
