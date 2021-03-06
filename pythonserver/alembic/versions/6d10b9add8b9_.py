"""empty message

Revision ID: 6d10b9add8b9
Revises: 7a223bacfc69
Create Date: 2021-06-22 11:41:18.971568

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6d10b9add8b9'
down_revision = '7a223bacfc69'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'admin',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'admin',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###
