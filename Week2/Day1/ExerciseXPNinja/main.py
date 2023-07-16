# Exercise 3

# print(3 <= 3 < 9) # True
# print(3 == 3 == 3) # True 
# print(bool(0)) # False
# print(bool(5 == "5")) # False 
# print(5 == "5") # False 
# print(bool(4 == 4) == bool("4" == "4")) # True
# print(bool(bool(None))) # False

# x = (1 == True)
# y = (1 == False)
# a = True + 4
# b = False + 10

# print("y is", y) # y is False
# print("x is", x) # x is True
# print("a:", a) # a: 5
# print("b:", b) # b: 10


# Exercise 4

# my_text = '''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
#            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
#            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
#            laboris nisi ut aliquip ex ea commodo consequat. 
#            Duis aute irure dolor in reprehenderit in voluptate velit 
#            esse cillum dolore eu fugiat nulla pariatur. 
#            Excepteur sint occaecat cupidatat non proident, 
#            sunt in culpa qui officia deserunt mollit anim id est laborum.'''

# print(len(my_text))


# Exercise 5

max_str = 0
while True: 
    user_str = input("Enter a string without the character 'A': ")
    if 'A' in user_str:
        break
    if len(user_str) > max_str:
        max_str = len(user_str)
        print(f'Good job! Can you enter a longer sentence? Current maximum is {max_str}')
    else:
        break
print(f'Your maximum is {max_str}')
