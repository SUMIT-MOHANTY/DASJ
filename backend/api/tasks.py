from fastapi import APIRouter, Depends, HTTPException, status
from backend.schemas.task import TaskCreate, TaskRead
from backend.services.task import create_task, list_tasks
router = APIRouter(prefix="/tasks", tags=["tasks"])

@router.post("/", response_model=TaskRead, status_code=status.HTTP_201_CREATED)
def add_task(task_in: TaskCreate):
    return create_task(task_in)

@router.get("/", response_model=list[TaskRead])
def get_tasks():
    return list_tasks()
