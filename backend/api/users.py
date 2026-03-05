from fastapi import APIRouter, Depends, HTTPException, status
from backend.schemas.user import UserCreate, UserRead
from backend.services.user import create_user, get_user
router = APIRouter(prefix="/users", tags=["users"])

@router.post("/", response_model=UserRead, status_code=status.HTTP_201_CREATED)
def register(user_in: UserCreate):
    return create_user(user_in)

@router.get("/{user_id}", response_model=UserRead)
def read_user(user_id: int):
    user = get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
