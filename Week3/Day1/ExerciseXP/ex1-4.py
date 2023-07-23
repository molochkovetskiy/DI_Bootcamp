# Exercise 1

# class Cat:
#     def __init__(self, cat_name: str, cat_age: int) -> None:
#         self.name = cat_name
#         self.age = cat_age


# def find_the_oldest_cat(cat_list: list[Cat]) -> Cat | None:
#     if len(cat_list) == 0:
#         return None

#     oldest_cat = cat_list[0]

#     for cat in cat_list[1:]:
#         if cat.age > oldest_cat.age:
#             oldest_cat = cat
    
#     return oldest_cat


# cat1 = Cat(cat_name="Bella", cat_age=3)
# cat2 = Cat(cat_name="Mishmish", cat_age=6)
# cat3 = Cat(cat_name="Luna", cat_age=7)

# the_oldest_cat = find_the_oldest_cat([cat1, cat2, cat3])

# print(f"The oldest cat is {the_oldest_cat.name}, and it is {the_oldest_cat.age} years old.")


# Exercise 2

# class Dog:

#     def __init__(self, name: str, height: int) -> None:
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         print(f"{self.name} jumps {self.height * 2} cm high!")


# davids_dog = Dog(name='Rex', height=50)

# print(davids_dog.name)
# print(davids_dog.height)
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog(name='Teacup', height=20)

# print(sarahs_dog.name)
# print(sarahs_dog.height)
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print(f"The bigger dog is: {davids_dog.name}")
# else:
#     print(f"The bigger dog is: {sarahs_dog.name}")


# Exercise 3

# class Song:

#     def __init__(self, lyrics: list) -> None:
#         self.lyrics = lyrics

#     def sing_me_a_song(self):

#         for line in self.lyrics:
#             print(line)

# stairway= Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])

# stairway.sing_me_a_song()


# Exercise 4

class Zoo:

    def __init__(self, zoo_name: str) -> None:
        self.zoo_name = zoo_name
        self.animals = []
        self.animals_group = {}

    def add_animal(self, new_animal: str) -> None:
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(f"All the animals of the zoo {self.zoo_name}:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold: str) -> None:
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self) -> None:

        sorted_animals = sorted(self.animals)
        group = 1
        animal_to_check = sorted_animals[0]
        self.animals_group[group] = [animal_to_check]

        for animal in sorted_animals[1:]:
            if animal_to_check[0] == animal[0]:
                self.animals_group[group].append(animal)
            else:
                group += 1
                self.animals_group[group] = [animal]
                animal_to_check = animal

    def get_groups(self) -> None:
        for group_num in self.animals_group:
            group_animals = ', '.join(self.animals_group[group_num])
            print(f"\nGroup {group_num}: {group_animals}")

ramat_gan_safari = Zoo('Ramat Gan Safari')

ramat_gan_safari.add_animal('Tiger')
ramat_gan_safari.add_animal('Alpaca')
ramat_gan_safari.add_animal('Ape')
ramat_gan_safari.add_animal('Penguin')
ramat_gan_safari.add_animal('Zebra')
ramat_gan_safari.add_animal('Emu')
ramat_gan_safari.add_animal('Giraffe')

ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal('Zebra')

ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
