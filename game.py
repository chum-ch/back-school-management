def tic_tac_toe():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"

    def print_board():
        for row in board:
            print(" | ".join(row))
            print("---------")

    def check_winner():
        for i in range(3):
            if board[i][0] == board[i][1] == board[i][2] != " ":
                return True
            if board[0][i] == board[1][i] == board[2][i] != " ":
                return True
        if board[0][0] == board[1][1] == board[2][2] != " ":
            return True
        if board[0][2] == board[1][1] == board[2][0] != " ":
            return True
        return False

    while True:
        print_board()
        row = int(input("Enter the row (0-2): "))
        col = int(input("Enter the column (0-2): "))

        if board[row][col] != " ":
            print("Invalid move. Try again.")
            continue

        board[row][col] = current_player

        if check_winner():
            print_board()
            print(f"Congratulations! Player {current_player} wins!")
            break

        if all(board[i][j] != " " for i in range(3) for j in range(3)):
            print_board()
            print("It's a tie!")
            break

        current_player = "O" if current_player == "X" else "X"

# tic_tac_toe()

import random

def guess_the_number():
    secret_number = random.randint(1, 100)
    tries = 0

    while True:
        guess = int(input("Guess the number (between 1 and 100): "))
        tries += 1

        if guess < secret_number:
            print("Too low! Try again.")
        elif guess > secret_number:
            print("Too high! Try again.")
        else:
            print(f"Congratulations! You guessed the number in {tries} tries.")
            break

guess_the_number()