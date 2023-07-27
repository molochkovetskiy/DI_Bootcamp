import os

class AnagramChecker:
    def __init__(self, file_name) -> None:
        # Find the full path of the given file_name in the current working directory and subdirectories
        for root, dirs, files in os.walk(os.getcwd()):
            if file_name in files:
                file_path = os.path.join(root, file_name)
        
        # Initialize a set to store the words from the word list file
        set_of_words = set()
        with open(file_path, 'r') as file:
            for line in file:
                set_of_words.add(line.strip().lower())

        # Store the word_set in the instance variable list_of_words
        self.set_of_words = set_of_words

    def is_valid_word(self, word):
        return word.lower() in self.set_of_words
    
    @staticmethod
    def is_anagram(word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        word = word.lower()
        # Use a list comprehension to find all anagrams of the word in the list_of_words set
        return [w for w in self.set_of_words if self.is_anagram(word, w) and word != w]
