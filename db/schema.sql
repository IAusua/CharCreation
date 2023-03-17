DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

DROP DATABASE IF EXISTS character_db;
CREATE DATABASE character_db;

DROP DATABASE IF EXISTS dnd_characters;
CREATE DATABASE dnd_characters;

USE dnd_characters;
-- mysequal commands in seeds 
CREATE TABLE characters (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    race VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    level INT NOT NULL,
    strength INT NOT NULL,
    dexterity INT NOT NULL,
    constitution INT NOT NULL,
    intelligence INT NOT NULL,
    wisdom INT NOT NULL,
    charisma INT NOT NULL,
    skills VARCHAR(255) NOT NULL,
    inventory TEXT,
    PRIMARY KEY (id)
);

DROP DATABASE IF EXISTS images_db;
create DATABASE images_db;

-- sequelize operation to pull images form the database 
CREATE TABLE images (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image BLOB NOT NULL,
    PRIMARY KEY (id)
);

SET GLOBAL local_infile = 1;

INSERT INTO images (name, image) VALUES ('image__Nunz2Ig_1678412098484_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image__Nunz2Ig_1678412098484_raw.jpg"'));
INSERT INTO images (name, image) VALUES ('image_BNPOR-0U_1678413510127_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_BNPOR-0U_1678413510127_raw.jpg".jpg'));
INSERT INTO images (name, image) VALUES ('image_cRJXmYft_1678412444423_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_cRJXmYft_1678412444423_raw.jpg".jpg'));
INSERT INTO images (name, image) VALUES ('image_EafzlFNT_1678412537302_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_EafzlFNT_1678412537302_raw.jpg".jpg'));
INSERT INTO images (name, image) VALUES ('image_EafzlFNT_1678412537302_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_EafzlFNT_1678412537302_raw.jpg".jpg'));
INSERT INTO images (name, image) VALUES ('image_eJ7MvlW6_1678413508587_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_eJ7MvlW6_1678413508587_raw.jpg".jpg'));
INSERT INTO images (name, image) VALUES ('image_fi0-01Jd_1678412504931_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_fi0-01Jd_1678412504931_raw.jpg".jpg'));
INSERT INTO images (name, image) VALUES ('image_gecvbWKP_1678412899254_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_gecvbWKP_1678412899254_raw.jpg".jpg'));
INSERT INTO images (name, image) VALUES ('image_goDqU5Db_1678412624979_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_goDqU5Db_1678412624979_raw.jpg".jpg'));
INSERT INTO images (name, image) VALUES ('image_HI9kNQxX_1678413561431_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_HI9kNQxX_1678413561431_raw.jpg".jpg'));
INSERT INTO images (name, image) VALUES ('image_iGvBRLrh_1678412943223_raw.jpg', LOAD_FILE('"C:\Users\12488\OneDrive\Desktop\d and d images\image_iGvBRLrh_1678412943223_raw.jpg".jpg'));