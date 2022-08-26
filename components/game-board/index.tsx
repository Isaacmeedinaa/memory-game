import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import GameBoardLogic from "./logic";
import Card from "../card/index";

const GameBoard: React.FC = () => {
  const { cards, onCardPress, isCardFlipped, isCardMatched, onResetGamePress } =
    GameBoardLogic();
  return (
    <View style={styles.gameBoardContainer}>
      <Text style={styles.memoryGame}>Memory Game</Text>
      <FlatList
        numColumns={3}
        data={cards}
        keyExtractor={(card, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card
            card={item}
            isFlipped={isCardFlipped(index)}
            isMatched={isCardMatched(item)}
            onPress={() => onCardPress(index)}
          />
        )}
        style={styles.flatList}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onResetGamePress}
        style={styles.resetBtn}
      >
        <Text style={styles.resetGame}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameBoard;
