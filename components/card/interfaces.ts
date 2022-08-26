import ICard from "../../contracts/ICard";

export interface ICardProps {
  card: ICard;
  isFlipped: boolean;
  isMatched: boolean;
  onPress: () => void;
}
