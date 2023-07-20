from flask_sqlalchemy import SQLAlchemy
from flask import render_template
from flask import Flask

db = SQLAlchemy()


def create_app():
    app = Flask(__name__, template_folder="views")

    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite://store.db"
    db.init_app(app)

    @app.route('/')
    def index_route():
        return render_template('index.jinja')

    return app
