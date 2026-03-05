from .. import db

class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(200), nullable=False)
    total_copies = db.Column(db.Integer, nullable=False, default=1)

    def __repr__(self):
        return f'<Book {self.title}>'
