def binary_search(array, value_to_search):

    middle = array[len(array) // 2]
    right = len(array)
    left = 0
    iteration = 0

    while True:
        iteration += 1

        if middle == len(array) - 1:
            print("No such value")
            print(f"Iterations: {iteration}")
            break

        if middle == value_to_search:
            print(f"Searched value found - {value_to_search}")
            print(f"Iterations: {iteration}")
            break

        elif middle < value_to_search:
            left = middle
            middle = (left + right) // 2
        elif middle > value_to_search:
            right = middle
            middle = (left + right) // 2


some_array = list(range(1000))
value = 100

binary_search(some_array, value)
