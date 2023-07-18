# Exercise 1-3

# birthdays = {
#     'John': '1990/05/15',
#     'Emily': '1987/10/21',
#     'Michael': '1995/03/07',
#     'Sarah': '1992/12/03',
#     'David': '1984/08/29'
# }

# print('Welcome!')
# print('You can look up the birthdays of the people in the list!\n')
# print('But first let\'s add your birthday to the list\n')

# user_name = input('What\'s your name?: ').capitalize()
# user_birthday = input('When\'s your birtday? Enter in the format "YYYY/MM/DD”: ')

# birthdays[user_name] = user_birthday

# print('\nHere are the people in the list:')
# for name in birthdays:
#     print(name)

# person_name = input('\nEnter a person\'s name to get their birthday: ').capitalize()

# birthday = birthdays.get(person_name)

# if birthday:
#     print(f'\nThe birthday of {person_name} is {birthday}.')
# else:
#     print(f'\nSorry, we don\'t have the birthday information for {person_name}')


# Exercise 4

# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }

# for item, price in items.items():
#     print(f'The price of {item} is ${price}')

items = {
    "banana": {"price": 4, "stock": 10},
    "apple": {"price": 2, "stock": 5},
    "orange": {"price": 1.5, "stock": 24},
    "pear": {"price": 3, "stock": 1}
}

total_cost = 0

for item, details in items.items():
    price = details["price"]
    stock = details["stock"]
    item_cost = price * stock
    total_cost += item_cost

print(f"The total cost of buying everything in stock is ${total_cost}.")
