import random

class RockPaperScissorsGame:
    def __init__(self) -> None:
        self.results = {
            "won": 0,
            "lost": 0,
            "drew": 0
            }

    def get_user_choice(self) -> str:
        while True:
            user_choice = input("Select (r)ock, (p)aper or (s)cissors: ").lower()
            if user_choice in ["r", "rock"]:
                return "rock"
            elif user_choice in ["p", "paper"]:
                return "paper"
            elif user_choice in ["s", "scissors"]:
                return "scissors"
            else:
                print("Please enter the corresponding letter.")

    def get_computer_choice(self) -> str:
        moves_options = ["rock", "paper", "scissors"]
        computer_choice = random.choice(moves_options)
        return computer_choice
    
    def get_game_result(self, user_choice: str, computer_choice: str) -> str:
        if user_choice == computer_choice:
            return "drew"
        elif (user_choice == "rock" and computer_choice == "scissors") or \
             (user_choice == "paper" and computer_choice == "rock") or \
             (user_choice == "scissors" and computer_choice == "paper"):
            return "won"
        else:
            return "lost"
            
    def play(self):
        user_choice = self.get_user_choice()
        computer_choice = self.get_computer_choice()
        game_result = self.get_game_result(user_choice, computer_choice)
        
        print(f"You chose {user_choice}. The computer chose {computer_choice}. You {game_result}\n")
        
        return game_result
