import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const styles = StyleSheet.create({
  gameBoardContainer: {
    borderRadius: 15,
    backgroundColor: Colors.BLACK2,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  memoryGame: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: Colors.WHITE,
    fontSize: 22,
  },
  flatList: {
    marginTop: 15,
    flexGrow: 0,
  },
  resetBtn: {
    marginTop: 15,
    width: "100%",
    height: 60,
    backgroundColor: Colors.PURPLE,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.PURPLE,
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    paddingHorizontal: 20,
  },
  resetGame: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.WHITE,
    fontSize: 18,
  },
});

export default styles;
