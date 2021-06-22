"""empty message

Revision ID: 86740ff8abf9
Revises: 6d10b9add8b9
Create Date: 2021-06-22 11:42:57.360295

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '86740ff8abf9'
down_revision = '6d10b9add8b9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'admin',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'admin',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###