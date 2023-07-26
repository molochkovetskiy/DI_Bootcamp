import re
import os
import string
from typing import List

class Text:
    def __init__(self, text) -> None:
        self.text = text

    def frequency_of_word(self, other_word: str) -> str:
        words_list = self._get_words_list()
        word_frequency = words_list.count(other_word.lower())
        return f"The frequency of '{other_word}' is {word_frequency}"
    
    def most_common_word(self) -> str:
        words_list = self._get_words_list()

        word_frequency = {word: words_list.count(word) for word in set(words_list)}
        max_frequency = max(word_frequency.values())
        most_repeated_words = []

        for word, frequency in word_frequency.items():
            if frequency == max_frequency:
                most_repeated_words.append(word)

        return f"The most repeated word(s): {', '.join(most_repeated_words)}"
        
    def list_of_unique_words(self) -> str:
        words_list = self._get_words_list()
        unique_words = set(words_list)
        return f"Unique word(s): {', '.join(unique_words)}"
    
    def _get_words_list(self) -> List[str]:
        # Use regex to split the text into words and remove non-alphanumeric characters
        return re.findall(r'\b\w+\b', self.text.lower())
    
    @classmethod
    def from_file(cls, file_name: str) -> 'Text':
        for root, dirs, files in os.walk(os.getcwd()):
            if file_name in files:
                file_path = os.path.join(root, file_name)
                with open(file_path, 'r') as file:
                    text = file.read()
                return cls(text)

        raise FileNotFoundError(f"File '{file_name}' not found.")
    

class TextModification(Text):
    def remove_punctuation(self):
        translator = str.maketrans('', '', string.punctuation)
        return self.text.translate(translator)
    

# text = Text("A good book would sometimes cost as much as a good house.")

# print(text.frequency_of_word("A"))
# print(text.frequency_of_word("house"))
# print(text.frequency_of_word("car"))

# print(text.most_common_word())

# print(text.list_of_unique_words())

# text_from_file = Text.from_file("the_stranger.txt")

# print(text_from_file.frequency_of_word("stranger"))

# print(text_from_file.list_of_unique_words())

# print(text_from_file.most_common_word())

# text_obj = TextModification.from_file('the_stranger.txt')
# print(text_obj.remove_punctuation())
