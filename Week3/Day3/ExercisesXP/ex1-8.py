# Exercise 1

# class Currency:
#     def __init__(self, currency: str, amount: int) -> None:
#         self.currency = currency
#         self.amount = amount

#     def __str__(self) -> str:
#         return f"{self.amount} {self.currency}" + ("s" if self.amount != 1 else "")
    
#     def __int__(self) -> int:
#         return self.amount
    
#     def __repr__(self) -> str:
#         return f"{self.amount} {self.currency}" + ("s" if self.amount != 1 else "")
    
#     def __add__(self, other: 'Currency') -> int:
#         if isinstance(other, Currency) and self.currency != other.currency:
#             raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#         return self.amount + int(other)

#     def __iadd__(self, other: 'Currency') -> 'Currency':
#         if isinstance(other, Currency) and self.currency != other.currency:
#             raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#         self.amount += int(other)
#         return self
    

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))  # Output: '5 dollars'
# print(int(c1))  # Output: 5
# print(repr(c1))  # Output: '5 dollars'

# print(c1 + 5)  # Output: 10
# print(c1 + c2)  # Output: 15

# print(c1)  # Output: '5 dollars'

# c1 += 5
# print(c1)  # Output: '10 dollars'

# c1 += c2
# print(c1)  # Output: '20 dollars'

# try:
#     print(c1 + c3)
# except TypeError as e:
#     print(e)  # Output: TypeError: Cannot add between Currency type <dollar> and <shekel>


# Exercise 3

# import random

# def roll_and_match(user_number: int) -> None:
#     if user_number < 1 or user_number > 100:
#         raise ValueError("The input number should be between 1 and 100")
    
#     random_number = random.randint(1, 100)

#     print(f"Your number: {user_number}")
#     print(f"Random number: {random_number}")

#     if user_number == random_number:
#         print("Congratulations! You rolled the same number")
#     else:
#         print("Better luck next time!")

# roll_and_match(14)


# Exercise 4

# import string
# import random

# def generate_random_string(length: int) -> str:
#     letters = string.ascii_letters
#     return ''.join(random.choice(letters) for _ in range(length))

# random_string = generate_random_string(5)
# print(random_string)


# Exercise 5

# from datetime import date

# def display_current_date():
#     current_date = date.today()
#     print(f"Current date: {current_date.strftime('%B %d, %Y')}")

# display_current_date()


# Exercise 6

# from datetime import datetime, timedelta

# def format_timedelta(td: timedelta) -> str:
#     days = td.days
#     hours, seconds = divmod(td.seconds, 3600)
#     minutes, seconds = divmod(seconds, 60)

#     days_text = f"{days} days" if days > 0 else ""
#     time_text = f"{hours:02}:{minutes:02}:{seconds:02} hours" if any((hours, minutes, seconds)) else ""

#     if days_text and time_text:
#         return f"{days_text} and {time_text}"
#     elif days_text:
#         return days_text
#     elif time_text:
#         return time_text
#     else:
#         return "0 hours" 

# def time_left_until_january_1():
#     current_date = datetime.now()
#     next_january_1 = datetime(current_date.year + 1, 1, 1)

#     time_left = next_january_1 - current_date
#     formatted_time = format_timedelta(time_left)

#     print(f"The 1st of January is in {formatted_time}")


# time_left_until_january_1()


# Exercise 7

# from datetime import datetime

# def calculate_minutes_lived(birthdate_str, date_format="%Y-%m-%d"):
#     birth_date = datetime.strptime(birthdate_str, date_format)
#     current_date = datetime.now()

#     timedelta_difference = current_date - birth_date
#     minutes_difference = int((timedelta_difference.days * 24 * 60) + (timedelta_difference.seconds / 60))

#     return minutes_difference

# def display_minutes_lived(birthdate_str):
#     minutes_lived = calculate_minutes_lived(birthdate_str)
#     print(f"You have lived approximately {minutes_lived} minutes.")


# birthdate = "1995-05-14"
# display_minutes_lived(birthdate)


# Exercise 8

from faker import Faker

def generate_fake_users(num_users):
    fake = Faker()
    users = []

    for _ in range(num_users):
        user_dict = {
            'name': fake.name(),
            'address': fake.address(),
            'language_code': fake.language_code(),
        }
        users.append(user_dict)

    return users

num_users = 3
users = generate_fake_users(num_users)
print(users)
