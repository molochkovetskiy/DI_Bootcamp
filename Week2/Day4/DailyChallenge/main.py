matrix = [
    '7ii',
    'Tsx',
    'h%?',
    'i #',
    'sM ',
    '$a ',
    '#t%',
    '^r!'
]

def decode_matrix(matrix):
    decrypt_string = ''

    num_rows = len(matrix)
    num_columns = len(matrix[0])

    rows = []

    for col in range(num_columns):
        char = ''
        for row in range(num_rows):
            char += ''.join(matrix[row][col])
        rows.append(char)

    for row in rows:
        for char in row:
            if char.isalpha():
                decrypt_string += char
            elif char == ' ':
                decrypt_string += ' '
        decrypt_string += ' '

    return decrypt_string.strip()

decoded_matrix = decode_matrix(matrix)      

print(decoded_matrix)