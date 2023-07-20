def create_empty_board():
    """Create an empty 3x3 Tic-Tac-Toe board."""
    return [[' ' for _ in range(3)] for _ in range(3)]


def display_board(board):
    """Print the board."""
    print('\nTIC TAC TOE')
    print('*' * 17)
    for i in range(3):
        print(f'*  {board[i][0]}  | {board[i][1]} |  {board[i][2]}  *')
        if i < 2:
            print('*  ---|---|---  *')
    print('*' * 17)


def make_move(board, player, user_row, user_column):
    """Make a move on the Tic-Tac-Toe board for the given player."""

    # Convert user inputs to zero-based index
    row = int(user_row) - 1
    column = int(user_column) - 1

    # Check if the move is valid and the cell is empty
    if 0 <= row < 3 and 0 <= column < 3 and board[row][column] == ' ':
        board[row][column] = player
        return True  # Move is successful
    else:
        return False  # Move is invalid or the cell is already occupied
    

def get_player_input(player):
    """Get the user input for the row and column of the move."""
    print(f'\nPlayer {player}\'s turn...\n')
    user_row = input('Enter row: ')
    user_column = input('Enter column: ')

    return user_row, user_column


def check_win(board):
    """Check if there is a winner in the current board state."""

    # Check rows and columns
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] and board[i][0] in ('X', 'O'):
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] and board[0][i] in ('X', 'O'):
            return board[0][i]

    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] in ('X', 'O'):
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] in ('X', 'O'):
        return board[0][2]

    return None  # Return None if there is no winner yet


def main():
    print('Welcome to TIC TAC TOE!')

    board = create_empty_board()
    players = {'X': 'Player X', 'O': 'Player O'}
    current_player = 'X'

    while True:
        display_board(board)

        while True:
            user_row, user_column = get_player_input(current_player)
            is_valid_move = make_move(board, current_player, user_row, user_column)
            if is_valid_move:
                break
            print('\nInvalid move or the cell is already occupied')

        winner = check_win(board)
        if winner:
            display_board(board)
            print(f'\n{players[winner]} wins!')
            break

        if ' ' not in sum(board, []):  # If the board is full
            display_board(board)
            print('\nIt\'s a tie!')
            break

        current_player = 'X' if current_player == 'O' else 'O'


if __name__ == '__main__':
    main()
