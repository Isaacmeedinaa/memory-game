import ICard from "../contracts/ICard";

// Fisher-Yates algorithm (https://javascript.info/task/shuffle)
const shuffleCardDeck = (cards: ICard[]) => {
  // logic to shuffle card desk
  for (let i = cards.length - 1; i > 0; i--) {
    // random card index from 0 to i
    let randomCardIdx = Math.floor(Math.random() * (i + 1));

    // Swaps the random card and the current card
    [cards[i], cards[randomCardIdx]] = [cards[randomCardIdx], cards[i]];
  }

  return cards;
};

export default shuffleCardDeck;
