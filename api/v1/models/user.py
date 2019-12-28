from .db import Db
from datetime import datetime
import hashlib, json, jwt, os, time


class User():
	def __init__(self):
		self.data = []

	def __repr__(self):
		if len(self) == 0:
			return "Empty User Instance"
		elif len(self) == 1:
			return str(self.data)
		else:
			return f"{len(self)} Users"

	def __len__(self):
		return len(self.data)

	def f_name(self):
		if len(self) == 0:
			raise Exception("Empty User Instance")
		elif len(self) == 1:
			return self.data[0]['user_f_name']
		else:
			raise Exception("Multiple users in object")

	def l_name(self):
		if len(self) == 0:
			raise Exception("Empty User Instance")
		elif len(self) == 1:
			return self.data[0]['user_l_name']
		else:
			raise Exception("Multiple users in object")

	def id(self):
		if len(self) == 0:
			raise Exception("Empty User Instance")
		elif len(self) == 1:
			return self.data[0]['user_id']
		else:
			raise Exception("Multiple users in object")

	def created_at(self):
		if len(self) == 0:
			raise Exception("Empty User Instance")
		elif len(self) == 1:
			return self.data[0]['user_created_at']
		else:
			raise Exception("Multiple users in object")

	def password(self):
		if len(self) == 0:
			raise Exception("Empty User Instance")
		elif len(self) == 1:
			return self.data[0]['user_password']
		else:
			print(self.data)
			raise Exception("Multiple users in object")

	def email(self):
		if len(self) == 0:
			raise Exception("Empty User Instance")
		elif len(self) == 1:
			return self.data[0]['user_email']
		else:
			raise Exception("Multiple users in object")

	def subscribed(self):
		if len(self) == 0:
			raise Exception("Empty User Instance")
		elif len(self) == 1:
			return self.data[0]['user_subscribed']
		else:
			raise Exception("Multiple users in object")

	def role(self):
		if len(self) == 0:
			raise Exception("Empty User Instance")
		elif len(self) == 1:
			return self.data[0]['user_role']
		else:
			raise Exception("Multiple users in object")


	def create(self, email, f_name=None, l_name=None, password=None, subscribed=None, role=None):
		db = Db()
		sql = '''INSERT INTO users (user_f_name, user_l_name, user_created_at, user_password, user_email, user_subscribed, user_role) VALUES (%s, %s, %s, %s, %s, %s, %s);'''
		created_at = datetime.now()
		data = [f_name, l_name, created_at, password, email, subscribed, role]
		db.query(sql, data, True)
		return True

	def get(self, _id):
		self.data = []
		db = Db()
		sql = '''SELECT * FROM users WHERE user_id = %s;'''
		data = [_id]
		result = db.query(sql, data)
		if result is not None:
			tmp_data = {}
			for k,v in result.items():
				tmp_data[k] = v
			self.data.insert(0, tmp_data)
			return self
		else:
			raise Exception("No user with that id")

	def get_by_email(self, email):
		self.data = []
		db = Db()
		sql = "SELECT * FROM users WHERE user_email=%s;"
		data = [email]
		result = db.query(sql, data)
		if result is not None:
			tmp_data = {}
			for k,v in result.items():
				tmp_data[k] = v
			self.data.insert(0, tmp_data)
			return self
		else:
			raise Exception("No user with that email")

	@staticmethod
	def _hash_password(pw):
		digest = hashlib.sha256(bytes(pw, 'utf-8')).hexdigest()
		return digest

	def generate_token(self):
		secret_key = os.environ.get("SECRET_KEY")
		payload = {"user_id": self.id(), "created_at": time.time(), "role": self.role()}
		encoded = jwt.encode(payload, secret_key, 'HS256')
		return encoded.decode("utf-8")

	def decode_token(self, token):
		secret_key = os.environ.get("SECRET_KEY")
		return jwt.decode(bytes(token, 'utf-8'), secret_key)

	def validate_token(self, token):
		decoded = self.decode_token(token)
		try:
			if decoded['created_at'] >= time.time() - 3600*24*30: # 3600 seconds * 24 hours * 30 days
				print(f"Validated token for user {decoded['user_id']}. Expires in {round(decoded['created_at'] + 3600*24*30 - time.time(), 0)} seconds.")
				return True
			else:
				print("test")
				return False
		except Exception as e:
			print(e)
			return False

	def validate_and_decode_token(self, token):
		decoded = self.decode_token(token)
		try:
			if decoded['created_at'] >= time.time() - 3600*24*30: # 3600 seconds * 24 hours * 30 days
				print(f"Validated token for user {decoded['user_id']}. Expires in {round(decoded['created_at'] + 3600*24*30 - time.time(), 0)} seconds.")
				return decoded
			else:
				return False
		except Exception as e:
			print(e)
			return False

	def validate_credentials(self, email, pw):
		self.get_by_email(email)
		_hash = self._hash_password(pw)
		return _hash == self.password()

	def json(self):
		if len(self) == 0:
			raise Exception("Empty User Instance")
		elif len(self) == 1:
			return json.dumps(self.data[0], default=str)
		else:
			raise Exception("Multiple users in object")


if __name__ == '__main__':
	pass
	u = User()
	#print(u._hash_password('test'))
	#u.create('graydenshand@gmail.com', 'Grayden', 'Shand', u._hash_password('L0ckP1ck'), True, 'Admin')
	#print(u.get(1))
	#print(u.f_name())
	#print(u.l_name())
	#print(u.created_at())
	#print(u.id())
	#print(u.password())
	#print(u.email())
	#print(u.role())
	#print(u.subscribed())
	#token = u.generate_token()
	#print(token)
	#print(u.decode_token(token))


