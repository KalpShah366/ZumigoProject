// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React, { useState } from "react";

// const ServicesBoxes = ({ imageUri, text, onPress, selected }) => {
//   const [isPressed, setIsPressed] = useState(false);
//   const handlePressIn = () => {
//     setIsPressed(true); // Change color when button is pressed
//   };

//   const handlePressOut = () => {
//     setIsPressed(false); // Revert back when button is released
//   };
//   return (
//     <View style={styles.mainContainer}>
//       <TouchableOpacity
//         style={[styles.button, isPressed && styles.pressedButton]} // Dynamically change style
//         // onPress={onPress}
//         onPressIn={handlePressIn}
//         onPressOut={handlePressOut}
//         activeOpacity={0.7}
//       >
//         <View style={styles.iconContainer}>
//           <Image
//             source={{
//               uri: imageUri,
//             }}
//             style={styles.images}
//           />
//         </View>
//       </TouchableOpacity>
//       <Text style={{ textAlign: "center" }}>{text}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   iconContainer: {
//     width: 108,
//     height: 108,
//     backgroundColor: "#FFFCF8",
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     overflow: "hidden",
//   },
//   images: {
//     width: 32.42,
//     height: 29.98,
//     resizeMode: "contain",
//     alignSelf: "center",
//     marginBottom: 16,
//     aspectRatio: 1, // Maintains original image aspect ratio
//     resizeMode: "contain",
//     tintColor: "#212121",
//   },
//   button: {
//     // backgroundColor: "#FF5362", // Default background color
//     borderRadius: 15,
//   },
//   pressedButton: {
//     backgroundColor: "#FF5362", // Color changes when button is pressed
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
// export default ServicesBoxes;

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ServicesBoxes = ({ imageUri, text, onPress, selected }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          selected && styles.selectedButton, // Change style when selected
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View
          style={[
            styles.iconContainer,
            selected && styles.selectedIconContainer, // Change background when selected
          ]}
        >
          <Image
            source={{ uri: imageUri }}
            style={[
              styles.images,
              selected && styles.selectedImage, // Change tint color when selected
            ]}
          />
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, selected && styles.selectedText]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // alignItems: "center",
    margin: 10,
  },
  iconContainer: {
    width: 90,
    height: 90,
    backgroundColor: "#FFFCF8",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.75,
    borderColor: "#FFF4E5",
    overflow: "hidden",
  },
  selectedIconContainer: {
    backgroundColor: "#F8EFE2", // Background changes when selected
    borderWidth: 1.8,
    borderColor: "#FF5362",
  },
  images: {
    width: 32.42,
    height: 29.98,
    resizeMode: "contain",
    tintColor: "#212121",
  },
  selectedImage: {
    tintColor: "#693035", // Change icon color when selected
  },
  button: {
    borderRadius: 15,
  },
  selectedButton: {
    backgroundColor: "#FF5362", // Button background changes when selected
  },
  text: {
    textAlign: "center",
    color: "#212121",
  },
  selectedText: {
    color: "#000000", // Text color changes when selected
    // fontWeight: "bold",
  },
});

export default ServicesBoxes;
