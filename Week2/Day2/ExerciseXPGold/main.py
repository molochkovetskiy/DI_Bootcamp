# Exercise 1

# lst1 = [10, 20, 30, 40]
# lst2 = [50, 60]

# # first solution
# res = [*lst1, *lst2]

# # second solution
# lst1.extend(lst2)

# print(res, lst1)


# Exercise 2

# for i in range(1500, 2501):
#     if i % 5 == 0 and i % 7 == 0:
#         print(i)


# Exercise 3

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# user_name = input('Enter your name: ')
# if user_name in names:
#     index_of_name = names.index(user_name)
#     print(index_of_name)
# else:
#     print('Sorry, you\'re not in the list')


# Exercise 4

# num = []
# for i in range(1, 4):
#     num.append(input(f'Enter the {i} nummber: '))

# print(f'The greatest number is: {max(num)}')


# Exercise 5

# import string
# import re

# letters = string.ascii_uppercase
# for letter in letters:
#     if re.match(r'[AEIOU]', letter):
#         print(f'{letter} is a vowel')
#     else:
#         print(f'{letter} is a consonant')


#  Exercise 6

# words = []

# for word in range(7):
#     words.append(input(f'Enter the word: '))
# letter = input('Enter a single character: ')

# for word in words:
#     if letter in word:
#         print(f'Index of \'{letter.upper()}\' in \'{word.capitalize()}\' is {word.find(letter)}')
#     else:
#         print(f'The word \'{word.capitalize()}\' doesn\'t contain the letter \'{letter.upper()}\'')
        

# Exercise 7

# list_of_numbers = [i for i in range(1, 1000001)]

# print(f'Minimum is {min(list_of_numbers)}')
# print(f'Maximum is {max(list_of_numbers)}')
# print(f'Sum of the list is {sum(list_of_numbers)}')


# Exercise 8

# list_of_numbers = input('Enter a sequence of comma-separated numbers \n').split(',')
# tuple_of_numbers = tuple(list_of_numbers)

# print(list_of_numbers)
# print(tuple_of_numbers)


# Exercsie 9

import random

win_games = 0
lost_games = 0

while True:
    user_input = input('Enter a number from 1 to 9 or write \'quit\': ').lower()
    if user_input == 'quit':
        break
    
    random_number = random.randint(1, 9)
    if user_input.isdigit() and 1 <= int(user_input) <= 9:
        if int(user_input) == random_number:
            print('Winner\n')
            win_games += 1
        else:
            print('Better luck next time\n')
            lost_games += 1
    else:
        print('Invalid input. Please enter a number from 1 to 9 or write \'quit\'.\n')

total_games = win_games + lost_games
print(f'{total_games} games in total. Won {win_games} times, lost {lost_games} times.')
