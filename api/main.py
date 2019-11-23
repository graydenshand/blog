from flask import Flask, request, url_for, render_template, redirect
import json
from v1.posts import posts
from v1.auth import auth
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(posts)
app.register_blueprint(auth)

cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


if __name__ == '__main__':
	app.run()