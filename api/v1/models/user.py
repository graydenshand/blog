from .db import Db
from datetime import datetime
import hashlib


class User():
	def __init__(self):
		self.data = []

	def create(self, email, f_name=None, l_name=None, password=None, subscribed=None, role=None):
		db = Db()
		sql = '''INSERT INTO users (user_f_name, user_l_name, user_created_at, user_password, user_email, user_subscribed, user_role) VALUES (%s, %s, %s, %s, %s, %s, %s);'''
		created_at = datetime.now()
		data = [f_name, l_name, created_at, password, email, subscribed, role]
		db.query(sql, data, True)
		return True


	@staticmethod
	def _hash_password(pw):
		digest = hashlib.sha256(pw).hexdigest()
		return digest

if __name__ == '__main__':
	pass
	u = User()
	#print(u._hash_password('test'))
	#u.create('graydenshand@gmail.com', 'Grayden', 'Shand', u._hash_password('L0ckP1ck'), True, 'Admin')

