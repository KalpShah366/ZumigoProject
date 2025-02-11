import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import TextInputs from "../components/TextInputs";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";

const AssistantScreen = () => {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [assistantName, setAssistantName] = useState("");
  const [assistantNumber, setAssistantNumber] = useState("");
  const [addAssistant, setAddAssistant] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [assistants, setAssistants] = useState([]);
  const handleAddAssistant = () => {
    setAssistants([...assistants, { name: "", number: "" }]);
  };
  const handleTextChange = (index, field, value) => {
    setAssistants((prevAssistants) =>
      prevAssistants.map((assistant, i) =>
        i === index ? { ...assistant, [field]: value } : assistant
      )
    );
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setIsKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setIsKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <>
      <View className="flex-1 bg-white">
        <View>
          <ProgressBar />
          {/* {children} */}
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <Text className="text-[#7F7F7F] mt-2 ml-5 mb-2">
            Add assistant details
          </Text>
          <View className="flex-1 justify-center items-center">
            <View style={styles.switchContainer}>
              <Text className="text-[16px] font-[Proxima-Nova-Medium] h-[30] mt-[10px]">
                Do you have an assistant?
              </Text>
              <ToggleSwitch
                isOn={isSwitchOn}
                onColor="red"
                offColor="grey"
                size="small"
                onToggle={(isOn) => setIsSwitchOn(isOn)}
              />
            </View>
          </View>
          {/* <Image source={require("../assets/images/DummyImages")}/> */}
          {isSwitchOn && (
            <View className="flex-1 gap-[20px] mt-2 ml-2 mb-[150] ">
              {assistants.map((assistant, index) => (
                <View key={index} className="flex gap-2">
                  <TextInputs
                    placeholder="Assistant Name"
                    value={assistant.name}
                    onChangeText={(text) =>
                      handleTextChange(index, "name", text)
                    }
                  />
                  <TextInputs
                    placeholder="Assistant Number"
                    value={assistant.number}
                    keyboardType="numeric"
                    onChangeText={(text) =>
                      handleTextChange(index, "number", text)
                    }
                  />
                </View>
              ))}

              <TouchableOpacity className="ml-2" onPress={handleAddAssistant}>
                <Text className="font-[Proxima-Nova-Medium] text-[#FF5362] font-[16px] mb-[30]">
                  + Add assistant
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
        {!isKeyboardVisible && (
          <View className="absolute bottom-0 left-0 right-0 bg-white py-4 items-center">
            <TouchableOpacity
              className="bg-[#FF5362] h-[60] w-[300] mt-5 rounded-[20px] mb-5"
              onPress={() => {
                if (isSwitchOn) {
                  if (assistants.length > 0) {
                    navigation.navigate("Assistants", { assistants });
                  } else {
                    alert("Please add at least one assistant!");
                  }
                } else {
                  navigation.navigate("AgreementScreen"); // Navigate even if switch is off
                }
              }}
            >
              <Text className="text-[#fff] text-[18px] font-bold text-center py-[15px] px-[20] rounded-[10px]">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default AssistantScreen;

const styles = StyleSheet.create({
  switchContainer: {
    width: 335,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#FFFCF8",
    borderWidth: 1,
    borderColor: "#FFF4E5",
  },
  switchLabel: {
    fontSize: 16,
  },
});
