import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const LocationBoxes = ({ text, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.box, isSelected && styles.selectedBox]} // Apply selected style
      onPress={onPress}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 108,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#FFFCF8",
    borderWidth: 0.6,
    borderColor: "#FFF4E5",
  },
  selectedBox: {
    backgroundColor: "#FF5362",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF5362",
    borderWidth: 0.6,
  },
  text: {
    color: "#333",
    fontSize: 16,
    textAlign: "center",
    // fontFamily: "Proxima-Nova-Medium",
  },
  selectedText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default LocationBoxes;
