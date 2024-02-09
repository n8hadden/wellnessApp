SELECT * FROM users

INSERT INTO users (username, email, password, tags) VALUES (
    'Jathan',
    'Jathan@Nathan',
    'Jassword',
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

CREATE TABLE IF NOT EXISTS chatgroups (
    chat_id INTEGER,
    user_id INTEGER
)

CREATE TABLE IF NOT EXISTS message (
    msg_id SERIAL PRIMARY KEY,
    sender_id INTEGER,
    chat_id INTEGER
)

SELECT * FROM message;
SELECT * FROM chatgroups

TRUNCATE TABLE message

INSERT INTO chatgroups (chat_id, user_id) VALUES 
(1, 1), (1, 4), (1, 2), (2, 3), (1, 2)

INSERT INTO message (sender_id, content, group_id) VALUES 
(1, 'Hello', 1), (1, 'Whats up?', 1), (2, 'Not much...', 2)

SELECT * FROM message WHERE group_id=1