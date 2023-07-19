# Exercise 1

# def display_message():
#     print('We\'re learninig various technologies for full stack developers')

# display_message()


# Exercise 2

# def favorite_book(title):
#     print(f'One of my favorite books is {title}')

# favorite_book('Extremely Loud & Incredibly Close')


# Exercise 3

# def describe_city(city, country='Israel'):
#     print(f'{city} is in {country}')

# describe_city('Haifa')


# Exercise 4

# import random

# def compare_two_numbers(number):
#     random_number = random.randint(1,100)
#     if number == random_number:
#         print('Hooray, the numbers are the same')
#     else:
#         print('Unfortunately, the numbers are not the same :(\n')
#         print(f'Your number is {number} and the random number is {random_number}')

# compare_two_numbers(7)


# Exercise 5

# def make_shirt(size='L', message='I love Python'):
#     print(f'The size of the shirt is {size} and the text is {message}')

# make_shirt()
# make_shirt('M')
# make_shirt('M', 'Stay in the game')

# make_shirt(size='M', message='I\'m cooler')


# Exercise 6

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(list_of_magicians):
#     for magician in list_of_magicians:
#         print(magician)

# def make_great(list_of_magicians):
#     for i, magician in enumerate(list_of_magicians):
#         list_of_magicians[i] = magician + ' the Great'

# make_great(magician_names)
# show_magicians(magician_names)


# Exercise 7

# import random

# def get_random_temp(season):
#     if season.lower() == 'winter':
#         return round(random.uniform(-10.0, 16.0), 1)
#     elif season.lower() == 'spring':
#         return round(random.uniform(0.0, 23.0), 1)
#     elif season.lower() == 'summer':
#         return round(random.uniform(24.0, 40.0), 1)
#     elif season.lower() == 'autumn' or season.lower() == 'fall':
#         return round(random.uniform(10.0, 32.0), 1)
#     else:
#         raise ValueError("Invalid season. Supported seasons are 'winter', 'spring', 'summer', and 'autumn'.")

# def get_advice(temperature):
#     if temperature < 0 :
#         print('Brrr, that\'s freezing! Wear some extra layers today')
#     elif temperature <= 16:
#         print('Quite chilly! Don\'t forget your coat')
#     elif temperature <= 23:
#         print('It\'s a pleasant temperature. Enjoy the day!')
#     elif temperature <= 32:
#         print('Getting warm! Stay hydrated.')
#     else:
#         print('Hot day! Find some shade and stay cool.')

# def determine_season(month):
#     if month in (1, 2, 12):
#         return 'winter'
#     elif month in (3, 4, 5):
#         return 'spring'
#     elif month in (6, 7, 8):
#         return 'summer'
#     elif month in (9, 10, 11):
#         return 'autumn'
#     else:
#         raise ValueError('Invalid month. Please enter a number between 1 and 12.')

# def main():
#     month = int(input('Enter the number of the month (1 to 12): '))

#     season = determine_season(month)
#     temperature = get_random_temp(season)

#     print(f'\nThe temperature right now is {temperature} degrees Celsius.\n')

#     advice = get_advice(temperature)

# main()


# Exercise 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def show_results(correct_ans, incorr_ans):
    print('\nResults:')
    print(f'Correct answers: {correct_ans}')
    print(f'Incorrect answers: {incorr_ans}\n')


def show_incorrect_answers(wrong_answers):
    print('Here are the incorrect answers:\n')
    for answer_data in wrong_answers:
        print(f"The question was: {answer_data['question']}")
        print(f"Your answer: {answer_data['user_answer']}")
        print(f"Correcct answer: {answer_data['correct_answer']}\n")


def ask_questions(questions):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for question_data in questions:
        question = question_data["question"]
        answer = question_data["answer"]

        user_answer = input('\n' + question + "\n")    

        if user_answer.lower() == answer.lower():
            correct_answers += 1  
        else:
            incorrect_answers += 1  
            wrong_answers.append({'question': question, 'user_answer': user_answer, 'correct_answer': answer})

    show_results(correct_answers, incorrect_answers)
    show_incorrect_answers(wrong_answers)

    return incorrect_answers

while True:
    result = ask_questions(data)

    if result >= 3:
        is_play_again = input('Do you want to play again (yes/no):')
        if is_play_again.lower() != 'yes':
            break
    else:
        print("Thanks for playing!")
        break
