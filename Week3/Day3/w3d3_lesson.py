class Employee():

    def __init__(self, firstname, lastname, age, job, salary=5500):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary

    def get_fullname(self):
        return f"{self.firstname} {self.lastname}"
    
    def happy_birthday(self):
        self.age += 1
    
    def get_promotion(self, promotion_amount):
        self.salary += promotion_amount

    def __gt__(self, other_employee):
        if self.salary > other_employee.salary:
            return f"The employee with the highest salary is: {self.get_fullname()}" 
        else:
            return f"The employee with the highest salary is {other_employee.get_fullname()}" 

    def __add__(self, other_employee):
        return f"The total salary is: {self.salary + other_employee.salary}"

    def __str__(self) -> str:
        return f"{self.get_fullname()} is {self.age} years old. The proffesion is {self.job} and salary is {self.salary}"

    @classmethod
    def create_best_employee(cls):
        pass
    

lea = Employee('Lea', 'Smith', 30, 'developer', 13000)
david = Employee('David', 'Schartz', 20, 'teacher', 10000)

print(lea > david)
print(lea + david)
print(lea)
