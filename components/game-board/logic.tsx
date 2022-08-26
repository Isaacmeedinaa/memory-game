import { useEffect, useState, useRef } from "react";
import ICard from "../../contracts/ICard";
import CARDS from "../../constants/cards";
import _ from "lodash";
// import shuffleCardDeck from "../../utils/shuffleCardDeck";

const GameBoardLogic = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<ICard[]>([]);
  const viewCountdown = useRef();

  const generateCardDesk = () => {
    // Creates a new array with paired cards
    const cardDeck = [...CARDS, ...CARDS];
    // Shuffles the card deck to make the game more challenging!
    // const shuffledCardDeck = shuffleCardDeck(cardDeck);
    const shuffledCardDeck = _.shuffle(cardDeck);
    // Sets the shuffled card deck to render it on the game board
    setCards(shuffledCardDeck);
  };

  useEffect(() => {
    generateCardDesk();
  }, []);

  const onCardPress = (cardIndex: number) => {
    // check if there is only one flipped card
    let onlyOneFlippedCard = flippedCards.length === 1;
    if (onlyOneFlippedCard) {
      // we will flip the newly selected card
      setFlippedCards([...flippedCards, cardIndex]);
    } else {
      // if the user selects a new card while theres two cards flipped, we will flip cards back
      // and reset the view countdown
      clearTimeout(viewCountdown.current);
      setFlippedCards([cardIndex]);
    }
  };

  const checkIfFlippedCardsMatch = () => {
    // get the flipped cards
    let firstFlippedCard = cards[flippedCards[0]];
    let secondFlippedCard = cards[flippedCards[1]];

    // check if the flipped cards match
    let flippedCardMatch =
      firstFlippedCard.matchId === secondFlippedCard.matchId;
    if (flippedCardMatch) {
      // if flipped cards match, clear the flipped cards array and add the matching cards to
      // the matching cards array
      setMatchedCards([...matchedCards, firstFlippedCard, secondFlippedCard]);
      setFlippedCards([]);
      return;
    }

    // if cards do not match, just flip them back
    // @ts-ignore
    viewCountdown.current = setTimeout(() => {
      setFlippedCards([]);
    }, 1000);
  };

  useEffect(() => {
    // check if flipped cards match
    if (flippedCards.length === 2) {
      checkIfFlippedCardsMatch();
    }
  }, [flippedCards]);

  const isCardFlipped = (cardIndex: number) => {
    const cardIsFlipped = flippedCards.includes(cardIndex);
    return cardIsFlipped;
  };

  const isCardMatched = (card: ICard) => {
    const isMatched = matchedCards.some((matchedCard) => {
      let cardIsHasBeenMatched = matchedCard.matchId === card.matchId;
      if (cardIsHasBeenMatched) return true;
      return false;
    });
    return isMatched;
  };

  const onResetGamePress = () => {
    generateCardDesk();
    setFlippedCards([]);
    setMatchedCards([]);
    clearTimeout(viewCountdown.current);
  };

  return { cards, onCardPress, isCardFlipped, isCardMatched, onResetGamePress };
};

export default GameBoardLogic;
