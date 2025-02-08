import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
// import LocationBoxes from "../component/LocationBoxes";
import LocationBoxes from "../components/LocationBoxes";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";
const AddSpecializationScreen = () => {
  const navigation = useNavigation();
  const [selectedExpertize, setSelectedExpertize] = useState([]);
  const toggleSelection = (location) => {
    if (selectedExpertize.includes(location)) {
      // Remove if already selected
      setSelectedExpertize(
        selectedExpertize.filter((item) => item !== location)
      );
    } else {
      // Add if not selected
      setSelectedExpertize([...selectedExpertize, location]);
    }
  };
  const expertizeData = [
    "Internal Medicine",

    "Veterinarian",
    "Dermatologist",
    "Gynecologist",
    // "Pediatrician",
    // "Cardiologist",
    // "Neurologist",
    // "Endocrinologist",
    // "Urologist",
    // "Obstetrician",
    // "Gastroenterologist",
    // "Psychiatrist",
    // "Oncologist",
    // "Pulmonologist",
    // "Rheumatologist",
    // "Nephrologist",
    // "Ophthalmologist",
    // "Allergist",
    // "Immunologist",
    // "Dermatologist",
    // "Emergency Medicine",
    // "Psychiatrist",
    // "Radiologist",
    // "Pathologist",
    // "Pharmacist",
    // "Pharmacy Technician",
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <ProgressBar />
        {/* {children} */}
      </View>
      <ScrollView>
        <Text style={styles.firstHeading}>Add Specialization</Text>
        <Text style={styles.secondHeading}>What's your Expertize</Text>
        <Text style={styles.thirdHeading}>
          You can choose multiple Specialization
        </Text>

        <View style={styles.expertizeContainer}>
          {expertizeData.map((location, index) => (
            <LocationBoxes
              key={index}
              text={location}
              isSelected={selectedExpertize.includes(location)} // Check if selected
              onPress={() => toggleSelection(location)} // Toggle selection
            />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("AddServicesScreen")}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  firstHeading: {
    fontSize: 14,
    color: "#7F7F7F",
    marginTop: 10,
    marginLeft: 15,
  },
  secondHeading: {
    fontSize: 26,
    fontFamily: "Proxima-Nova-Semibold",
    color: "#1C222F",
    marginTop: 10,
    marginLeft: 15,
  },
  thirdHeading: {
    fontsize: 14,
    fontFamily: "ProximaNova-Regular",
    color: "#787A82",
    marginTop: 10,
    marginLeft: 15,
  },
  expertizeContainer: {
    // width: 363,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
    rowGap: 10, // Adjusts spacing between rows
    columnGap: 15,
  },
  continueButton: {
    backgroundColor: "#FF5362",
    height: 60,
    width: 300,
    marginTop: 50,
    borderRadius: 15,
    marginLeft: 30,
    marginBottom: 10,
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
export default AddSpecializationScreen;
