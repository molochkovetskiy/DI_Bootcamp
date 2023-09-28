# def factorial(n):
#     if n == 1:
#         return n
#     else:
#         return n + factorial(n-1)
    
# print(factorial(5))


# books = ['book1', 'book2', 'book3', 'book4', 'book5']

# def count_books(book_list) -> int:
#     if len(book_list) == 0:
#         return 0
#     else:
#         return 1 + count_books(book_list[1:])
    
# print(count_books(books))


# Exercise 1:

# my_list = [2, 4, 5, 6, 7]

# def sum_of_a_list(some_list):
#     if not some_list:
#         return 0
#     else:
#         return some_list[0] + sum_of_a_list(some_list[1:])
    
# print(sum_of_a_list(my_list))


# Exercise 2:

# to_reverse = 'Hello World!'

# def reverse_string(some_string: str) -> str:
#     if not some_string:
#         return ''
#     else:
#         return reverse_string(some_string[1:]) + some_string[0]
    
# print(reverse_string(to_reverse))


# Exercise 3:

# def power_of_number(base: int, exponent: int) -> int:
#     if exponent == 0:
#         return 1
#     elif exponent > 0:
#         return base * power_of_number(base, exponent-1)
#     else:
#         return 1 / (base * power_of_number(base, abs(exponent)-1))

# print(power_of_number(2, 2))
