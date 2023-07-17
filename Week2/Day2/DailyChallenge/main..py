# Challenge 1

# number, length = map(int, input('Enter the number and the length separated by a single space: ').split())

# lst_of_multiples = [number * i for i in range(1, length + 1)]

# print(lst_of_multiples)


# Challenge 2

user_string = input('Enter a string \n')

new_string = ''
prev_char = None

for char in user_string:
    if char != prev_char:
        new_string += char
        prev_char = char

print(new_string)
