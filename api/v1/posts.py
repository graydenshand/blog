from flask import Blueprint, render_template, abort, request
import json
from .models.user import User
from .models.post import Post
from .models.db import Db

posts = Blueprint('p', __name__, url_prefix='/v1/p')

@posts.route('/', methods=['POST', 'GET'])
@posts.route('/<post>', methods=['GET', 'PUT', 'DELETE'])
def p(post=None):
	if request.method == 'GET':
		if post is None:
			p = Post()
			p.get_all()
			response = {"status": 200, "result": p.data}
		else:
			p = Post()
			p.get(post)
			response = {"status": 200, "result": p.data}
	elif request.method == 'DELETE':
		if post is not None:
			p = Post()
			p.delete(post)
			response = {"status": 200, "result": f"Post {post} deleted"}
		else:
			response = {"status": 404, "result": "Resource not Found"}
			return response
	else:
		response = {"status": 200, "result": 'test'}
	
	return json.dumps(response, default=str)