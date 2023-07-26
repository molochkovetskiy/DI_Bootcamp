# Exercise 1

# def colorize(text, color):
#     colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
#     try:
#         if not isinstance(text, str):
#             raise TypeError("Your text should be a str format")
#         if color not in colors:
#             raise ValueError("Your color doesn't exist")
#     except Exception as err:
#         print(err)
#     else:
#         print("Perfect!")

# colorize("my_text", "black")
# colorize(123, "blue")
# colorize("abc", "blue")


# Exercise 2

class Employee():

    def __init__(self, firstname, lastname, age, job, salary, address):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary
        self.__address = address

    def get_fullname(self):
        return f"{self.firstname} {self.lastname}"
    
    def happy_birthday(self):
        self.age += 1
    
    def get_promotion(self, promotion_amount):
        self.salary += promotion_amount

    def __gt__(self, other_employee: 'Employee'):
        if self.salary > other_employee.salary:
            return f"The employee with the highest salary is: {self.get_fullname()}" 
        else:
            return f"The employee with the highest salary is {other_employee.get_fullname()}" 

    def __add__(self, other_employee: 'Employee'):
        return f"The total salary is: {self.salary + other_employee.salary}"

    def __str__(self) -> str:
        return f"{self.get_fullname()} is {self.age} years old. The proffesion is {self.job} and salary is {self.salary}"

    @property
    def address(self):
        return self.__address
    
    @address.setter
    def address(self, new_address):
        try:
            if self.age > 30:
                self.__address = new_address
            else:
                raise ValueError("Employee is too young")
        except Exception as err:
            print(err)

    @classmethod
    def create_best_employee(cls, firstname, lastname, age, job, salary, address):
        if salary > 30000:
            return cls(firstname, lastname, age, job, salary, address)
        

class Manager(Employee):
    def __init__(self, firstname, lastname, age, job='manager', salary=45000):
        super().__init__(firstname, lastname, age, job, salary)
        self.list_of_employees = []
    
    def add_new_employee(self, new_employee):
        self.list_of_employees.append(new_employee)

    def show_employees(self):
        for employee in self.list_of_employees:
            print(employee.get_fullname())
    

lea = Employee('Lea', 'Smith', 32, 'developer', 13000, 'Tel-Aviv, Biyalik 123')
david = Employee('David', 'Schartz', 20, 'teacher', 10000, 'Ramat Gan')

# print(lea > david)
# print(lea + david)
# print(lea)
# print(lea.address)
# lea.address = 'Haifa, Shimon 25'
# print(lea.address)
# new_employee = Employee.create_best_employee('John', 'White', 20, 'ceo', 35000, 'Herzliya')
# print(new_employee)
