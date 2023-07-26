# Exercise 1

# import random
# import os

# def get_words_from_file(file_path):
#     with open (file_path, "r") as file:
#         list_of_words = [line.strip().lower() for line in file]
#     return list_of_words

# def get_random_sentence(words_list, length):
#     random_sentence = " ".join(random.choices(words_list, k=length))
#     return random_sentence

# def is_valid_length(length):
#     try:
#         length = int(length)
#         if 2 <= length <= 20:
#             return True
#         else:
#             return ValueError("Invalid length! The length should be an integer between 2 and 20")
#     except ValueError:
#         return ValueError("Invalid input! The length should be an integer")
    
# def main():
#     print("Welcome to Random Sentence Generator!")
#     print("This program generates a random sentence of a given length.\n")
#     user_length = input("How long you want the sentence to be? ")

#     file_name = 'words_list.txt'
#     file_path = os.path.join(os.getcwd(), file_name)

#     if is_valid_length(user_length) is True:
#         words_of_list = get_words_from_file(file_path)
#         random_sentence = get_random_sentence(words_of_list, int(user_length))
#         print(random_sentence)
#     else:
#         print(is_valid_length(user_length))


# if __name__ == "__main__":
#     main()


# Exercise 2

import json

sample_json = """{
    "company": {
        "employee": {
            "name": "emma",
            "payable": {
                "salary": 7000,
                "bonus": 800
            }
        }
    }
}"""

data = json.loads(sample_json)

# Access the nested "salary" key
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

data["company"]["employee"]["birth_date"] = "1997-05-10"

# Convert the dictionary back to JSON string
json_file = "updated_data.json"
updatedJson = json.dumps(data, indent=2)

# Save the JSON string to a file
with open(json_file, "w") as file:
    file.write(updatedJson)

print(f"JSON data saved to '{json_file}'")
