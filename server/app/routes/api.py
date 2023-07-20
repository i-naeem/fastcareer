from flask import Blueprint
from flask import request

api = Blueprint('api', __name__)


@api.route('/posts', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
        return [1]

    return []
