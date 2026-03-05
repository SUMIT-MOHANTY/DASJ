from ..models.book import Book
from ..models.user import User
from ..models.transaction import Transaction
from datetime import datetime

def get_report(session):
    total_books = session.query(Book).count()
    total_users = session.query(User).count()

    # Most borrowed books (by number of transactions)
    most = (session.query(Book.title, db.func.count(Transaction.id).label('cnt'))
            .join(Transaction, Book.id == Transaction.book_id)
            .group_by(Book.id)
            .order_by(db.desc('cnt'))
            .limit(5)
            .all())
    most_borrowed = [{'title': t[0], 'borrow_count': t[1]} for t in most]

    # Overdue items (transactions where due_at < now and not returned)
    overdue_q = (session.query(Transaction)
                 .filter(Transaction.due_at < datetime.utcnow())
                 .filter(Transaction.returned_at.is_(None)))
    overdue_items = [{'id': tr.id, 'book_id': tr.book_id, 'user_id': tr.user_id,
                      'due_at': tr.due_at.isoformat()} for tr in overdue_q]

    return {
        'total_books': total_books,
        'total_users': total_users,
        'most_borrowed': most_borrowed,
        'overdue_items': overdue_items,
    }
