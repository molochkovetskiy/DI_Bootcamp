# Challenge 1

# dict_letters = {}
# cnt = 0

# user_word = input('Enter a word: ')

# for letter in user_word:
#     if letter in dict_letters:
#         dict_letters[letter].append(cnt)
#     else:
#         dict_letters[letter] = [cnt]
#     cnt += 1

# print(dict_letters)


# Challenge 2

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$5" 

# afford_items = []

# for item, price in items_purchase.items():
#     price = int(price[1:].replace(',', ""))
#     wallett_value = int(wallet[1:])
#     if wallett_value >= price:
#         afford_items.append(item)

# afford_items.sort()

# print(afford_items if afford_items else "Nothing")
