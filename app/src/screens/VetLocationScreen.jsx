import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Slider from "@react-native-community/slider";
import LocationBoxes from "../components/LocationBoxes";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";
const VetLocationScreen = () => {
  const navigation = useNavigation();
  const [range, setRange] = useState(5);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const toggleSelection = (location) => {
    if (selectedLocations.includes(location)) {
      // Remove if already selected
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location)
      );
    } else {
      // Add if not selected
      setSelectedLocations([...selectedLocations, location]);
    }
  };
  const locations = [
    "Nizampet",
    "Miyapur",
    "Kukatpally",
    "Gachibowli",
    "HiTech City",
    "Vadodara",
    "Gotri",
    "Pune",
    "Mumbai",
    "Thane",
    "Nashik",
    "Aurangabad",
    "Satara",
    "Thane",
    "Nashik",
    "Aurangabad",
    "Satara",
    "Thane",
    "Nashik",
    "Aurangabad",
    "Satara",
    "Thane",
    "Nashik",
    "Aurangabad",
    "Satara",
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <ProgressBar />
        {/* {children} */}
      </View>
      <ScrollView>
        <Text style={styles.firstHeading}>
          Choose the locations where you want to offer services
        </Text>
        <Text style={styles.secondHeading}>
          Based on the address provided, we have populated the neighbourhood
          that you may prefer to serve.
        </Text>
        <View className="flex-1 justify-center items-center">
          <View style={styles.rangeContainer}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons name="target" size={30} color="purple" />
              <Text>Radius</Text>
            </View>

            <Slider
              style={styles.slider}
              minimumValue={5} // Minimum value of 5 km
              maximumValue={50} // Maximum value (e.g., 50 km)
              value={5} // Default value: 5 km
              step={1} // Steps in whole kilometers
              onValueChange={(val) => setRange(val)} // Update range on slider change
              minimumTrackTintColor="#FF5362" // Red color for the active track
              maximumTrackTintColor="#000000" // Grey color for the inactive track
              thumbTintColor="#FF5362" // Red thumb color
              renderThumb={() => <View style={styles.squareThumb} />}
            />

            <Text style={styles.text}>{range} km</Text>
          </View>
        </View>
        <Text style={styles.thirdHeading}>
          The areas shown below are within the specified radius.
        </Text>
        <Text style={styles.forthHeading}>
          You can choose multiple areas in :
        </Text>
        <View style={styles.locationContainer}>
          {locations.map((location, index) => (
            <LocationBoxes
              key={index}
              text={location}
              isSelected={selectedLocations.includes(location)} // Check if selected
              onPress={() => toggleSelection(location)} // Toggle selection
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("AddSpecializationScreen")}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstHeading: {
    width: 315,
    height: 38,
    color: "#707070",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  secondHeading: {
    width: 311,
    height: 62,
    color: "#1C222F",
    fontFamily: "Proxima-Nova-Medium",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  thirdHeading: {
    width: 326,
    // height: 16,
    fontSize: 14,
    fontFamily: "ProximaNova-Regular",
    color: "#787A82",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  forthHeading: {
    width: 211,
    height: 20,
    fontSize: 14,
    color: "#7F7F7F",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  rangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFCF8",
    borderColor: "#FFF4E5",
    alignItems: "center",
    width: 325,
    height: 80,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 0.6,
    borderColor: "#FFF4E5",
  },
  slider: {
    width: 190,
    height: 40,
  },
  squareThumb: {
    width: 30, // Width of the square thumb
    height: 30, // Height of the square thumb
    backgroundColor: "#FF5362", // Square thumb color
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF5362",
    fontFamily: "ProximaNova-Regular",
    width: 55,
    height: 18,
  },
  locationContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 100,
  },
  iconBox: {
    flexDirection: "column",
    gap: 5,
    width: 48,
    height: 39,
    marginLeft: 5,
  },
  fixedButtonContainer: {
    // flex: 1,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "white",
    // paddingVertical: 10,
  },
  continueButton: {
    backgroundColor: "#FF5362",
    height: 60,
    width: 300,
    marginTop: 50,
    borderRadius: 15,
    // marginLeft: 30,
    // marginBottom: 10,
    position: "fixed",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});
export default VetLocationScreen;
