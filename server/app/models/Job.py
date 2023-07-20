from datetime import datetime
from app import db
import sqlalchemy

db: sqlalchemy


class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    source = db.Column(db.String, nullable=False)
    deadline = db.Column(db.Date, nullable=False)
    company = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    created_at = db.Column(db.Date, default=datetime.today)
