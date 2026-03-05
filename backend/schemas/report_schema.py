from pydantic import BaseModel
from typing import List, Dict

class ReportSchema(BaseModel):
    total_books: int
    total_users: int
    most_borrowed: List[Dict]
    overdue_items: List[Dict]

    class Config:
        orm_mode = True
