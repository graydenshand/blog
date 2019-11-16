from flask import Flask, request, url_for, render_template, redirect
import json
from v1.posts import posts
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(posts)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


if __name__ == '__main__':
	app.run()