from flask import render_template
from app.models.Job import Job
from flask import Blueprint
from flask import request
from app import db

search = Blueprint('/search', __name__)


@search.get('/')
def get_search_results():
    q = request.args.get('q')
    statement = db.select(Job)

    if (q):
        statement = statement.where(Job.title.like(f"%{q}%"))

    results = db.session.execute(statement).scalars()

    return render_template('posts.jinja', posts=results)
