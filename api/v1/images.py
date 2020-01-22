from flask import Blueprint, render_template, abort, request
from .models.image import Image 
import json, time
from urllib.parse import unquote
images = Blueprint('i', __name__, url_prefix='/v1/i')

@images.route("/", methods=["POST"])
def i():
	i = Image()
	payload = request.form.get('payload').replace(' ', '+')
	post_id = request.form.get('post_id')
	key = f"post-images/{post_id}/{time.time()}.png"
	i.load_base64(payload)
	link = i.upload_image(key)
	response = {"status": 200, "result": link}
	print(json.dumps(response))
	return json.dumps(response, default=str)