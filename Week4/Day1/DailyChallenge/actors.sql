-- CREATE TABLE actors(
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (50) NOT NULL,
-- last_name VARCHAR (100) NOT NULL,
-- age DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL
-- );

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5),
-- ('George','Clooney','06/05/1961', 2),
-- ('Angelina','Jolie','06/04/1975', 1),
-- ('Jennifer','Aniston','02/11/1969', 0);

-- SELECT COUNT(first_name)
-- FROM actors;

-- Doesn't work because there is NOT NULL condition
-- INSERT INTO actors (first_name, last_name)
-- VALUES('Matt','Damon');