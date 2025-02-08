import { Stack } from "expo-router";
import VerificationScreen from "../screens/VerificationOtp";
// import { NavigationContainer } from "@react-navigation/native";
import { NavigationIndependentTree } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
export default function RootLayout() {
  return (
    // <NavigationContainer>
    <Stack>
      {/* <Stack.Screen name="index" /> */}
      {/* <Stack.Screen name="VerificationOtp" /> */}
      {/* <Stack.Screen name="ServicesScreen" /> */}
    </Stack>
  );
}
