# Exercise 1
# import math

# C = 50
# H = 30
# user_numbers = input('Enter a comma-separated string of numbers: ').split(',')
# result = []

# for num in user_numbers:
#     formula = math.sqrt((2 * C * int(num)) / H)
#     result.append(round(formula))
# print(*result, sep=',')


# Exercise 2

lst = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
print(*lst)

# sorted_lst = sorted(lst, reverse=True)
# print(*sorted_lst)

# print(sum(lst))

# first_and_last = []
# first_and_last.extend([lst[0], lst[-1]])
# print(first_and_last)

# lst_greater_50 = [x for x in lst if x > 50]
# print(lst_greater_50)

# lst_smaller_10 = [x for x in lst if x < 10]
# print(lst_smaller_10)

# lst_squared = [x*x for x in lst]
# print(lst_squared)

# lst_without_duplicates = list(set(lst))
# print(f'''List without any duplicates: {lst_without_duplicates}; It\'s length: {len(lst_without_duplicates)}''')

# print(f'Average of all the numbers in list is {(sum(lst)/len(lst))}')

# print(f'The largest number in list is {max(lst)}')

# print(f'The smallest number in list is {min(lst)}')
