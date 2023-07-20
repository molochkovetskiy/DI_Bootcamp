import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)

hangman_stages = ['''
    +---+
        |
        |
        |
       ===''', '''
    +---+
    O   |
        |
        |
       ===''', '''
    +---+
    O   |
    |   |
        |
       ===''', '''
    +---+
    O   |
   /|   |
        |
       ===''', '''
    +---+
    O   |
   /|\  |
        |
       ===''', '''
    +---+
    O   |
   /|\  |
   /    |
       ===''', '''
    +---+
    O   |
   /|\  |
   / \  |
       ===''']

incorrect_attempts = 0
word_to_show = ['*' if char.isalpha() else char for char in word]
incorrect_letters = set()

while incorrect_attempts < 6 and '*' in word_to_show:
    # Display the current hangman stage
    print(hangman_stages[incorrect_attempts])

    # Display the current state of the word with hidden letters (using '*')
    print(f"The word is: {''.join(word_to_show)}")

    user_letter = input('\nEnter a letter: ')

    if user_letter in word:
        # Update the word display with the correctly guessed letters
        for index, letter in enumerate(word):
            if letter == user_letter:
                word_to_show[index] = letter
    else:
        if user_letter not in incorrect_letters:
            # Track incorrect guesses and add the letter to the set of incorrect letters
            incorrect_letters.add(user_letter)
            incorrect_attempts += 1
        else:
            print(f"\nYou already entered the letter '{user_letter}'. Try again.")

# Check if the word has been completely guessed or if the maximum incorrect attempts are reached
if '*' not in word_to_show:
    print(hangman_stages[incorrect_attempts])
    print(f'\nYou win! The word was {word}')
else:
    print(hangman_stages[incorrect_attempts])
    print(f'\nYou failed! The word was: {word}')
