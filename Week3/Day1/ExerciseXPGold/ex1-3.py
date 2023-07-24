# Exercise 1

# class Circle:

#     def __init__(self, radius: float = 1.0) -> None:
#         self.radius = radius

#     def get_perimeter(self):
#         return round(2 * 3.14 * self.radius, 2)
    
#     def get_area(self):
#         return 3.14 * pow(self.radius, 2)
    
#     def print_definition(self):
#         print(f"A circle is a round-shaped figure that has no corners or edges. The radius of this circle is {self.radius}.")

# circle1 = Circle(5)
# print(circle1.get_perimeter())
# print(circle1.get_area())
# circle1.print_definition()

# circle2 = Circle(10)
# print(circle2.get_perimeter())
# print(circle2.get_area())


# Exercise 2

# import random

# class MyList:

#     def __init__(self, user_list) -> None:
#         self.user_list = user_list

#     def reversed_list(self):
#         return list(reversed(self.user_list))
    
#     def sorted_list(self):
#         return sorted(self.user_list) 
       
#     def generate_random_list(self):
#         random_list = [random.randint(1, 100) for _ in range(len(self.user_list))]
        
#         return random_list

# my_list = MyList(['m', 'a', 'b', 'a', 'y', 'c', 'k', 'z'])

# print("Original list:", my_list.user_list)
# print("Reversed list:", my_list.reversed_list())
# print("Sorted list:", my_list.sorted_list())
# print("Random list:", my_list.generate_random_list())


# Exercise 3

class MenuManager:

    def __init__(self, menu) -> None:
        self.menu = menu

    def add_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish['name'] == name:
                print(f"\nThe dish '{name}' already exists in the menu.")
                return
            
        new_dish = {
            'name': name,
            'price': price,
            'spice': spice,
            'gluten': gluten
        }
        self.menu.append(new_dish)

    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish['name'] == name:
                dish['price'] = price
                dish['spice'] = spice
                dish['gluten'] = gluten
                return
            
        print(f"\nThe dish '{name}' is not in the menu.")

    def remove_item(self, name):
        for dish in self.menu:
            if dish['name'] == name:
                self.menu.remove(dish)
                return
        
        print(f"\nThe dish '{name}' is not in the menu")

menu_items = [
        {
            'name': 'Soup',
            'price': 10,
            'spice': 'B',
            'gluten': False
        },
        {
            'name': 'Hamburger',
            'price': 15,
            'spice': 'A',
            'gluten': True
        },
        {
            'name': 'Salad',
            'price': 18,
            'spice': 'A',
            'gluten': False
        },
]

menu_manager = MenuManager(menu_items)

menu_manager.add_item('Tofu Teriyaki', 30, 'A', False)

menu_manager.update_item('Tofu Teriyaki', 40.5, 'A', False)

menu_manager.remove_item('Salad')

print(menu_manager.menu)
    