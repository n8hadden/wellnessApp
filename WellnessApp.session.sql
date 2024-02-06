SELECT * FROM users

INSERT INTO users (username, email, password, tags) VALUES (
    'Bathan',
    'Bathan@Nathan',
    'Bassword',
    ARRAY [
        1,3
    ]
)

CREATE Table  IF NOT EXISTS sessions (
    user_id INTEGER PRIMARY KEY,
    session_key VARCHAR(256) UNIQUE
)
SELECT * FROM sessions

INSERT INTO sessions  (user_id, session_key) 
VALUES (2, 'testkey 2')
ON CONFLICT(user_id)
DO
UPDATE SET session_key = 'testkey 3'

SELECT username, email, password 
FROM users INNER JOIN sessions 
ON users.id = sessions.user_id
WHERE session_key='testkey';

ALTER TABLE users DROP COLUMN tags

CREATE TABLE  IF NOT EXISTS tags (
    tag_id SERIAL PRIMARY KEY,
    tag_name VARCHAR(30)
)

CREATE TABLE If NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(255),
    tags INTEGER[]
);

DROP TABLE tags

INSERT INTO tags (tag_name) VALUES
('Singer'), ('Christian')

SELECT * FROM tags

SELECT b.* FROM users
a JOIN tags b ON 
b.tag_id = ANY(a.tags) 
WHERE user_id = 1

UPDATE users SET tags = ARRAY_APPEND(tags, 1) WHERE user_id = 1;