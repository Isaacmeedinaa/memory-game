import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import styles from "./App.styles";
import AppLogic from "./App.logic";
import GameBoard from "./components/game-board/index";

export default function App() {
  const { fontsLoaded } = AppLogic();

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <GameBoard />
      </View>
    </SafeAreaView>
  );
}
