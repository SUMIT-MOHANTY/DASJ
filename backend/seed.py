from .db import SessionLocal, engine, Base
from .models.user import User, Role
from .core.security import get_password_hash

def seed():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    admin_role = Role(name="admin")
    db.add(admin_role)
    db.commit()
    admin_user = User(
        email="admin@example.com",
        hashed_password=get_password_hash("password"),
        roles=[admin_role]
    )
    db.add(admin_user)
    db.commit()
    db.close()

if __name__ == "__main__":
    seed()
