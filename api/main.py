from flask import Flask, request, url_for, render_template, redirect
import json
from v1.posts import posts
from v1.auth import auth
from v1.images import images
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(posts)
app.register_blueprint(auth)
app.register_blueprint(images)

cors = CORS(app)


if __name__ == '__main__':
	app.run(host='0.0.0.0')