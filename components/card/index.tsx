import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import styles from "./styles";
import { ICardProps } from "./interfaces";

const Card: React.FC<ICardProps> = ({
  card,
  isFlipped,
  isMatched,
  onPress,
}) => {
  if (isFlipped || isMatched)
    return (
      <View style={styles.card}>
        <Image source={card.src} style={styles.img} />
      </View>
    );

  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.card} onPress={onPress}>
      <Image
        source={require("../../assets/images/dc-logo.png")}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

export default Card;
