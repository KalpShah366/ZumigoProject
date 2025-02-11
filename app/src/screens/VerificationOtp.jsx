import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import Boxes from "../components/Boxes";
import * as Font from "expo-font";
// import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
const VerificationOtp = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        width: 393,
        // marginLeft: 54,
        backgroundColor: "#ffffff",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.mainContainer}>
            <View style={styles.OtpContainer}>
              <Text style={styles.title}>Verification OTP</Text>
              <Text style={styles.txt}>
                Enter the OTP we've sent to +91 9392475600
              </Text>
              <View style={styles.otpBoxes}>
                <Boxes />
                <Boxes />
                <Boxes />
                <Boxes />
              </View>
              <View style={styles.resendOtpBox}>
                <Text style={{ color: "#666666" }}>Resend OTP in </Text>
                <Text style={{ color: "#000000" }}>01:22</Text>
              </View>
              <View style={styles.verifyContainer}>
                <TouchableOpacity
                  style={styles.verifyButton}
                  onPress={() => navigation.navigate("ServicesScreen")}
                >
                  <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    width: 393,
    backgroundColor: "#ffffff",
  },
  OtpContainer: {
    width: 280,
    paddingTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
  },
  otpBoxes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontFamily: "Proxima-Nova-Bold",
    fontWeight: "semibold",
    fontSize: 26,
  },
  txt: {
    width: 300,
    fontSize: 14,
    fontFamily: "ProximaNova-Regular",
    color: "#666666",
  },
  resendOtpBox: {
    flexDirection: "row",
  },
  // verifyContainer: {
  //   flex: 1,
  //   justifyContent: "center", // Centers the button vertically
  //   alignItems: "center", // Centers the button horizontally
  //   backgroundColor: "#ffffff",
  // },
  verifyButton: {
    backgroundColor: "#FF5362",
    height: 60,
    width: 300,
    marginTop: 400,
    borderRadius: 15,
    // marginBottom: 350,
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
export default VerificationOtp;
