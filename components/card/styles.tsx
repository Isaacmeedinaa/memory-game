import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 90,
    width: 90,
    margin: 10,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 15,
  },
});

export default styles;
