import random 
# from pets_and_dogs import Dog
from pets_and_dogs import Dog

class PetDog(Dog):

    commands = ['does a barrel roll', 'stands on his back legs', 'shakes your hand', 'plays dead']

    def __init__(self, name: str, age: int, weight: float, trained: bool = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self) -> None:
        print(self.bark())
        self.trained = True

    def play(self, *dogs) -> None:
        dogs_list = ', '.join(dog.name for dog in dogs)
        print(f"{dogs_list} and {self.name} all play together")

    def do_a_trick(self) -> None:
        if self.trained:
            print(f"{self.name} {random.choice(PetDog.commands)}")


dog1 = PetDog('Cooper', 2, 9)
dog2 = PetDog('Max', 9, 6)
dog3 = PetDog('Finn', 5, 25)

dog1.train()
dog1.play(dog2, dog3)
dog1.do_a_trick()
