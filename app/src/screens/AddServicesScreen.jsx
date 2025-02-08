import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
// import LocationBoxes from "@/components/LocationBoxes";
import LocationBoxes from "../components/LocationBoxes";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";
const AddServicesScreen = () => {
  const navigation = useNavigation();
  const [selectedServices, setSelectedServices] = useState([]);
  const toggleSelection = (location) => {
    if (selectedServices.includes(location)) {
      // Remove if already selected
      setSelectedServices(selectedServices.filter((item) => item !== location));
    } else {
      // Add if not selected
      setSelectedServices([...selectedServices, location]);
    }
  };
  const expertizeData = [
    "Veterinary Consultation",
    "Veterinary Check-up",
    "Veterinary Treatment",
    "Veterinary Microchip",
    "Veterinary Vaccination",
    // "Veterinary Immunization",
    // "portable radiology equipment",
    // "Veterinary Dental Treatment",
    // "Veterinary Orthodontics",
    // "Veterinary Preventive Care",
    // "Veterinary Gastroenterology",
    // "Veterinary Psychiatry",
    // "Veterinary Oncology",
    // "Veterinary Pulmonologist",
    // "Veterinary Rheumatologist",
    // "Veterinary Nephrologist",
    // "Veterinary Ophthalmologist",
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <ProgressBar />
        {/* {children} */}
      </View>
      <ScrollView>
        <Text style={styles.firstHeading}>Add Services</Text>
        <Text style={styles.secondHeading}>Add your Services</Text>
        <Text style={styles.thirdHeading}>
          You can choose multiple Serviceses
        </Text>
        <View style={styles.addServicesContainer}>
          {expertizeData.map((location, index) => (
            <LocationBoxes
              key={index}
              text={location}
              isSelected={selectedServices.includes(location)} // Check if selected
              onPress={() => toggleSelection(location)} // Toggle selection
            />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("WeekScheduleScreen")}
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
  addServicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
    marginLeft: 2,
    marginBottom: 50,
    rowGap: 15, // Adjusts spacing between rows
    columnGap: 15,
  },
  continueButton: {
    backgroundColor: "#FF5362",
    height: 60,
    width: 300,
    marginTop: 10,
    borderRadius: 15,
    marginLeft: 30,
    position: "fixed",
    marginBottom: 20,
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
export default AddServicesScreen;
