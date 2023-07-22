from sqlalchemy.exc import IntegrityError
from app.models.Job import Job
from datetime import datetime
from flask import Blueprint
from flask import request
from app import db

api = Blueprint('api', __name__)


@api.post('/posts')
def posts():
    try:
        d = request.get_json()
        j = Job(
            description=d['description'],
            location=d['location'],
            company=d['company'],
            source=d['source'],
            title=d['title'],

            deadline=datetime.fromisoformat(d['deadline']),
        )

        db.session.add(j)
        db.session.commit()

        return dict(message="Job Added Successfully")

    except IntegrityError as e:
        return dict(message="the job already exists in the database"), 401
    except Exception as e:
        return dict(message=str(e)), 401
