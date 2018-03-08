CREATE DATABASE login_db;
USE login_db;

CREATE table account
(
	id int NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL
	PRIMARY KEY(id)
);

CREATE table history
(  
	id_number int NOT NULL AUTO_INCREMENT,
	city_name VARCHAR(255) NOT NULL,
	country_name VARCHAR(255) NOT NULL,
	FOREIGN KEY(id) REFERENCES account(id)
);
