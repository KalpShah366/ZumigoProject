import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import TextInputs from "../components/TextInputs";
import { useNavigation } from "@react-navigation/native";
const Assistants = ({ route }) => {
  const navigation = useNavigation();
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [assistantToDelete, setAssistantToDelete] = useState(null);
  const { assistants } = route.params || { assistants: [] }; // Ensure there's always an array
  const [assistantList, setAssistantList] = useState(assistants); // Store assistants in state

  const handleTextChange = (index, field, value) => {
    setAssistantList((prevAssistants) =>
      prevAssistants.map((assistant, i) =>
        i === index ? { ...assistant, [field]: value } : assistant
      )
    );
  };
  const handleDelete = () => {
    if (assistantToDelete !== null) {
      setAssistantList((prevAssistants) =>
        prevAssistants.filter((_, index) => index !== assistantToDelete)
      );
    }
    setIsDeleteModalVisible(false); // Close the modal after deleting
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        {assistantList.length > 0 ? (
          assistantList.map((assistant, index) => (
            <React.Fragment key={index}>
              <Text className="font-[Proxima-Nova-Semibold] font-semibold text-[16px] ml-[24px] mt-[20px]">
                Assistant {index + 1}
              </Text>
              <View className="flex flex-row justify-between items-center w-[315px] h-[75] bg-[#FFFCF8] border-[0.75px] border-[#FFF4E5] ml-[24px] mt-[10px] rounded-[15px] mr-[24px] ">
                <View className="flex flex-col gap-[8px]">
                  <Text className="font-[Proxima-Nova-Semibold] text-[16px] ml-[15.5px]">
                    {assistant.name}
                  </Text>
                  <Text className="font-[ProximaNova-Regular] text-[14px] text-[#7F7F7F] ml-[15.5px]">
                    +91{assistant.number}
                  </Text>
                </View>
                <View className="flex flex-row gap-[8px] mr-[8px]">
                  <TouchableOpacity className="w-[46px] h-[26px] text-[#FFFAF3] border-[#FF5362] border-[0.75px] rounded-[5px] ">
                    <Text className="text-center mt-[2px] font-[Proxima-Nova-Medium] text-[12px] text-[#FF5362]">
                      Edit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="w-[46px] h-[26px] text-[#FFFAF3] border-[#FF5362] border-[0.75px] rounded-[5px] "
                    onPress={() => {
                      setAssistantToDelete(index); // Set the assistant to delete
                      setIsDeleteModalVisible(true); // Show the modal
                    }}
                  >
                    <Text className="text-center mt-[2px] font-[Proxima-Nova-Medium] text-[12px] text-[#FF5362]">
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </React.Fragment>
          ))
        ) : (
          <View>
            <Text>No assistant added</Text>
          </View>
        )}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDeleteModalVisible}
        onRequestClose={() => setIsDeleteModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View className="w-[150px] h-[50px] bg-[#ccc] rounded-[10px] ml-[90px]"></View>
            <Text className="font-[Proxima-Nova-Semibold] text-[26px] text-center mt-[20px]">
              Are you sure you want to delete?
            </Text>
            <View className="flex flex-row justify-between items-center mt-[20px]">
              <TouchableOpacity
                className="w-[125px]  bg-[#FF5362] rounded-[15px]"
                onPress={() => setIsDeleteModalVisible(false)}
              >
                <Text className="text-center font-[Proxima-Nova-Semibold] text-[20px] text-[#ffffff] mt-[2px] py-3 font-bold">
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="w-[125px]  bg-[#FF5362] rounded-[15px]"
                onPress={handleDelete}
              >
                <Text className="text-center font-[Proxima-Nova-Semibold] text-[20px] text-[#ffffff] mt-[2px] py-3 font-bold">
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("AggrementScreen")}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Assistants;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay background
  },
  modalContent: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {
    backgroundColor: "#FF5362",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 15,
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
