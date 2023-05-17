USE BLOG; 

CREATE TABLE posts ( 
	id INT AUTO_INCREMENT PRIMARY KEY,
	image BLOB,
	category VARCHAR(255),
	title VARCHAR(255),
	author VARCHAR(255),
	createdAt DATETIME,
	readTime int,
	text TEXT
);