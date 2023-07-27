import random

class Card:
    def __init__(self, suit, value) -> None:
        self.suit = suit
        self.value = value

    def __str__(self) -> str:
        return f"{self.value} of {self.suit}"
        

class Deck:
    def __init__(self) -> None:
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        self.deck = self.create_deck()

    def create_deck(self):
        deck = [Card(suit, value) for suit in self.suits for value in self.values]
        return deck

    def shuffle(self):
        self.deck = self.create_deck()
        random.shuffle(self.deck)

    def deal(self):
        if not len(self.deck) == 0:
            return self.deck.pop()
        else:
            return None


if __name__ == "__main__":

    deck = Deck()
    deck.shuffle()

    print("\nDealing cards:")
    for _ in range(5):
        card = deck.deal()
        if card:
            print(f"Dealt: {card}")
        else:
            print("Deck is empty!")
