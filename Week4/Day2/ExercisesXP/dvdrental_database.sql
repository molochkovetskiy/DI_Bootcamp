-- 1
-- SELECT * FROM customer;

-- #2
-- SELECT first_name || ' ' || last_name AS full_name
-- FROM customer;

-- #3
-- SELECT DISTINCT create_date FROM customer;

-- #4
-- SELECT * FROM customer
-- ORDER BY first_name DESC;

-- #5
-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate;

-- #6
-- SELECT address, phone FROM address
-- WHERE district = 'Texas';

-- #7
-- SELECT * FROM film
-- WHERE film_id IN (15, 150);

-- #8
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'Charlie and the Chocolate Factory';

-- #9
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title LIKE 'Ch%';

-- #10
-- SELECT * FROM film
-- ORDER BY rental_rate
-- LIMIT 10;

-- #11
-- SELECT * FROM film
-- ORDER BY rental_rate
-- OFFSET 10
-- LIMIT 10;

-- #12
-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment ON customer.customer_id = payment.customer_id
-- ORDER BY customer.customer_id;

-- #13
-- SELECT film.film_id, film.title, film.description, film.length, film.rental_rate
-- FROM film
-- LEFT JOIN inventory ON film.film_id = inventory.film_id
-- WHERE inventory.inventory_id IS NULL;

-- #14
-- SELECT city.city, country.country
-- FROM city
-- INNER JOIN country ON city.country_id = country.country_id;

-- #15
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id;