import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VerificationOtp from "./src/screens/VerificationOtp";
import ServicesScreen from "./src/screens/ServicesScreen";
import VetDetailsScreen from "./src/screens/VetDetailsScreen";
import VetLocationScreen from "./src/screens/VetLocationScreen";
import AddSpecializationScreen from "./src/screens/AddSpecializationScreen";
import AddServicesScreen from "./src/screens/AddServicesScreen";
import WeekScheduleScreem from "./src/screens/WeekScheduleScreen";
import ServicesPricesScreen from "./src/screens/ServicesPricesScreen";
import BankDetailsScreen from "./src/screens/BankDetailsScreen";
import AssistantScreen from "./src/screens/AssistantScreen";
import AggrementScreen from "./src/screens/AggrementScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Assistants from "./src/screens/Assistants";
import HomeVisitScreen from "./src/screens/HomeVisitScreen";
import ProgressBar from "./src/screens/ProgressBar";
const Stack = createStackNavigator();
const RegisterStackNavigator = createStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }}/> */}
      <Stack.Screen name="Register" component={VerificationOtp} />
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} />

      <Stack.Screen name="VetDetailsScreen" component={VetDetailsScreen} />
      <Stack.Screen name="VetLocationScreen" component={VetLocationScreen} />
      <Stack.Screen
        name="AddSpecializationScreen"
        component={AddSpecializationScreen}
      />
      <Stack.Screen name="AddServicesScreen" component={AddServicesScreen} />
      <Stack.Screen name="WeekScheduleScreen" component={WeekScheduleScreem} />
      <Stack.Screen
        name="ServicesPricesScreen"
        component={ServicesPricesScreen}
      />
      <Stack.Screen name="BankDetailsScreen" component={BankDetailsScreen} />
      <Stack.Screen name="AddAssistantScreen" component={AssistantScreen} />
      <Stack.Screen name="AgreementScreen" component={AggrementScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Assistants" component={Assistants} />
      <Stack.Screen name="Home Visit" component={HomeVisitScreen} />
    </Stack.Navigator>

    // </NavigationContainer>
  );
}
