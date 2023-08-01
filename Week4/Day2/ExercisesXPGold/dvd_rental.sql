-- SELECT rating, COUNT(rating)
-- FROM film
-- GROUP BY rating;

-- SELECT title, rating, length
-- FROM film
-- WHERE rating IN ('G', 'PG-13') AND length <= 120 AND rental_rate < 3.00
-- ORDER BY title;

-- UPDATE customer
-- SET first_name = 'Vitaly',
-- last_name = 'Molochkovetskiy',
-- email = 'vitaly.molochkovetskiy@sakilacustomer.org'
-- WHERE customer_id = 14;

-- UPDATE address
-- SET address = '5 DiSQL Road',
-- district = 'Israel',
-- postal_code = 3473404
-- WHERE address_id = (SELECT address_id
-- 					FROM customer
-- 					WHERE first_name = 'Vitaly' AND last_name = 'Molochkovetskiy'
-- 				   );

