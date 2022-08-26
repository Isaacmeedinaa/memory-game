import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Fonts from "./styles/Fonts";

const AppLogic = () => {
  const [fontsLoaded] = useFonts({
    [Fonts.POPPINS_REGULAR]: require("./assets/fonts/Poppins-Regular.ttf"),
    [Fonts.POPPINS_MEDIUM]: require("./assets/fonts/Poppins-Medium.ttf"),
    [Fonts.POPPINS_SEMIBOLD]: require("./assets/fonts/Poppins-SemiBold.ttf"),
    [Fonts.POPPINS_BOLD]: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    const handleSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      } else {
        await SplashScreen.preventAutoHideAsync();
      }
    };

    handleSplashScreen().catch((e) => console.error(e));
  }, [fontsLoaded]);

  return { fontsLoaded };
};

export default AppLogic;
