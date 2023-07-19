from flask import Flask
from flask import render_template


def create_app():
    app = Flask(__name__, template_folder="views")

    @app.route('/')
    def index_route():
        return render_template('index.jinja')

    return app
