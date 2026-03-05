from backend.models.task import Task, Base
from backend.schemas.task import TaskCreate
from typing import List

def create_task(task_in: TaskCreate, db: Session = None) -> dict:
    # Placeholder implementation
    return {"id": 1, "title": task_in.title, "description": task_in.description}

def list_tasks(db: Session = None) -> List[dict]:
    # Placeholder implementation
    return []
