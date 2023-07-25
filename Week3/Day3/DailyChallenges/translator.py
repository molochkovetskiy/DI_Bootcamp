from googletrans import Translator

def translate_to_english(words_list):
    translator = Translator()
    translations = {}

    for word in words_list:
        translation = translator.translate(word, src='fr', dest='en')
        translations[word] = translation.text

    return translations

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

english_translations = translate_to_english(french_words)
print(english_translations)
