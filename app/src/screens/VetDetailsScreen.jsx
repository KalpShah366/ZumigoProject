// import "../global.css";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import TextInputs from "../components/TextInputs";
import * as DocumentPicker from "expo-document-picker";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";
const VetDetailsScreen = () => {
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [vetLicense, setVetLicense] = useState("");
  const [gstin, setGstIn] = useState("");
  const [selectedFiles, setSelectedFiles] = useState({
    photo: null,
    aadhaar: null,
    panId: null,
    vetLicense: null,
    companyLogo: null,
  });
  const navigation = useNavigation();

  const pickFile = async (field) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Only allows images
      });

      if (result.canceled) return;

      setSelectedFiles((prev) => ({ ...prev, [field]: result.assets[0] })); // Store selected file info
    } catch (error) {
      console.error("File selection error:", error);
    }
  };

  // Function to remove the selected image
  const removeImage = (field) => {
    setSelectedFiles((prev) => ({ ...prev, [field]: null }));
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View>
        <ProgressBar />
        {/* {children} */}
      </View>

      <ScrollView>
        <Text
          // className="mt-10 bg-black"
          style={{
            color: "#7F7F7F",
            fontSize: 14,
            marginTop: 5,
            marginLeft: 15,
          }}
        >
          Fill the Vet details
        </Text>
        <View style={styles.formDetails}>
          <View style={styles.nameContainer}>
            <TextInput
              placeholder="First Name*"
              style={styles.inputboxs}
              onChangeText={(text) => setFirstName(text)}
            ></TextInput>
            <TextInput
              placeholder="Last Name*"
              style={styles.inputboxs}
              onChangeText={(text) => setLastName(text)}
            ></TextInput>
          </View>
          <TextInputs
            placeholder="Phone.No*"
            keyboardType="numeric"
            onChangeText={(text) => setPhoneNo(text)}
          />
          <TextInputs placeholder="Email*" />
          <TextInputs
            placeholder="Address"
            numberOfLines={5}
            multiline
            onChangeText={(text) => setEmail(text)}
          />
          <View style={styles.cityContainer}>
            <TextInput
              placeholder="City"
              style={styles.inputboxs}
              onChangeText={(text) => setCity(text)}
            ></TextInput>
            <TextInput
              placeholder="Pincode"
              style={styles.inputboxs}
              onChangeText={(text) => setPincode(text)}
            ></TextInput>
          </View>
          <View
            style={[
              styles.fileboxs,
              selectedFiles.photo && styles.expandedFilebox,
            ]}
          >
            <View style={styles.box}>
              <Text>Upload Photo</Text>
              <TouchableOpacity
                style={styles.uploadBtn}
                onPress={() => pickFile("photo")}
              >
                <Entypo name="upload" size={20} color="#6319C4" />
              </TouchableOpacity>
            </View>
            {selectedFiles.photo && (
              <View style={styles.previewContainer}>
                <Image
                  source={{ uri: selectedFiles.photo.uri }}
                  style={styles.previewImage}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => removeImage("photo")}
                >
                  <Entypo name="cross" size={24} color="#FF5362" />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View
            style={[
              styles.fileboxs,
              selectedFiles.aadhaar && styles.expandedFilebox,
            ]}
          >
            <View style={styles.box}>
              <Text>Upload Aadhaar</Text>
              <TouchableOpacity
                style={styles.uploadBtn}
                onPress={() => pickFile("aadhaar")}
              >
                <Entypo name="upload" size={20} color="#6319C4" />
              </TouchableOpacity>
            </View>
            {selectedFiles.aadhaar && (
              <View style={styles.previewContainer}>
                <Image
                  source={{ uri: selectedFiles.aadhaar.uri }}
                  style={styles.previewImage}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => removeImage("aadhaar")}
                >
                  <Entypo name="cross" size={24} color="#FF5362" />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View
            style={[
              styles.fileboxs,
              selectedFiles.panId && styles.expandedFilebox,
            ]}
          >
            <View style={styles.box}>
              <Text>Upload PAN ID</Text>
              <TouchableOpacity
                style={styles.uploadBtn}
                onPress={() => pickFile("panId")}
              >
                <Entypo name="upload" size={20} color="#6319C4" />
              </TouchableOpacity>
            </View>
            {selectedFiles.panId && (
              <View style={styles.previewContainer}>
                <Image
                  source={{ uri: selectedFiles.panId.uri }}
                  style={styles.previewImage}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => removeImage("panId")}
                >
                  <Entypo name="cross" size={24} color="#FF5362" />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View
            style={[
              styles.fileboxs,
              selectedFiles.vetLicense && styles.expandedFilebox,
            ]}
          >
            <View style={styles.box}>
              <Text>Upload Vet license</Text>
              <TouchableOpacity
                style={styles.uploadBtn}
                onPress={() => pickFile("vetLicense")}
              >
                <Entypo name="upload" size={20} color="#6319C4" />
              </TouchableOpacity>
            </View>
            {selectedFiles.vetLicense && (
              <View style={styles.previewContainer}>
                <Image
                  source={{ uri: selectedFiles.vetLicense.uri }}
                  style={styles.previewImage}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => removeImage("vetLicense")}
                >
                  <Entypo name="cross" size={24} color="#FF5362" />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            <Text style={styles.txt}>Vet License</Text>
            <TextInputs
              placeholder="Enter vet license no*"
              onChangeText={(text) => setVetLicense(text)}
            ></TextInputs>
          </View>
          <View
            style={[
              styles.fileboxs,
              selectedFiles.companyLogo && styles.expandedFilebox,
            ]}
          >
            <View style={styles.box}>
              <Text>Upload Company Logo</Text>
              <TouchableOpacity onPress={() => pickFile("companyLogo")}>
                <Entypo name="upload" size={20} color="#6319C4" />
              </TouchableOpacity>
            </View>
            {selectedFiles.companyLogo && (
              <View style={styles.previewContainer}>
                <Image
                  source={{ uri: selectedFiles.companyLogo.uri }}
                  style={styles.previewImage}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => removeImage("companyLogo")}
                >
                  <Entypo name="cross" size={24} color="#FF5362" />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            <Text style={styles.txt}>GSTIN</Text>
            <TextInputs
              placeholder="GSTIN(Optional)"
              onChangeText={(text) => setGstIn(text)}
            ></TextInputs>
          </View>
        </View>
      </ScrollView>
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("VetLocationScreen")}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formDetails: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
    marginBottom: 180,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputboxs: {
    width: 155,
    height: 58,
    backgroundColor: "#FFFCF8",
    borderWidth: 0.5,
    borderColor: "#FCEFDD",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 15,
  },
  fileboxs: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    minHeight: 58, // Allows height expansion
    backgroundColor: "#FFFCF8",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#FCEFDD",
  },
  expandedFilebox: {
    minHeight: 250, // Expands to fit the image
    flexDirection: "column", // Aligns items in a column when expanded
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  uploadBtn: {
    marginRight: 5,
  },
  txt: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Proxima-Nova-Semibold",
    marginLeft: 15,
    marginBottom: 10,
  },
  fixedButtonContainer: {
    // flex: 1,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
  },
  continueButton: {
    backgroundColor: "#FF5362",
    height: 60,
    width: 300,
    marginTop: 50,
    borderRadius: 15,
    // marginLeft: 30,
    marginBottom: 10,
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
  previewContainer: {
    marginTop: 10,
    alignItems: "center",
    position: "relative",
  },
  previewImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  deleteBtn: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 10,
    // marginLeft: 10,
    width: "100%",
    alignItems: "center",
  },
});
export default VetDetailsScreen;
