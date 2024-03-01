SELECT * FROM users
SELECT * FROM affirmations

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

SELECT * FROM message

SELECT 1 FROM chatgroups WHERE chat_id = 10 AND user_id = 2 LIMIT 1

CREATE TABLE IF NOT EXISTS daily_affirmations (
    user_id INTEGER UNIQUE,
    aff_id INTEGER
)


INSERT INTO daily_affirmations (user_id, aff_id, tmr_timestamp) 
VALUES (2, 1, 1000000000)
ON CONFLICT(user_id)
DO
UPDATE SET aff_id = 1, tmr_timestamp = 1000000000;

ALTER TABLE daily_affirmations ADD tmr_timestamp BIGINT
ALTER  TABLE daily_affirmations DROP COLUMN tmr_timestamp

SELECT * from daily_affirmations

SELECT * from affirmations
INSERT INTO affirmations (tag_id, affirmation) VALUES 
(1, 'Your art is really cool!')

/*gets all possable afformations for a user */

SELECT b.* FROM users
a JOIN affirmations b ON 
b.tag_id = ANY(a.tags) OR b.tag_id = 0
WHERE user_id = 1 
ORDER BY RANDOM() 
LIMIT 1;

CREATE TABLE IF NOT EXISTS calendar_days (
    day INTEGER,
    user_id INTEGER,
    mood_id INTEGER,
    Note VARCHAR(255)
)

DROP TABLE calender_days

CREATE TABLE IF NOT EXISTS moods (
    mood_id SERIAL PRIMARY KEY,
    mood_name VARCHAR(31),
    mood_color CHAR(7)
)



ALTER TABLE moods ADD mood_type VARCHAR(32)

INSERT INTO moods  (mood_name, mood_color, mood_score, mood_type) 
VALUES ('Happy', '#FFD700', 1, 'Happy'), ('Sad', '#5555FF', 1, 'Sad'), ('Mad', '#FF9900', 1, 'Mad'), ('Scared', '#555500', 1, 'Scared'), ('Enjoyed', '#5555FF', 1, 'Enjoyed'), ('Awkward', '#5555FF', 1, 'Awkward');

SELECT *
FROM moods
SELECT * FROM calendar_days

SELECT * FROM moods WHERE mood_type like 'Sad' AND mood_score <= 2 LIMIT 1

INSERT INTO moods  (mood_name, mood_color, mood_score, mood_type) 
VALUES ('Gloomy', '#FFD700', 3, 'Sad'), ('Depressed', '#5555FF', 5, 'Sad');
ALTER TABLE calendar_days DROP note
ALTER TABLE calendar_days ADD note VARCHAR(255)

UPDATE moods
SET mood_name = 'joyful'
WHERE mood_id = 5

UPDATE affirmations
SET affirmation = 'Art is the way to happiness!'
WHERE aff_id = 2

SELECT * from affirmations

INSERT INTO moods (mood_name, mood_color, mood_score, mood_type)
VALUES ()

SELECT * FROM tags where tag_name like 'Artist'

SELECT * FRoM tags

SELECT * FROM calendar_days
SELECT * FROM tags

INSERT INTO tags(tag_name)
VALUES ("Crocheting", "Bird Watching", "Gardening", "Hiking", "Cooking", "Yoga", "Photography", "Traveling", "Knitting", "Musician", "Video Games", "Cycling", "Running", "Podcasts", "Communal Activism", "Fitness Training")

SELECT * from tags

SELECT * FROM tags WHERE tag_name LIKE 'Artist'