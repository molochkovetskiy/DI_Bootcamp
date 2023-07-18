# Exercise 1

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# my_dict = dict(zip(keys, values))
# print(my_dict)


# Exercise 2

# ticket_cost = 0
# family = {}

# while True:
#     user_input = input('Enter the name and the age separate by space or enter \'quit\': \n')
#     if user_input == 'quit':
#         break
#     name, age = user_input.split()
#     family[name] = int(age)
    
# for name, age in family.items():
#     if age < 3:
#         ticket_price = 0
#     elif 3 <= age <= 12:
#         ticket_price = 10
#     else:
#         ticket_price = 15
#     print(f"For {name.capitalize()}, the ticket is ${ticket_price}")
#     ticket_cost += ticket_price
    
# print(f'Family\'s total cost is ${ticket_cost}')


# Exercise 3

# brand = {
#     'name': 'Zara',
#     'creation_date': 1975,
#     'creator_name': 'Amancio Ortega Gaona',
#     'type_of_clothes': ['men', 'women', 'children', 'home'],
#     'international_competitors': ['Gap', 'H&M', 'Benetton'],
#     'number_stores': 7000,
#     'major_color': {
#         'France': 'blue',
#         'Spain': 'red',
#         'US': ['pink', 'green']
#     }
# }

# brand['number_stores'] = 2

# # print(f'Zara\'s clients are {brand["type_of_clothes"]}')

# brand['country_creation'] = 'Spain'

# if 'international_competitors' in brand:
#     brand['international_competitors'].append('Desigual')

# if 'creation_date' in brand:
#     del brand['creation_date']

# print(brand['international_competitors'][-1])
# print(', '.join(brand['major_color']['US']))
# print(len(brand))
# print(', '.join(brand.keys()))

# more_on_zara = {}

# for key, value in brand.items():
#     if key == 'creation_date':
#         more_on_zara[key] = value
#     elif key == 'number_stores':
#         more_on_zara[key] = 10000


# Exercise 4

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

disney_users_A = {user: num for num, user in enumerate(users)}
disney_users_B = {num: user for num, user in enumerate(users)}
disney_users_C = {user: num for num, user in enumerate(sorted(users))}

disney_users_A_mod1 = {user: num for num, user in enumerate(users) if 'i' in user}
disney_users_A_mod2 = {user: num for num, user in enumerate(users) if user.startswith(('M', 'P'))}

print(disney_users_A)
print(disney_users_B)
print(disney_users_C)

print(disney_users_A_mod1)
print(disney_users_A_mod2)
