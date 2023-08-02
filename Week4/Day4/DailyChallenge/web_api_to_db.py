import requests
import random
import psycopg2

def get_random_countries():
    try:
        response = requests.get("https://restcountries.com/v2/all")
        if response.status_code == 200:
            countries_data = response.json()
            random_countries = random.sample(countries_data, 10)
            return random_countries
        else:
            print("Failed to fetch countries data from API.")
            return []

    except requests.exceptions.RequestException as e:
        print("Error while fetching countries data:", e)
        return []

def insert_countries_to_database(countries):
    try:
        connection = psycopg2.connect(
            database="w4d4_dc",
            user="postgres",
            password="dilearn",
            host="localhost",
            port="5432"
        )

        cursor = connection.cursor()

        for country in countries:
            name = country.get("name", "")
            capital = country.get("capital", "")
            flag = country.get("flags", {}).get("png", "")
            subregion = country.get("subregion", "")
            population = country.get("population", 0)

            insert_query = """
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s);
            """
            cursor.execute(insert_query, (name, capital, flag, subregion, population))

        connection.commit()
        cursor.close()
        connection.close()

        print("Successfully inserted countries into the database.")

    except Exception as e:
        print("Error while inserting countries to the database:", e)


if __name__ == "__main__":
    random_countries = get_random_countries()
    if random_countries:
        insert_countries_to_database(random_countries)
