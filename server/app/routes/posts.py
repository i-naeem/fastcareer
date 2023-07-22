from flask import render_template
from app.models.Job import Job
from flask import Blueprint
from app import db

posts_bp = Blueprint('posts', __name__)


@posts_bp.get('/posts')
def posts():
    results = db.session.execute(db.select(Job)).scalars()
    return render_template('posts.jinja', posts=results)
