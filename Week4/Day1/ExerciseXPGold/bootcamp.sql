-- SELECT first_name, last_name, birth_date
-- FROM students
-- ORDER BY last_name, first_name
-- LIMIT 4;

-- SELECT first_name, last_name, birth_date
-- FROM students
-- WHERE birth_date = (SELECT MAX(birth_date) FROM students)

SELECT first_name, last_name, birth_date
FROM students
OFFSET 2
LIMIT 3;