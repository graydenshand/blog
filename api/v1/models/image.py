import base64, boto3, time

class Image():
	"""	
	Utility class for image processing
		* Connects to AWS s3 to upload file
		* Reads base64 encoded images or local files
	
	"""
	def __init__(self):
		self.data = b''
		self.s3 = boto3.resource('s3')
		self.bucket = 'graydens-blog'

	def upload_image(self, key):
		self.s3.Bucket(self.bucket).put_object(
			Key=key,
			Body=self.data, 
			ContentType='image/png', 
			ACL='public-read'
		)
		return self.link(key)

	def load_base64(self, str):
		self.data = base64.b64decode(str)

	def load_file(self, fn):
		with open(fn, 'rb') as f:
			self.data = f.read()

	def get_all_image_keys(self):
		return [o.key for o in self.s3.Bucket(self.bucket).objects.filter(Prefix='post-images/')]

	def get_image_keys_for_post(self, post_id):
		# Return keys for all images of a post
		return [o.key for o in self.s3.Bucket(self.bucket).objects.filter(Prefix=f'post-images/{post_id}/') if o.key != f'post-images/{post_id}/']


	def link(self, key):
		# return public link to image
		return f"https://graydens-blog.s3.us-east-2.amazonaws.com/{key}"

if __name__=='__main__':
	img = Image()
	fn = '/Users/grayden/Downloads/IMG_1616 copy.JPG'
	with open(fn, 'rb') as f:
		img.load_base64(base64.b64encode(f.read()))
	img.upload_image("post-images/58/test.png")
	for key in img.get_image_keys_for_post(58):
		print(img.link(key))





