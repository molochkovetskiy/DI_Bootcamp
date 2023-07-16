import random


user_str = input('Enter your string: ')
len_of_str = len(user_str)

print()

if len_of_str == 10:
    print('Perfect string')
elif len_of_str > 10:
    print('String too long')
else:
    print('String not long enough')

print()

print(f'First character is "{user_str[0]}", last character is "{user_str[-1]}"')

print()

for i in range(len_of_str):
    print(user_str[:i+1])

print()

shuffle_str = ''.join(random.sample(user_str, len_of_str))
print(shuffle_str)