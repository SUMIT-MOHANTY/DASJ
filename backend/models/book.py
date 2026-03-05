from ..extensions import db

class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(120), nullable=False)
    isbn = db.Column(db.String(20), unique=True, nullable=False)
    copies_total = db.Column(db.Integer, nullable=False, default=1)
    copies_available = db.Column(db.Integer, nullable=False, default=1)
