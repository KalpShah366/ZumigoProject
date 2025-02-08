import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";

const Boxes = () => {
  const [number, setNumber] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        // className="w-[280px] h-[181px] bg-slate-600"
        style={styles.textStyles}
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
        placeholder=""
        maxLength={1}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semibold",
    // fontFamily:"Pro", USE PROXIMA NOVA FONTS
    fontSize: 20,
    height: 58,
    width: 48,
    borderRadius: 15,
    backgroundColor: "#FFF4E5",
  },
  textStyles: {
    fontSize: 20,
    fontFamily: "Proxima-Nova-Semibold",
    textAlign: "center",
  },
});
export default Boxes;
