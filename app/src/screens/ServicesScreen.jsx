// // import {
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   View,
// //   ActivityIndicator,
// //   KeyboardAvoidingView,
// //   Platform,
// // } from "react-native";
// // import React, { useState, useEffect } from "react";
// // import * as Font from "expo-font";
// // import ServicesBoxes from "../components/ServicesBoxes";
// // import { useNavigation } from "@react-navigation/native";
// // const ServicesScreen = () => {
// //   const navigation = useNavigation();
// //   const [selectedServices, setSelectedServices] = useState([]);
// //   const toggleService = (service) => {
// //     setSelectedServices((prevSelected) =>
// //       prevSelected.includes(service)
// //         ? prevSelected.filter((s) => s !== service)
// //         : [...prevSelected, service]
// //     );
// //   };
// //   // const [fontsLoaded, setFontsLoaded] = useState(false);
// //   // useEffect(() => {
// //   //   async function loadFonts() {
// //   //     await Font.loadAsync({
// //   //       "Proxima-Nova-Bold": require("../assets/fonts/Proxima-Nova-Bold.otf"),
// //   //       "Proxima-Nova-Light": require("../assets/fonts/Proxima-Nova-Light.otf"),
// //   //       "Proxima-Nova-Semibold": require("../assets/fonts/Proxima-Nova-Semibold.otf"),
// //   //       "ProximaNova-Regular": require("../assets/fonts/ProximaNova-Regular.otf"),
// //   //     });
// //   //     setFontsLoaded(true);
// //   //   }

// //   //   loadFonts();
// //   // }, []);

// //   // if (!fontsLoaded) {
// //   //   return <ActivityIndicator size="large" />;
// //   // }
// //   return (
// //     <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
// //       <ScrollView>
// //         <View style={styles.servicesContainter}>
// //           <Text style={styles.title}>Select your services</Text>
// //           <Text style={styles.txt}>lorum Ipsum</Text>
// //           <View style={styles.boxes}>
// //             <ServicesBoxes
// //               imageUri="https://pngimg.com/d/paw_PNG65.png"
// //               text="Veterinary"
// //             />
// //             <ServicesBoxes
// //               imageUri="https://cdn-icons-png.flaticon.com/512/6938/6938252.png"
// //               text="Pharmacy"
// //             />
// //             <ServicesBoxes
// //               imageUri="https://pngimg.com/d/paw_PNG65.png"
// //               text="Grooming"
// //             />
// //             <ServicesBoxes
// //               imageUri="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
// //               text="Radiology"
// //             />
// //             <ServicesBoxes
// //               imageUri="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
// //               text="Veterinary"
// //             />
// //             <ServicesBoxes
// //               imageUri="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
// //               text="Veterinary"
// //             />
// //           </View>
// //           <TouchableOpacity
// //             onPress={() => navigation.navigate("VetDetailsScreen")}
// //             style={styles.continueButton}
// //           >
// //             <Text style={styles.btnText}>Continue</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   servicesContainter: {
// //     flex: 1,
// //     backgroundColor: "#ffffff",
// //     height: "100%",
// //     paddingTop: 10,
// //   },
// //   title: {
// //     fontFamily: "Proxima-Nova-Bold",
// //     fontWeight: 600,
// //     fontSize: 26,
// //     left: 10,
// //     marginLeft: 10,
// //   },
// //   txt: {
// //     width: 300,
// //     fontSize: 14,
// //     fontFamily: "ProximaNova-Regular",
// //     color: "#666666",
// //     left: 10,
// //     marginLeft: 10,
// //   },
// //   boxes: {
// //     flexDirection: "row",
// //     flexWrap: "wrap", // Allows wrapping of elements
// //     justifyContent: "center", // Centers the grid
// //     alignItems: "center",
// //     padding: 10,
// //     gap: 5,
// //   },
// //   continueButton: {
// //     backgroundColor: "#FF5362",
// //     height: 60,
// //     width: 300,
// //     marginTop: 280,
// //     borderRadius: 15,
// //     marginLeft: 30,
// //     marginBottom: 10,
// //   },
// //   btnText: {
// //     color: "#fff",
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     textAlign: "center",
// //     paddingVertical: 15,
// //     paddingHorizontal: 20,
// //     borderRadius: 10,
// //     overflow: "hidden",
// //   },
// // });

// // export default ServicesScreen;

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import ServicesBoxes from "../components/ServicesBoxes"; // Ensure this path is correct
// import { useNavigation } from "@react-navigation/native";

// const ServicesScreen = () => {
//   const navigation = useNavigation();
//   const [selectedServices, setSelectedServices] = useState([]);

//   const toggleService = (service) => {
//     setSelectedServices((prevSelected) =>
//       prevSelected.includes(service)
//         ? prevSelected.filter((s) => s !== service)
//         : [...prevSelected, service]
//     );
//   };
//   const services = [
//     { imageUri: "https://pngimg.com/d/paw_PNG65.png", text: "Veterinary" },
//     { imageUri: "https://cdn-icons-png.flaticon.com/512/6938/6938252.png", text: "Pharmacy" },
//     { imageUri: "https://pngimg.com/d/paw_PNG65.png", text: "Grooming" },
//     { imageUri: "https://cdn-icons-png.flaticon.com/512/5662/5662990.png", text: "Radiology" },
//   ];

//   return (
//     <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
//       <ScrollView>
//         <View style={styles.servicesContainter}>
//           <Text style={styles.title}>Select your services</Text>
//           <Text style={styles.txt}>lorum Ipsum</Text>
//           <View style={styles.boxes}>
//             {[
//               {
//                 imageUri: "https://pngimg.com/d/paw_PNG65.png",
//                 text: "Veterinary",
//               },
//               {
//                 imageUri:
//                   "https://cdn-icons-png.flaticon.com/512/6938/6938252.png",
//                 text: "Pharmacy",
//               },
//               {
//                 imageUri: "https://pngimg.com/d/paw_PNG65.png",
//                 text: "Grooming",
//               },
//               {
//                 imageUri:
//                   "https://cdn-icons-png.flaticon.com/512/5662/5662990.png",
//                 text: "Radiology",
//               },
//             ].map((service) => (
//               <ServicesBoxes
//                 key={service.text}
//                 imageUri={service.imageUri}
//                 text={service.text}
//                 onPress={() => toggleService(service.text)}
//                 selected={selectedServices.includes(service.text)}
//               />
//             ))}
//           </View>
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate("VetDetailsScreen", { selectedServices })
//             }
//             style={styles.continueButton}
//           >
//             <Text style={styles.btnText}>Continue</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   servicesContainter: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     height: "100%",
//     paddingTop: 10,
//   },
//   title: {
//     fontFamily: "Proxima-Nova-Bold",
//     fontWeight: "600",
//     fontSize: 26,
//     left: 10,
//     marginLeft: 10,
//   },
//   txt: {
//     width: 300,
//     fontSize: 14,
//     fontFamily: "ProximaNova-Regular",
//     color: "#666666",
//     left: 10,
//     marginLeft: 10,
//   },
//   boxes: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//     gap: 5,
//   },
//   continueButton: {
//     backgroundColor: "#FF5362",
//     height: 60,
//     width: 300,
//     marginTop: 20,
//     borderRadius: 15,
//     marginLeft: 30,
//     marginBottom: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   btnText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default ServicesScreen;
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ServicesBoxes from "../components/ServicesBoxes";
import { useNavigation } from "@react-navigation/native";
// import ProgressBar from "./ProgressBar";

const ServicesScreen = () => {
  const navigation = useNavigation();
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((s) => s !== service)
        : [...prevSelected, service]
    );
  };

  const services = [
    { imageUri: "https://pngimg.com/d/paw_PNG65.png", text: "Veterinary" },
    {
      imageUri: "https://cdn-icons-png.flaticon.com/512/6938/6938252.png",
      text: "Pharmacy",
    },
    { imageUri: "https://pngimg.com/d/paw_PNG65.png", text: "Grooming" },
    {
      imageUri: "https://cdn-icons-png.flaticon.com/512/5662/5662990.png",
      text: "Radiology",
    },
    {
      imageUri: "https://cdn-icons-png.flaticon.com/512/5662/5662990.png",
      // imageUri: require("../assets/images/DummyImages/image.png"),
      text: "Surgery",
    },
    {
      imageUri: "https://cdn-icons-png.flaticon.com/512/5662/5662990.png",
      text: "Consultation",
    },
  ];

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      {/* <View>
        <ProgressBar />
        {children}
      </View> */}
      <ScrollView>
        <View style={styles.servicesContainer}>
          <Text style={styles.title}>Select your services</Text>
          <Text style={styles.txt}>Lorem Ipsum</Text>
          <View style={styles.boxes}>
            {services.map((service, index) => (
              <ServicesBoxes
                // key={service.text}
                key={index}
                imageUri={service.imageUri}
                text={service.text}
                onPress={() => toggleService(service.text)}
                selected={selectedServices.includes(service.text)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("VetDetailsScreen", { selectedServices })
          }
          style={styles.continueButton}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  servicesContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    // width: 313,
    // marginRight: 300,
    height: "100%",
    paddingTop: 10,
  },
  title: {
    fontFamily: "Proxima-Nova-Bold",
    fontWeight: "600",
    fontSize: 26,
    left: 10,
    marginLeft: 10,
  },
  txt: {
    width: 300,
    fontSize: 14,
    fontFamily: "ProximaNova-Regular",
    color: "#666666",
    left: 10,
    marginLeft: 10,
  },
  boxes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 50,
    rowGap: 10, // Adjusts spacing between rows
    columnGap: 15,
  },
  continueButton: {
    backgroundColor: "#FF5362",
    height: 60,
    width: 300,
    marginTop: 20,
    borderRadius: 15,
    // marginLeft: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ServicesScreen;
