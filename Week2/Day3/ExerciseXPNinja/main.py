# input_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# lst = input_str.split(',')

# print(f'There are {len(lst)} companies in the list')

# sorted_lst = sorted(lst, reverse=True)
# print(sorted_lst)

# company_with_letter_o = sum('o' in company for company in lst)
# print(company_with_letter_o)

# company_without_letter_i = sum('i' not in company for company in lst)
# print(company_without_letter_i)

# Bonus:

# duplicates_lst = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# lst_without_duplicates = list(set(duplicates_lst))

# count = 0
# company_without_duplicates = []

# for company in lst_without_duplicates:
#     count = 0
#     for comp in duplicates_lst:
#         if company == comp:
#             count += 1
#     if count == 1:
#         company_without_duplicates.append(company)
        
# print(f'There are {len(company_without_duplicates)} companies without duplicates:')
# print(','.join(company_without_duplicates))


# gibberish_lst = [company[::-1] for company in sorted(lst)]

# print(gibberish_lst)