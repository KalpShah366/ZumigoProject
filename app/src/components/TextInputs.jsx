import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const TextInputs = ({
  placeholder,
  keyboardType,
  numberOfLines,
  multiline,
  onChangeText,
  value,
}) => {
  return (
    <View>
      <TextInput
        style={styles.inputBoxes}
        placeholder={placeholder}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        multiline={multiline}
        onChangeText={onChangeText}
        value={value}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBoxes: {
    width: "92%",
    height: 58,
    backgroundColor: "#FFFCF8",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 50,
    borderWidth: 0.6,
    borderColor: "#FFF4E5",
  },
});
export default TextInputs;
