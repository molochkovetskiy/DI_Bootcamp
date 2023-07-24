# Exercise 1

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     pass


# charlie = Bengal('Charlie', 5)
# bobo = Chartreux('Bobo', 8)
# milo = Siamese('Milo', 3)

# all_cats =[charlie, bobo, milo]
# sara_pets = Pets(all_cats)

# sara_pets.walk()


# Exercise 2

class Dog():
    def __init__(self, name: str, age: int, weight: float):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self) -> str:
        return f"{self.name} is barking"
    
    def run_speed(self) -> float:
        return round(self.weight / (self.age * 10), 3)

    def fight(self, other_dog) -> str:
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        
        if self_score > other_score:
            return f"{self.name} is the winner"
        else:
            return f"{other_dog.name} is the winner"
        
def main():
    dog1 = Dog('Sparky', 3, 8)
    dog2 = Dog('Rocky', 6, 10)
    dog3 = Dog('Daisy', 5, 4)

    print(dog1.bark())

    print(f"{dog1.name}'s run speed: {dog1.run_speed()}")
    print(f"{dog2.name}'s run speed: {dog2.run_speed()}")
    print(f"{dog3.name}'s run speed: {dog3.run_speed()}")

    print(dog3.fight(dog1))
    print(dog2.fight(dog3))


if __name__ == '__main__':
    main()


