from pydantic import BaseModel

class BookSchema(BaseModel):
    id: int
    title: str
    author: str
    total_copies: int

    class Config:
        orm_mode = True
