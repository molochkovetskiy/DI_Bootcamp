# Exercise 1

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

    def show_info(self):
        print(f"{self.get_fullname()} is {self.age} years old. The proffesion is {self.job} and salary is {self.salary}")


# lea = Employee('Lea', 'Smith', 30, 'developer', 13000)
# david = Employee('David', 'Schartz', 20, 'teacher', 10000)

# print(lea.get_fullname())
# print(lea.happy_birthday())
# print(lea.get_promotion(2000))
# lea.show_info()


# Exercise 2

class Developer(Employee):

    def __init__(self, firstname, lastname, age, job='developer', salary=15000):
        super().__init__(firstname, lastname, age, job, salary)
        self.coding_skills = []

    def add_skills(self, *skills):
        self.coding_skills.extend(skills)

    def coding(self):
        skills = ', '.join(self.coding_skills)
        return f"{self.get_fullname()} knows: {skills}"

    def coding_with_partner(self, other_developer):
        print(f"\n{self.coding()} and {other_developer.coding()}\n")

    def get_promotion(self, promotion_amount):
        self.salary *= promotion_amount


tom = Developer('Tom', 'Cruise', 30)
angelina = Developer('Angelina', 'Jolie', 23)

tom.add_skills('Java', 'Python', 'Git')
angelina.add_skills('CI/CD', 'Docker', 'Linux')
print(tom.coding())
tom.coding_with_partner(angelina)
tom.show_info()
tom.get_promotion(1.5)
tom.happy_birthday()
tom.show_info()
