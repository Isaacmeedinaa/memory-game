import { StyleSheet } from "react-native";
import Colors from "./styles/Colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
