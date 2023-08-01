-- UPDATE:

-- UPDATE students
-- SET birth_date = '1998-02-11'
-- WHERE first_name IN ('Leah', 'Marc') AND last_name = 'Benichou';

-- UPDATE students
-- SET last_name = 'Guez'
-- WHERE first_name = 'David' AND last_name = 'Grez';

-- DELETE:

-- DELETE FROM students
-- WHERE first_name = 'Leah' AND last_name = 'Benichou';

-- COUNT:

-- SELECT COUNT(*) FROM students;

-- SELECT COUNT(*) FROM students
-- WHERE birth_date > '2000-01-01';

-- INSERT/ALTER:

-- ALTER TABLE students
-- ADD COLUMN math_grade smallint;

-- UPDATE students
-- SET math_grade = 80
-- WHERE id = 1;

-- UPDATE students
-- SET math_grade = 90
-- WHERE id = 2 OR id = 4;

-- UPDATE students
-- SET math_grade = 40
-- WHERE id = 6;

-- SELECT COUNT(*)
-- FROM students
-- WHERE math_grade > 83;

-- INSERT INTO students (first_name, last_name, birth_date, math_grade)
-- VALUES ('Omer',
-- 		'Simpson',
-- 		(SELECT birth_date FROM students
-- 		 WHERE first_name = 'Omer' AND last_name = 'Simpson'),
-- 		70);

-- SELECT first_name, last_name, COUNT(math_grade) AS total_grade
-- FROM students
-- GROUP BY first_name, last_name;

-- SUM:

SELECT SUM(math_grade)
FROM students;