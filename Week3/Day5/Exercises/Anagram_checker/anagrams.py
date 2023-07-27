from anagram_checker import AnagramChecker

def get_user_input():
    print("Welcome to Anagram Chechker!")
    while True:
        user_input = input("Enter a word or type 'q' to quit: ").strip()
        if user_input.lower() == 'q':
            return None
        if len(user_input.split()) != 1:
            print("Error: Please enter a single word.")
            continue
        if not user_input.isalpha():
            print("Error: Only alphabetic characters are allowed.")
            continue
        return user_input

def display_anagrams(word, anagrams):
    print(f"\nYOUR WORD: '{word.upper()}'")
    print("This is a valid English word.")
    
    if not anagrams:
        print("No anagrams found for your word\n")
    else:
        print(f"Anagrams for your word: {', '.join(anagrams)}\n")

def main():
    file_name = "sowpods.txt"
    anagram_checker = AnagramChecker(file_name)

    while True:
        user_word = get_user_input()
        if user_word is None:
            print("Goodbye!")
            break
        
        is_valid_word = anagram_checker.is_valid_word(user_word)
        if not is_valid_word:
            print("This is not an english word\n")
            continue
        
        anagrams = anagram_checker.get_anagrams(user_word)
        display_anagrams(user_word, anagrams)
            

if __name__ == "__main__":
    main()
