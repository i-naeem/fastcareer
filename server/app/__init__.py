from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()


def create_app():
    from .routes.api import api

    app = Flask(__name__, template_folder="views")

    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///store.db"
    db.init_app(app)

    app.register_blueprint(blueprint=api, url_prefix="/api")

    return app
