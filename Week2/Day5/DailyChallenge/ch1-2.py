# Challenge 1

# input_string = input('Enter comma-separated words:\n')

# sorted_input_string = [word.strip() for word in sorted(input_string.split(','))]

# result_string = ','.join(sorted_input_string)

# print(result_string)


# Challenge 2

def find_longest_word(sentence):
    words = sentence.split()

    longest_word = ''

    for word in words:
        if len(word) > len(longest_word):
            longest_word = word 

    return longest_word


sentence = "A thing of beauty is a joy forever."

longest_word = find_longest_word(sentence)

print('Longest word:', longest_word)
