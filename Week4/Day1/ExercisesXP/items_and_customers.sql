-- Part 1

-- CREATE TABLE items (
-- ID SERIAL PRIMARY KEY,
-- item_name VARCHAR(50),
-- price INTEGER
-- );

-- CREATE TABLE customers (
-- ID SERIAL PRIMARY KEY,
-- first_name VARCHAR(50),
-- last_name VARCHAR(50)
-- );

-- Part 2

-- INSERT INTO items (item_name, price)
-- VALUES ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);

-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- Part 3

-- SELECT * FROM items;

-- SELECT * FROM items
-- WHERE price > 80;

-- SELECT * FROM items
-- WHERE price <= 300;

-- SELECT * FROM customers
-- WHERE last_name = 'Smith';

-- SELECT * FROM customers
-- WHERE last_name = 'Jones';

SELECT * FROM customers
WHERE first_name != 'Scott';

