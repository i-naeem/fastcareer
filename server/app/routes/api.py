from flask import Blueprint

api = Blueprint('api', __name__)


@api.get('/')
def index():
    return dict(title="Hello World")