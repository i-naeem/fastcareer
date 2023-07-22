from app.models.Job import Job
from datetime import datetime
from flask import Blueprint
from flask import request
from app import db

api = Blueprint('api', __name__)


@api.route('/posts', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
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

        except Exception as e:
            print(e)
            return dict(message=str(e)), 301

    results = db.session.execute(db.select(Job)).scalars()
    return [
        dict(title=result.title, description=result.description)
        for result in results
    ]
