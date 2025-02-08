import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import TextInputs from "../components/TextInputs";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";

const BankDetailsScreen = () => {
  const navigation = useNavigation();
  const [accountHolder, setAccountHolder] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [iifcCode, setIifcCode] = useState("");

  return (
    <View className="flex-1 bg-white">
      <View>
        <ProgressBar />
        {/* {children} */}
      </View>
      <ScrollView>
        <Text className="text-[#7F7F7F] mt-2 ml-5 mb-2">Add bank details</Text>
        <View className="flex-1 bg-white gap-3 mt-5">
          <TextInputs placeholder="Name of account holder" />
          <TextInputs placeholder="Bank Name" />
          <TextInputs placeholder="Account no" />
          <TextInputs placeholder="IIFC Code " />
        </View>
      </ScrollView>
      <View className="flex justify-center items-center fixed bg-white">
        <TouchableOpacity
          className="bg-[#FF5362] h-[60] w-[300] mt-5 rounded-[20px] mb-5"
          onPress={() => navigation.navigate("AddAssistantScreen")}
        >
          <Text className="text-[#fff] text-[18px] font-bold text-center py-[15px] px-[20] rounded-[10px] ">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BankDetailsScreen;

const styles = StyleSheet.create({});
