#  Exercise 1

# my_fav_numbers = {5, 7 , 10, 14, 23, 30}
# my_fav_numbers.add(15)
# my_fav_numbers.add(95)
# my_fav_numbers.discard(95)
# friend_fav_numbers = {10, 15, 4}
# our_fav_numbers = my_fav_numbers | friend_fav_numbers


#  Exercise 2

# test_tuple = (5, 15, 45)
# test_list = list(test_tuple)
# test_list.append(6)
# test_list.append(100)
# test_tuple = tuple(test_list)


# Exercise 3

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# count_of_apples = basket.count("Apples")
# basket.clear()

# print(basket)


# Exercise 4

# lst = []
# for num in range(15, 55, 5):
#     if num % 10 == 5:
#         lst.append(num / 10)
#     else:
#         lst.append(int(num / 10))

# print(lst)


# Exercsise 5

# for i in range (1, 21):
#     print(i)

# for i in range (1, 21):
#     if i % 2 == 0:
#         print(i)


# Exercise 6

# my_name = 'vitaly'

# while True:
#     user_name = input('Enter your name \n').lower()
#     if my_name == user_name:
#         break
# print('Finally! Now we\'re namesakes')


# Exercise 7

# user_fav_fruits = input('Enter your favorite fruits separate with a single space \n').lower().split(' ')
# user_fruit = input('Enter a name of any fruit \n').lower()
# if user_fruit in user_fav_fruits:
#     print('You chose one of your favorite fruits! Enjoy!')
# else:
#     print('You chose a new fruit. I hope you enjoy')


# Exercsise 8

# toppings = []

# while True:
#     user_toppings = input('Enter a pizza topping or enter \'quit\': \n')
#     if user_toppings != 'quit':
#         toppings.append(user_toppings)
#         print('We\'ll add that topping to your pizza \n')
#     else:
#         break

# price = len(toppings) * 2.5 + 10
# print('Your toppings are: \n') 

# for topping in toppings:
#     print(topping)

# print(f'The total price of your pizza is {price}')


# Exercise 9

# total_price = 0
# ages_of_person = input('Enter the age of each person separate with a single space \n').split(' ')

# for age in ages_of_person:
#     if 3 < int(age) < 12:
#         total_price += 10
#     elif int(age) > 12:
#         total_price += 15

# print(f'Total cost is {total_price}')

# names = ['John', 'Bill', 'Lisa', 'Samanta']
# permitted_names = names[:]
# for name in names:
#     age = int(input(f'Enter {name}\'s age: '))
#     if 16 <= age <= 21:
#         permitted_names.remove(name)

# print(permitted_names)


# Exercise 10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich",
                   "Avocado sandwich", "Pastrami sandwich",
                   "Egg sandwich", "Chicken sandwich",
                   "Pastrami sandwich"]

finished_sandwiches = []

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove('Pastrami sandwich')

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches:
    print(f'I made your {sandwich}')
