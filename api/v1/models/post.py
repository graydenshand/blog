from .db import Db
from datetime import datetime
import json

class Post():
	def __init__(self, data=None):
		if data == None:
			self.data = []
		else:
			data = json.loads(data)

	def create(self, title, body, user_id, published=False, published_at=None):
		db = Db()
		created_at = datetime.now()
		sql = "INSERT INTO posts (post_title, post_body, post_created_at, post_published, post_published_at, post_user_id) VALUES (%s, %s, %s, %s, %s, %s);"
		data = [title, body, created_at, published, published_at, user_id]
		db.query(sql, data)
		return True

	def json(self):
		return json.dumps(self.data, default=str)


	def get_all(self, limit=10):
		self.data = []
		db = Db()
		sql = "SELECT * FROM posts ORDER BY post_created_at LIMIT %s;"
		data = [limit]
		posts = db.query(sql, data)
		for row in posts:
			tmp_row = {'post_id':row['post_id'], 'post_title': row['post_title'], 'post_body':row['post_body'], 'post_created_at': row['post_created_at'], 'post_published': row['post_published'], 'post_published_at': row['post_published_at']}
			self.data.append(tmp_row)
		return self.data

	def get(self, post):
		self.data = {}
		db = Db()
		sql = "SELECT * FROM posts WHERE post_id = %s;"
		data = [post]
		post = db.query(sql,data)
		for k, v in post.items():
			self.data[k] = v
		return self.data

	def delete(self, post):
		db = Db()
		sql = "DELETE FROM posts WHERE post_id = %s;"
		data = [post]
		db.query(sql, data)
		return True

if __name__ == '__main__':
	p = Post()
	title = "Test Post 2"
	body = "Test post 2!"
	print(p.create(title, body, 1))