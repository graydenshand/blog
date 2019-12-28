from flask import Blueprint, render_template, abort, request
import json, jwt, os
from .models.user import User
from .models.db import Db

auth = Blueprint('auth', __name__, url_prefix='/v1/')
secret_key = os.environ.get('SECRET_KEY')

@auth.route("/login", methods=['GET','POST'])
def login():
	if request.method == 'GET':
		u = User().get(1)
		return u.generate_token()
	elif request.method == 'POST':
		email = request.form.get("email")
		pw = request.form.get("pw")
		u = User()
		if u.validate_credentials(email, pw) == True:
			token = u.generate_token()
			user = {"f_name": u.f_name(), "l_name": u.l_name(), "email": u.email()}
			return json.dumps({"result": {"token":token, "user": user}}, default=str)
		else:
			return json.dumps({"result": {"error":"Email or password not recognized"}})


@auth.route("/validate_token", methods=["POST"])
def validate_token():
	token = request.form.get("token")
	u = User()
	try:
		response = {"result": u.validate_token(token)}
	except:
		response = {"result": False}
	return json.dumps(response)
