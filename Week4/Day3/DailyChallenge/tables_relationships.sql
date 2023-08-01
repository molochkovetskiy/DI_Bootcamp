-- PART 1

-- 1.
-- CREATE TABLE customer (
-- 	id serial PRIMARY KEY,
-- 	first_name varchar(50),
-- 	last_name varchar(50) NOT NULL
-- );

-- CREATE TABLE customer_profile (
-- 	id serial PRIMARY KEY,
-- 	is_logged_in boolean DEFAULT false,
-- 	customer_id integer UNIQUE REFERENCES customer(id)
-- );

-- 2.
-- INSERT INTO customer (first_name, last_name)
-- VALUES
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lalu'),
-- 	('Lea', 'Rive');

-- 3.
-- INSERT INTO customer_profile (is_logged_in, customer_id)
-- VALUES
-- 	(true, (SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')),
-- 	(false, (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

-- 4.
-- SELECT customer.first_name
-- FROM customer
-- INNER JOIN customer_profile ON customer.id = customer_profile.customer_id
-- WHERE customer_profile.is_logged_in = 'true';

-- SELECT customer.first_name, customer_profile.is_logged_in
-- FROM customer
-- LEFT JOIN customer_profile ON customer.id = customer_profile.customer_id;

-- SELECT COUNT(*)
-- FROM customer
-- LEFT JOIN customer_profile ON customer.id = customer_profile.customer_id
-- WHERE customer_profile.is_logged_in = 'false'
-- 	OR customer_profile.is_logged_in IS NULL;


-- 	PART 2

-- 1.
-- CREATE TABLE book (
-- 	book_id serial PRIMARY KEY,
-- 	title varchar(50) NOT NULL,
-- 	author varchar (50) NOT NULL
-- );

-- 2.
-- INSERT INTO book (title, author)
-- VALUES
-- 	('Alice In Wonderland', 'Lewis Carroll'),
-- 	('Harry Potter', 'J.K Rowling'),
-- 	('To kill a mockingbird', 'Harper Lee');

-- 3.
-- CREATE TABLE student (
-- 	student_id serial PRIMARY KEY,
-- 	name varchar(50) NOT NULL UNIQUE,
-- 	age smallint CHECK (age <= 15)
-- );

-- 4.
-- INSERT INTO student (name, age)
-- VALUES
-- 	('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14);

-- 5.
-- CREATE TABLE library (
-- 	book_fk_id integer,
-- 	student_fk_id integer,
-- 	borrowed_date date,
-- 	FOREIGN KEY (book_fk_id) REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     FOREIGN KEY (student_fk_id) REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	PRIMARY KEY (book_fk_id, student_fk_id)
-- );

-- 6.
-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES
-- 	((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM student WHERE name = 'John'), '2022-02-15'),
-- 	((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM student WHERE name = 'Bob'), '2021-03-03'),
-- 	((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM student WHERE name = 'Lera'), '2021-05-23'),
-- 	((SELECT book_id FROM book WHERE title = 'Harry Potter'), (SELECT student_id FROM student WHERE name = 'Bob'), '2021-08-12');
	
-- 7.
-- SELECT * FROM library;

-- SELECT student.name, book.title
-- FROM student
-- INNER JOIN library ON student.student_id = library.student_fk_id
-- INNER JOIN book ON library.book_fk_id = book.book_id;

-- SELECT ROUND(AVG(student.age), 1)
-- FROM library
-- INNER JOIN student ON library.student_fk_id = student.student_id 
-- INNER JOIN book ON library.book_fk_id = book.book_id
-- WHERE book.title = 'Alice In Wonderland';

-- DELETE FROM student
-- WHERE name = 'John';
-- The student record with the specified "student.name" is deleted from the "student" table.
-- All records in the "library" table that have a matching "student_fk_id" equal to the deleted "student_id" will be automatically deleted.