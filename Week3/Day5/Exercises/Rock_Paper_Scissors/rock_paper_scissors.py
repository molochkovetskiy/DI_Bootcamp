from game import RockPaperScissorsGame

def get_user_menu_choice():
    print("Menu:")
    print("(g) Play a new game")
    print("(q) Show scores and exit")
    user_input = input("Your choice:  ").lower()
    return user_input

def print_results(results):
    print("\nGame Results:")
    print(f"You won {results['won']} time(s)")
    print(f"You lost {results['lost']} time(s)")
    print(f"You drew {results['drew']} time(s)")
    print("\nThank you for playing!")

def main():
    user = RockPaperScissorsGame()
    while True:
        user_choice = get_user_menu_choice()
        if user_choice == "g":
            game_result = user.play()
            user.results[game_result] = user.results.get(game_result, 0) + 1
        elif user_choice == "q":
            print_results(user.results)
            break
        else:
            print("\nPlease enter 'g' to play or 'q' to quit.")


if __name__ == "__main__":
    main()
