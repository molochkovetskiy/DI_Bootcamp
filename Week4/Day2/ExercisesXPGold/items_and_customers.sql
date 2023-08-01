-- Part 1:

-- CREATE TABLE purchases (
-- id serial PRIMARY KEY,
-- customer_id integer REFERENCES customers(id),
-- item_id integer REFERENCES items(id),
-- quantity_purchased integer
-- );

-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (
-- 	(SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
-- 	(SELECT id FROM items WHERE item_name = 'Fan'),
-- 	1
-- ),
-- (
-- 	(SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
-- 	(SELECT id FROM items WHERE item_name = 'Large Desk'),
-- 	10
-- ),
-- (
-- 	(SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
-- 	(SELECT id FROM items WHERE item_name = 'Small Desk'), 
-- 	2
-- );

-- Part 2:

-- SELECT * FROM purchases;

-- SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
-- FROM purchases AS p
-- INNER JOIN customers AS c ON p.customer_id = c.id;

-- SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
-- FROM purchases AS p
-- INNER JOIN customers AS c ON p.customer_id = c.id
-- WHERE c.id = 5;

-- SELECT p.id, c.first_name, c.last_name, i.item_name, p.quantity_purchased
-- FROM purchases AS p
-- INNER JOIN customers AS c ON p.customer_id = c.id
-- INNER JOIN items AS i ON p.item_id = i.id
-- WHERE i.item_name IN ('Large Desk', 'Small Desk');

-- SELECT c.first_name, c.last_name, i.item_name
-- FROM purchases AS p
-- INNER JOIN customers AS c ON p.customer_id = c.id
-- INNER JOIN items AS i ON p.item_id = i.id;

-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank).
-- Does this work? Why/why not?

-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (
--     (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
--     NULL,
--     11
-- );

-- Answer:

-- This will work if the "customer_id" obtained from the subquery is valid and there is no foreign key constraint
-- that enforces a valid reference for the "item_id" column.
-- If the "item_id" column has a foreign key constraint that does not allow NULL values or requires a valid reference,
-- the INSERT statement will fail.