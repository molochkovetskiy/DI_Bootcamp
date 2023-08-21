# Python Basics


# Data Types

# 1.
# c. Tuple


# Lists and Loops

# 1.
# squares_of_even = [num ** 2 for num in range(1, 11) if num % 2 == 0]
# print(squares_of_even)

# 2.
# list_of_numbers = list(range(1, 11))

# for num in list_of_numbers:
#     if num % 2 == 0 and num % 3 == 0:
#         print(num)

# 3.
# student_list = [
#     {
#     "name": "John", 
#     "age": 24
#     }, 
#     {
#     "name": "Anna", 
#     "age": 22
#     }, 
#     {
#     "name": "Mike", 
#     "age": 25
#     }
# ]

# for student in student_list:
#     print(student["name"], student["age"])


# Function Behavior with *args and **kwargs

# def combine_words(*args, **kwargs):
#     words = list(args) + list(kwargs.values())
#     sentence = ' '.join(words)
#     return sentence

# print(combine_words("Hello", "world", second="is", third="great!", first="Python"))


# Object-Oriented Programming (OOP)

# class Vehicle:
#     def __init__(self, type: str, brand: str, year: int) -> None:
#         self.type = type
#         self.brand = brand
#         self.year = year
    
#     def __str__(self) -> str:
#         return f"Type: {self.type}, Brand: {self.brand}, Year: {self.year}"
    
# audi = Vehicle("Car", "Audi", 2023)
# print(audi)


# OOP Inheritance and Decorators

# 1.
# class Car:
#     def __init__(self, brand: str, model: str, mileage: int) -> None:
#         self.brand = brand
#         self.model = model
#         self.mileage = mileage
    
#     def __str__(self) -> str:
#         return f"Brand: {self.brand}, Model: {self.model}, Mileage: {self.mileage}"
    
# bmw = Car("BMW", "X7", 23000)
# print(bmw)

# 2.
# class ElectricCar(Car):
#     def __init__(self, brand: str, model: str, mileage: int, battery_capacity: float) -> None:
#         super().__init__(brand, model, mileage)
#         self.__battery_capacity = battery_capacity
    
#     def __str__(self) -> str:
#         car_details = super().__str__()
#         return f"{car_details}, Battery Capacity: {self.battery_capacity}"    

#     @property
#     def battery_capacity(self):
#         return self.__battery_capacity

#     @battery_capacity.setter
#     def battery_capacity(self, new_capacity):
#         if new_capacity > 0:
#             self.__battery_capacity = new_capacity

# electric_car = ElectricCar("Tesla", "Model S", 14000, 63.7)
# print(electric_car)
# electric_car.battery_capacity = 80.0
# print(electric_car)
# electric_car.battery_capacity = -10.0
# print(electric_car)

# 3.
# class BankAccount:
#     _total_accounts = 0

#     @staticmethod
#     def bank_policy():
#         return "This is a bank policy message"
    
#     def __init__(self, account_holder, initial_balance=0.0) -> None:
#         self._account_holder = account_holder
#         self._balance = max(initial_balance, 0.0)
#         BankAccount._total_accounts += 1

#     def deposit(self, amount):
#         if amount > 0:
#             self._balance += amount 
    
#     def withdraw(self, amount):
#         if 0 <= amount <= self._balance:
#             self._balance -= amount
#         else:
#             print("Not enough money on your balance")
    
#     def view_balance(self):
#         return self._balance
    
#     @classmethod
#     def total_accounts(cls):
#         return cls._total_accounts
    

# account1 = BankAccount("John John", 1000.0)
# account2 = BankAccount("Smith Smith", 500.0)

# account1.deposit(200.0)
# account2.withdraw(100.0)

# print(account1.view_balance())
# print(account2.view_balance())

# print("Total accounts:", BankAccount.total_accounts())
# print(BankAccount.bank_policy())


# Data Science

# Numpy and Pandas Visualization

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# 1.
# numpy_array = np.arange(1, 10).reshape(3, 3)
# print(numpy_array)

# 2.
df = pd.DataFrame({"A": [1, "apple", 3, 4, "banana"], "B": [5, 6, 7, 8, 9]})

numeric_values = pd.to_numeric(df["A"], errors="coerce")
mean_numeric = numeric_values.mean()
df["A"] = np.where(numeric_values.notnull(), df["A"], mean_numeric)

# print(df)

# 3.
plt.plot(df['A'], label='Column A', marker='o')
plt.plot(df['B'], label='Column B', marker='x')

plt.xlabel('Index')
plt.ylabel('Value')
plt.title('Plot of Columns A and B')
plt.legend()

plt.show()