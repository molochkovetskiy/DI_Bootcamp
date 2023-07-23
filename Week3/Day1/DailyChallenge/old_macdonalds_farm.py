class Farm:

    def __init__(self, name) -> None:
        self.name = name
        self.animals = {}

    def add_animal(self, name: str, amount: int = 1) -> None:
        if name not in self.animals:
            self.animals[name] = amount
        else:
            self.animals[name] += 1

    def get_info(self) -> None:
        animal_str = ''
        for animal, amount in self.animals.items():
            animal_str += f"{animal} : {amount}\n"
        info = f"{self.name}'s farm\n\n{animal_str}\n    E-I-E-I-O!"

        return info

    def get_animals_types(self):
        sorted_animals = sorted(self.animals)

        return sorted_animals

    def get_short_info(self):
        *animals, last_animal = self.get_animals_types()
        animal_str = 's, '.join(animals)
        print(f"\n{self.name}'s farm has {animal_str}s and {last_animal}.")


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

macdonald.get_short_info()
