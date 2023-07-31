-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar');

-- SELECT * FROM FirstTab;

-- CREATE TABLE SecondTab (
--     id integer 
-- );

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL);

-- SELECT * FROM SecondTab;

-- Questions:

-- Q1
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );

-- Answer: 0

-- Q2
-- SELECT COUNT(*)
-- FROM FirstTab AS ft
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

-- Answer: 2 

-- Q3
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab );

-- Answer: 0

-- Q4
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );

-- Answer: 2