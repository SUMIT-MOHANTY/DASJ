from fastapi import APIRouter, Depends
from ..schemas.user import UserCreate, UserRead
from ..core.security import get_password_hash
from ..db import SessionLocal
from ..models.user import User, Role

router = APIRouter()

@router.post("/", response_model=UserRead)
def create_user(payload: UserCreate):
    db = SessionLocal()
    role = db.query(Role).filter(Role.name == "user").first()
    if not role:
        role = Role(name="user")
        db.add(role)
        db.commit()
    user = User(email=payload.email, hashed_password=get_password_hash(payload.password), roles=[role])
    db.add(user)
    db.commit()
    db.refresh(user)
    db.close()
    return user
