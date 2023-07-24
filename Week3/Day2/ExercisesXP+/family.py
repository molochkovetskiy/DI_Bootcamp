class Family():

    def __init__(self, last_name: str, members: list[dict]) -> None:
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs) -> None:
        child_data = kwargs
        child_data['is_child'] = True
        self.members.append(child_data)
        print(f"Congratulations! {child_data['name']} is born to the {self.last_name} family.")

    def is_18(self, name: str) -> bool:
        for person in self.members:
            if person['name'] == name:
                return person['age'] >= 18
        return False
            
    def family_presentation(self) -> None:
        print(f"{self.last_name}'s family:")
        for person in self.members:
            print(person['name'])


# initial_members_data = [
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
# ]

# black = Family('Black', initial_members_data)
# black.born(name ='Lucy', age=0, gender='Female')
# black.family_presentation()

# print(black.is_18("Michael"))
# print(black.is_18("Lucy"))


# Exercise 2

class TheIncredibles(Family):
    def use_power(self, name: str) -> None:
        for person in self.members:
            if person['name'] == name and person['age'] >= 18:
                print(f"{person['name']} can use their power: {person['power']}")
                return
        raise ValueError(f"{name} is not over 18 years old and cannot use their power")
            
    def incredible_presentation(self) -> None:
        super().family_presentation()
        print("Incredible names and powers:")
        for person in self.members:
            print(f"{person['incredible_name']}: {person['power']}")


initial_members_data = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles_family = TheIncredibles('Incredibles', initial_members_data)
incredibles_family.incredible_presentation()
incredibles_family.born(name='Baby Jack', age=0, gender='Male', power='Unknown Power', incredible_name='BabyJack')
incredibles_family.incredible_presentation()
