# Exercise 1

# my_list = ['red', 'blue', 'green', 'yellow', 'black']
# inp_item = input('Enter an item: ')
# inp_index = int(input('Enter an index: '))
# my_list.insert(inp_index, inp_item)

# print(my_list)


# Exercise 2

# message = "I'm a String To check"
# print("Spaces in a string:", sum(1 for char in message if char == ' '))


# Exercise 3

# message = "I'm a String To check"

# print("Uppercase letters:", sum(1 for char in message if char.isupper()))
# print("Lowercase letters:", sum(1 for char in message if char.islower()))


# Exercise 4

# def my_sum(array):
#     sum_result = 0
#     for element in array:
#         sum_result += element

#     return sum_result


# result = my_sum([1, 5, 4, 2])
# print(result)


# Exercise 5

# def find_max(array):
#     max_elemnet = 0
#     for element in array:
#         if element >= max_elemnet:
#             max_elemnet = element
    
#     return max_elemnet

# result = find_max([0, 1, 3, 50])
# print(result)


# Exercise 6

# def factorial(n):
#     factorial_result = 1
#     for i in range(1, n+1):
#         factorial_result *= i

#     return factorial_result

# result = factorial(4)
# print(result)


# Exercise 7

# def list_count(array, target):
#     count = 0
#     for element in array:
#         if element == target:
#             count += 1

#     return count

# result = list_count(['a', 'a', 't', 'o'], 'a')
# print(result)


# Exercise 8

# import math

# def norm(array):
#     squared_sum = sum(elem * elem for elem in array)
#     result = math.sqrt(squared_sum)

#     return int(result)

# result = norm([1, 2, 2])
# print(result)


# Exercise 9

# def is_mono(array):
#     is_increasing = all(array[i] <= array[i+1] for i in range(len(array)-1))
#     is_decreasing = all(array[i] >= array[i+1] for i in range(len(array)-1))

#     return is_increasing or is_decreasing

# print(is_mono([7, 6, 5, 5, 2, 0]))
# print(is_mono([2, 3, 3, 3]))
# print(is_mono([1, 2, 0, 4]))


# Exercise 10

# def find_longest_word(word_list):
#     longest_word = ''

#     for word in word_list:
#         if len(word) > len(longest_word):
#             longest_word = word 

#     return longest_word


# list_of_words = ['thing', 'of', 'beauty', 'is', 'a', 'joy', 'forever']

# longest_word = find_longest_word(list_of_words)

# print('Longest word:', longest_word)


# Exercise 11

# def separate_list(input_list):
#     int_list = []
#     str_list = []

#     for element in input_list:
#         if isinstance(element, str):
#             str_list.append(element)
#         elif isinstance(element, int):
#             int_list.append(element)

#     return int_list, str_list

# lst = ['flower', 'home', 14, 'dog', 23, 15, 'wi-fi']
# int_list, str_list = separate_list(lst)

# print(int_list)
# print(str_list)


# Exercise 12

# def is_palindrome(input_string):
#     return input_string.lower() == input_string[::-1].lower()
    
# result1 = is_palindrome('John')
# result2 = is_palindrome('Radar')

# print(result1)
# print(result2)


# Exercise 13

# def count_words_over_length(input_sentence, length):
#     count = 0
#     for word in input_sentence.split():
#         if len(word) > length:
#             count += 1

#     return count

# sentence = 'Do or do not there is no try'
# k = 2

# result = count_words_over_length(sentence, k)
# print(result)


# Exercise 14

# def calculate_dict_average(input_dict):
#     total_values = sum(input_dict.values())
#     num_values = len(input_dict)
#     avg_value = total_values // num_values

#     return avg_value

# result = calculate_dict_average({'a': 1,'b': 2,'c': 8,'d': 1})
# print(result)


# Exercise 15

# def find_common_divisors(num1, num2):
#     smaller_num = min(num1, num2)

#     common_divisors = []

#     for i in range(1, smaller_num + 1):
#         if num1 % i == 0 and num2 % i == 0:
#             common_divisors.append(i)

#     return common_divisors

# number1 = 10
# number2 = 20
# result = find_common_divisors(number1, number2)
# print(result)


# Exercise 16

# def is_prime(number):
#     if number == 1:
#         return False

#     for i in range(2, number):
#         if number % i == 0:
#             return False

#     return True

# num = 11
# result = is_prime(num)
# print(result)


# Exercise 17

# def get_elements_at_even_index_and_value(input_list):
#     result_list = []
#     for index, value in enumerate(input_list):
#         if index % 2 == 0 and value % 2 == 0:
#             result_list.append(value)

#     return result_list

# my_list = [1, 2, 2, 3, 4, 5]
# result = get_elements_at_even_index_and_value(my_list)
# print(result)


# Exercise 18

# def count_types(**kwargs):
#     type_counts = {}

#     for value in kwargs.values():
#         value_type = type(value).__name__
#         type_counts[value_type] = type_counts.get(value_type, 0) + 1

#     return type_counts

# result = count_types(a=1, b='string', c=1.0, d=True, e=False)
# print(result)


# Exercise 19

# def custom_split(input_string, delimiter=' '):

#     words = []
#     word = ''
    
#     for char in input_string:
#         if char == delimiter:
#             if word:
#                 words.append(word)
#                 word = ''
#         else:
#             word += char
    
#     if word:
#         words.append(word)

#     return words

# sentence = "This is a custom split method"
# result = custom_split(sentence)
# print(result)

# sentence = "apple,banana,orange,grape"
# result = custom_split(sentence, ',')
# print(result)


# Exercise 20

def to_password_format(input_string):
    password_format = '*' * len(input_string)
    
    return password_format

input_string = "secret_password"
password = to_password_format(input_string)
print(password)
