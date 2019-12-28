from flask import Blueprint, render_template, abort, request
import json
from .models.user import User
from .models.post import Post
from .models.db import Db
from datetime import datetime 
posts = Blueprint('p', __name__, url_prefix='/v1/p')

@posts.route('/', methods=['POST', 'GET'])
@posts.route('/<post>', methods=['GET', 'PUT', 'DELETE'])
def p(post=None):
	"""
	----
   |POST RESOURCE
	----
	GET /p/
		* return all posts (admin only)
		* ?publishedOnly=True filters out unpublished posts
	GET /p/<post_id>
		* return a post
	DELETE /p/<post_id>
		* delete a post (admin only)
	POST /p
		* create a post (admin only)
	PUT /p/<post_id>
		* update a post (admin only)
		
	"""
	p = Post() # instantiate an instance of the Post class
	# look for auth header
	try:
		token = request.headers['X-Auth-Token']
		user = User().validate_and_decode_token(token)
		print(user)
		if user == False:
			response = {"status": 401, "result": "No valid authentication token present"}
			return json.dumps(response)
	except:
		token = None
		user = None
	# route request based on method
	if request.method == 'GET':
		if post is None: # requesting many posts for feed
			publishedOnly = request.args.get('publishedOnly') # look for publishedOnly flag
			if publishedOnly and publishedOnly.lower() == 'true':
				p.get_published()
				response = {"status": 200, "result": p.data}
			elif token is not None and user['role'] == 'Admin':
					p.get_all()
					response = {"status": 200, "result": p.data}
			else:
				response = {"status": 403, "result": "Unauthorized operation on protected resource"}
		else: # requesting a single post
			p.get(post)
			if len(p.data) > 0 and (p.data['post_published'] == True or (token is not None and user['role'] == 'Admin')):
				response = {"status": 200, "result": p.data}
			elif len(p.data) == 0:
				response = {"status": 404, "result": "Resource not found"}
			elif token is None:
				response = {"status": 401, "result": "No valid authentication token"}
			elif user['role'] != 'Admin':
				response = {"status": 403, "result": "Unauthorized operation on protected resource"}
	elif request.method == 'DELETE':
		if post is not None and token is not None and user['role'] == 'Admin':
			p.delete(post)
			response = {"status": 200, "result": {"post_id":post}}
		elif post is None:
			response = {"status": 404, "result": "Resource not fsound"}
		elif token is not None:
			response = {"status": 401, "result": "No valid authentication token"}
		else:
			response = {"status": 403, "result": "Unauthorized operation on protected resource"}
	elif request.method == "POST":
		if token is not None:
			post_body = request.form.get('post_body')
			post_title = request.form.get('post_title')
			post_published = request.form.get('post_published')
			post_id = p.create(title=post_title, body=post_body, user_id=user['user_id'])
			post = p.get(post_id)
			response = {"status": 200, "result": post}
		else:
			response = {"status": 401, "result": "No valid authentication token present"}
	elif request.method == "PUT":
		if post is not None and token is not None and user['role'] == 'Admin':
			formdata = {}
			for k, v in request.form.items():
				formdata[k] = v
			if 'post_published' in formdata.keys():
				formdata['post_published_at'] = datetime.now()
			user_id = user['user_id']
			p.update(post_id=post, **formdata)
			post_obj = p.get(post)
			response = {"status": 200, "result": post_obj}
		elif post is None:
			response = {"status": 404, "result": "Resource not Found"}
		elif token is None:
			response = {"status": 401, "result": "No valid authentication token present"}
		elif user['role'] != 'Admin':
			response = {"status": 403, "result": "Unauthorized operation on protected resource"}
	
	# return response
	return json.dumps(response, default=str)
