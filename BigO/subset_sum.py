# O(n^2)

# def subsetsum(numbers: list, target: int) -> bool:
#     for i in range(len(numbers)):
#         for j in range(i+1, len(numbers)):
#             if numbers[i] + numbers[j] == target:
#                 print("True:", numbers[i], numbers[j]) 
#                 return True
#     print("False")
#     return False


# O(n)

def subsetsum(numbers: list, target: int) -> bool:
    hashtable = set()

    for current_number in numbers:
        number_to_find = target - current_number

        if number_to_find in hashtable:
            print("True:", number_to_find, current_number)
            return True
        hashtable.add(current_number)
    
    print("False")
    return False

nums = [12, -7, 20, 1, 4, -10, -1]

subsetsum(nums, 1) # False
subsetsum(nums, 2) # True: 12,  -10
subsetsum(nums, 3) # True: 4,  -1
subsetsum(nums, 4) # False
