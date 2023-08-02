from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n===== Program Menu =====")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("Q - Quit")

        choice = input("Enter your choice: ").strip().lower()

        if choice == 'v':
            view_item()
        elif choice == 'a':
            add_item()
        elif choice == 'd':
            delete_item()
        elif choice == 'u':
            update_item()
        elif choice == 's':
            show_menu()
        elif choice == 'q':
            print("\nGoodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

def view_item():
    item_name = input("Enter the name of the item you want to view: ").strip()
    item = MenuManager.get_by_name(item_name)

    if item:
        print(f"Item: {item.item_name}, Price: {item.item_price}")
    else:
        print("Item not found.")

def add_item():
    item_name = input("Enter the name of the new item: ").strip()
    item_price = float(input("Enter the price of the new item: "))

    new_item = MenuItem(item_name, item_price)
    new_item.save()
    print("Item added successfully!")

def delete_item():
    try:
        item_name = input("Enter the name of the item you want to delete: ").strip()
        MenuManager.get_by_name(item_name).delete()
        print("Item deleted successfully!")
    except:
        print(f"'{item_name}' not on the menu")

def update_item():
    try:
        item_name = input("Enter the name of the item you want to update: ").strip()
        new_item_name = input("Enter the new name for the item: ").strip()
        new_item_price = float(input("Enter the new price for the item: "))

        MenuManager.get_by_name(item_name).update(new_item_name, new_item_price)
        print("Item updated successfully!")
    except:
        print(f"'{item_name}' not on the menu")

def show_menu():
    all_items = MenuManager.all_items()

    if all_items:
        print("\n===== Menu Items =====")
        for item in all_items:
            print(f"Item: {item.item_name}, Price: {item.item_price}")
    else:
        print("No items in the menu.")

if __name__ == "__main__":
    show_user_menu()
