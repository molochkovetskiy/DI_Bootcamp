import psycopg2

class MenuItem:
    def __init__(self, item_name, item_price) -> None:
        self.item_name = item_name
        self.item_price = item_price
    
    def _get_connection(self):
        return psycopg2.connect(
            database="restaurant_menu",
            host="localhost",
            port="5432"
        )
    
    def save(self):
        try:
            with self._get_connection() as connection:
                cursor = connection.cursor()

                insert_query = """
                INSERT INTO menu_items (item_name, item_price)
                VALUES (%s, %s);
                """
                cursor.execute(insert_query, (self.item_name, self.item_price))

        except Exception as err:
            print("Error while saving item:", err)
    
    def delete(self):
        try:
            with self._get_connection() as connection:
                cursor = connection.cursor()

                delete_query = """
                DELETE FROM menu_items
                WHERE item_name = %s;
                """
                cursor.execute(delete_query, (self.item_name,))

        except Exception as e:
            print("Error while deleting item:", e)

    def update(self, new_item_name, new_item_price):
        try:
            with self._get_connection() as connection:
                cursor = connection.cursor()

                update_query = """
                UPDATE menu_items
                SET item_name = %s, item_price = %s
                WHERE item_name = %s;
                """
                cursor.execute(update_query, (new_item_name, new_item_price, self.item_name))

        except Exception as e:
            print("Error while updating item:", e)
