from menu_item import MenuItem
import psycopg2

class MenuManager:
    @classmethod
    def _get_connection(cls):
        return psycopg2.connect(
            database="restaurant_menu",
            user="postgres",
            password='dilearn',
            host="localhost",
            port="5432"
        )
    
    @classmethod
    def get_by_name(cls, item_name):
        try:
            with cls._get_connection() as connection:
                cursor = connection.cursor()

                select_query = """
                SELECT item_name, item_price
                FROM menu_items
                WHERE item_name = %s;
                """
                cursor.execute(select_query, (item_name,))
                result = cursor.fetchone()

            if result:
                item_name, item_price = result
                return MenuItem(item_name, item_price)

            return None

        except Exception as err:
            print("Error while getting item by name:", err)
            return None

    @classmethod
    def all_items(cls):
        try:
            with cls._get_connection() as connection:
                cursor = connection.cursor()

                select_query = "SELECT * FROM menu_items;"
                cursor.execute(select_query)
                results = cursor.fetchall()

                items_list = []
                for result in results:
                    item_id, item_name, item_price = result
                    items_list.append(MenuItem(item_name, item_price))

            return items_list

        except Exception as e:
            print("Error while getting all items:", e)
            return []
