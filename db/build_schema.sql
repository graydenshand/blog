CREATE DATABASE blog;

\c blog

CREATE TABLE IF NOT EXISTS Users  (
	user_id SERIAL PRIMARY KEY,
	user_f_name TEXT,
	user_l_name TEXT,
	user_created_at TIMESTAMP,
	user_password TEXT,
	user_email TEXT UNIQUE NOT NULL,
	user_subscribed BOOLEAN DEFAULT FALSE,
	user_role TEXT
);

CREATE TABLE IF NOT EXISTS Posts  (
	post_id SERIAL PRIMARY KEY,
	post_title TEXT,
	post_body TEXT,
	post_created_at TIMESTAMP,
	post_published BOOLEAN DEFAULT FALSE,
	post_published_at TIMESTAMP,
	post_user_id INTEGER REFERENCES users (user_id)
);
