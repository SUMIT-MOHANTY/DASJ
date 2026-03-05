"""create tables for users, books, members, transactions"""
from alembic import op
import sqlalchemy as sa

revision = '20240101_01'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    op.create_table('users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('username', sa.String(80), nullable=False, unique=True),
        sa.Column('email', sa.String(120), nullable=False, unique=True),
        sa.Column('password_hash', sa.String(128), nullable=False)
    )
    op.create_table('books',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('title', sa.String(200), nullable=False),
        sa.Column('author', sa.String(120), nullable=False),
        sa.Column('isbn', sa.String(20), nullable=False, unique=True),
        sa.Column('copies_total', sa.Integer, nullable=False, server_default='1'),
        sa.Column('copies_available', sa.Integer, nullable=False, server_default='1')
    )
    op.create_table('members',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('full_name', sa.String(150), nullable=False),
        sa.Column('email', sa.String(120), nullable=False, unique=True),
        sa.Column('joined_date', sa.Date, nullable=False)
    )
    op.create_table('transactions',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('member_id', sa.Integer, sa.ForeignKey('members.id'), nullable=False),
        sa.Column('book_id', sa.Integer, sa.ForeignKey('books.id'), nullable=False),
        sa.Column('borrowed_at', sa.DateTime, nullable=False, server_default=sa.text('NOW()')),
        sa.Column('due_at', sa.DateTime, nullable=False),
        sa.Column('returned_at', sa.DateTime, nullable=True)
    )

def downgrade():
    op.drop_table('transactions')
    op.drop_table('members')
    op.drop_table('books')
    op.drop_table('users')
