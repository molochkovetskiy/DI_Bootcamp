from typing import List

class BankAccount():
    def __init__(self, balance: int, username: str, password: str, authenticated: bool=False) -> None:
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = authenticated

    def authenticate(self, username: str, password: str) -> None:
        if self.username == username and self.password == password:
            self.authenticated = True

    def deposit(self, amount: int) -> None:
        if not self.authenticated:
            raise Exception("Not authenticated. Please authenticate first")
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self.balance += amount
        
    def withdraw(self, amount: int) -> None:
        if not self.authenticated:
            raise Exception("Not authenticated. Please authenticate first")
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if self.balance - amount < 0:
            raise ValueError("Insufficient balance")
        self.balance -= amount
             
        
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance: int, username: str, password: str, minimum_balance: int=0) -> None:
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount: int) -> None:
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if self.balance - amount < self.minimum_balance:
            raise ValueError("Cannot withdraw. Balance will be below the minimum balance")
        super().withdraw(amount)
        

class ATM():
    def __init__(self, account_list: List[object], try_limit: int) -> None:
        for account in account_list:
            if not isinstance(account, (BankAccount, MinimumBalanceAccount)):
                raise ValueError("account_list must contain instances of BankAccount or MinimumBalanceAccount")
        self.account_list = account_list

        if try_limit <= 0:
            raise ValueError("try_limit must be a positive number")
        self.try_limit = try_limit
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self) -> None:
        while True:
            print("Main Menu")
            print("1. Log in")
            print("2. Exit")
            choice = input("Enter your choice: ")

            if choice == "1":
                username = input("Enter your username: ")
                password = input("Enter your password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("\nGoodbye!")
                break
            else:
                print("Invalid choice. Please try again")
    
    def log_in(self, username: str, password: str) -> None:
        for account in self.account_list:
            if account.username == username and account.password == password:
                account.authenticate(username, password)
                self.show_account_menu(account)
                break
        else:
            self.current_tries += 1
            print("\nInvalid username or password")
            if self.current_tries >= self.try_limit:
                print("\nYou have reached the maximum number of tries. Goodbye!")
                exit()

    def show_account_menu(self, account) -> None:
        print(f"\nWelcome, {account.username}!")
        while True:
            print("\nAccount Menu")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Enter your choice: ")

            if choice == "1":
                amount = int(input("Enter the amount to deposit: "))
                account.deposit(amount)
                print(f"Deposited {amount}. New balance: {account.balance}")
            elif choice == "2":
                amount = int(input("Enter the amount to withdraw: "))
                account.withdraw(amount)
                print(f"Withdrew {amount}. New balance: {account.balance}")
            elif choice == "3":
                print("Exiting the account menu\n")
                break
            else:
                print("Invalid choice. Please try again")


account1 = BankAccount(1000, "user1", "user1")
account2 = MinimumBalanceAccount(2000, "user2", "user2", minimum_balance=1000)
atm = ATM([account1, account2], try_limit=2)
