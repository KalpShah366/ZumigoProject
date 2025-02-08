import "./global.css";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
// import VerificationOtp from "./screens/VerificationOtp";
import VerificationOtp from "./app/src/screens/VerificationOtp";
import * as Font from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        // "Proxima-Nova-Bold": require("./assets/fonts/Proxima-Nova-Bold.otf"),
        "Proxima-Nove-Bold": require("./app/src/assets/fonts/Proxima-Nova-Bold.otf"),
        "Proxima-Nova-Light": require("./app/src/assets/fonts/Proxima-Nova-Light.otf"),
        "Proxima-Nova-Semibold": require("./app/src/assets/fonts/Proxima-Nova-Semibold.otf"),
        "ProximaNova-Regular": require("./app/src/assets/fonts/ProximaNova-Regular.otf"),
        "Proxima-Nova-Medium": require("./app/src/assets/fonts/Proxima-Nova-Medium.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <VerificationOtp />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
