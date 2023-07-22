from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()


def create_app():
    from .routes.posts import posts

    app = Flask(__name__, template_folder="views")

    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///store.db"
    db.init_app(app)

    app.register_blueprint(blueprint=posts, url_prefix="/posts")

    with app.app_context():
        db.create_all()

    return app
