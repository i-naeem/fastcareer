from app import db
from app.models.Job import Job
from flask import Blueprint
from flask import request

api = Blueprint('api', __name__)


@api.route('/posts', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
        try:
            d = request.get_json()
            j = Job(
                description=d['description'],
                deadline=d['deadline'],
                company=d['company'],
                source=d['source'],
                title=d['title'],
            )

            db.session.add(j)
            db.session.commit()

            return dict(message="Job Added Successfully")

        except Exception as e:
            print(e)
            return dict(message=str(e)), 301

    return []
