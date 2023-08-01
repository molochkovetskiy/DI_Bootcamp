-- Exercise 1

-- 1.
-- SELECT name FROM language;

-- 2.1
-- SELECT f.title, f.description, l.name
-- FROM film AS f
-- LEFT JOIN language AS l ON f.language_id = l.language_id;

-- 2.2
-- SELECT f.title, f.description, l.name
-- FROM film AS f
-- RIGHT JOIN language AS l ON f.language_id = l.language_id;

-- 3.
-- CREATE TABLE new_film (
-- id serial PRIMARY KEY,
-- name varchar(60) NOT NULL
-- );

-- INSERT INTO new_film (name)
-- VALUES 
-- ('Charlie and the Chocolate Factory'),
-- ('Corpse Bride'),
-- ('The Nightmare Before Christmas');

-- 4.
-- CREATE TABLE customer_review (
-- 	review_id serial PRIMARY KEY NOT NULL,
-- 	film_id integer REFERENCES new_film(id) ON DELETE CASCADE,
-- 	language_id integer REFERENCES language(language_id),
-- 	title varchar(100),
-- 	score integer CHECK (score >= 1 AND score <= 10) NOT NULL,
-- 	review_text text,
-- 	last_update timestamp DEFAULT CURRENT_TIMESTAMP
-- 	);

-- 5.
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES
-- (
-- 	(SELECT id FROM new_film WHERE name = 'The Nightmare Before Christmas'),
-- 	(SELECT language_id FROM language WHERE name = 'French'),
-- 	'Great Film', 9, 'This film was amazing!'
-- ),
-- (
-- 	(SELECT id FROM new_film WHERE name = 'Corpse Bride'),
-- 	(SELECT language_id FROM language WHERE name = 'Italian'),
-- 	'Excellent Movie', 8, 'I enjoyed the plot and visuals.'
-- );
	
-- 6.
-- SELECT * FROM customer_review;
-- DELETE FROM new_film WHERE id = 1;
-- SELECT * FROM customer_review;


-- Exercise 2

-- 1.
-- UPDATE film
-- SET language_id = (
--     SELECT language_id FROM language WHERE name = 'French'
-- )
-- WHERE film_id IN (1, 2, 5, 6);

-- 3.
-- DROP TABLE customer_review;

-- 4.
-- SELECT COUNT(*)
-- FROM rental
-- WHERE return_date IS NULL;

-- 5.
-- SELECT rental_rate
-- FROM rental
-- INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN film ON inventory.film_id = film.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY rental_rate DESC
-- LIMIT 30;

-- 6.1
-- SELECT film.title
-- FROM film
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id
-- INNER JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE film.description ILIKE '%sumo wrestler%' AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';

-- 6.2
-- SELECT film.title
-- FROM film
-- INNER JOIN film_category ON film.film_id = film_category.film_id
-- INNER JOIN category ON film_category.category_id = category.category_id
-- WHERE film.length < 60 AND film.rating = 'R' AND category.name = 'Documentary';

-- 6.3
-- SELECT film.title
-- FROM film
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN payment ON rental.rental_id = payment.rental_id
-- INNER JOIN customer ON payment.customer_id = customer.customer_id
-- WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
-- AND payment.amount > 4 AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- 6.4
-- SELECT film.title
-- FROM film
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN payment ON rental.rental_id = payment.rental_id
-- INNER JOIN customer ON payment.customer_id = customer.customer_id
-- WHERE film.title ILIKE '%boat%' OR film.description ILIKE '%boat%' 
-- AND customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
-- ORDER BY film.replacement_cost DESC
-- LIMIT 1;
