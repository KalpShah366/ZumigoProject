// import "../global.css";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import App from "../App";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const index = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default index;

const styles = StyleSheet.create({});
