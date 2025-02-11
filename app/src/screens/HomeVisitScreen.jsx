import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Modal,
  Animated,
  PanResponder,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useMemo, useState } from "react";
import HomeVisitBoxes from "../components/HomeVisitBoxes";
import PetDetailsComponent from "../components/PetDetailsComponent";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
const HomeVisitScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOtpModalVisible, setIsOtpModalVisible] = useState(false);
  // BottomSheet reference
  const translateY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 10,
      onPanResponderMove: Animated.event([null, { dy: translateY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 150) {
          closeModal();
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const openModal = () => {
    setIsModalVisible(true);
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: 500, // Push the modal off the screen
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsModalVisible(false));
  };
  const openOtpModal = () => {
    setIsOtpModalVisible(true);
  };

  const closeOtpModal = () => {
    setIsOtpModalVisible(false);
  };
  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="flex-1 items-center justify-center bg-white">
          <View className="rounded-[15px] bg-[#FFF2E1] w-[90%] max-w-[325px] mt-[15px]">
            <Text className="mt-[15px] ml-[15px] font-bold font-[Proxima-Nova-Semibold] text-[16px] text-[#1C222F]">
              Scheduled
            </Text>
            <Text className="mt-[15px] mb-[16px] ml-[15px] mr-[15px] font-[ProximaNova-Regular] text-[14px] text-[#7F7E7C]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in
              rerum quaerat! Amet, iusto odio dolor deleniti neque
              necessitatibus quos vel expedita perferendis exercitationem
              numquam. Consequuntur
            </Text>
          </View>
        </View>
        <View className=" ml-[20px] rounded-[15px] mt-[20px] w-[325px] bg-[#FFFCF8] border-[0.75px] border-[#FFF4E5]">
          <View className="flex flex-row items-center ml-[15px] mt-[15.3px]  gap-[5px]">
            <Text className="text-[14px] text-[#7F7F7F]">Appointment ID:</Text>
            <Text className="text-[16px] text-[#000000] font-semibold">
              23456789
            </Text>
          </View>
          <View className="flex flex-row items-center ml-[15px] mt-[15.3px] mb-[17px] gap-[5px]">
            <Image
              source={require("../assets/images/timedate.png")}
              className="w-[18.18] h-[16.05]"
            />
            <Text className="font-[Proxima-Nova-Medium] h-[20px] text-[16px] text-[#1C222F]">
              24, April, 2024, 09:00 AM - 10:00 AM
            </Text>
          </View>
        </View>
        <View className="w-[290px] bg-white flex flex-row items-center justify-center gap-[10px] ml-[34px] mt-[20.3px] ">
          <TouchableOpacity>
            <HomeVisitBoxes
              title="Call"
              imageUri={require("../assets/images/contact.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <HomeVisitBoxes
              title="Chat"
              imageUri={require("../assets/images/DummyImages/chat.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <HomeVisitBoxes
              title="Directions"
              imageUri={require("../assets/images/DummyImages/Direction.png")}
            />
          </TouchableOpacity>
        </View>
        <Text className=" ml-[20px] mb-[12px] mt-[20px] text-[16px] text-[#000000] font-semibold ">
          Pet Details
        </Text>
        <PetDetailsComponent />
        <TouchableOpacity>
          <View className=" flex flex-row items-center justify-between w-[325px] h-[58px] bg-[#FFFCF8] border-[0.75px] border-[#FCEFDD] rounded-[15px] ml-[20px] mt-[15px]">
            <View className="flex flex-row justify-center items-center gap-[12.7px] ml-[17px] mb-[21px] mt-[19px]">
              <Image
                source={require("../assets/images/services.png")}
                className="w-[16.29px] h-[18.01px]"
              />
              <Text className=" h-[20px] font-[Proxima-Nova-Medium] text-[16px]">
                Medical history
              </Text>
            </View>
            <View>
              <Image
                source={require("../assets/images/secondaryBack.png")}
                className="mr-[24.8px] "
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
          <View className=" flex flex-row items-center justify-between w-[325px] h-[58px] bg-[#FFFCF8] border-[0.75px] border-[#FCEFDD] rounded-[15px] ml-[20px] mt-[15px]">
            <View className="flex flex-row justify-center items-center gap-[12.7px] ml-[17px] mb-[21px] mt-[19px]">
              <Image
                source={require("../assets/images/services.png")}
                className="w-[16.29px] h-[18.01px]"
              />
              <Text className="w-[107px] h-[18px] font-[Proxima-Nova-Medium] text-[16px]">
                Service details
              </Text>
            </View>
            <View>
              <Image
                source={require("../assets/images/secondaryBack.png")}
                className="mr-[24.8px] "
              />
            </View>
          </View>
        </TouchableOpacity>
        {isModalVisible && (
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
        )}

        <Modal
          visible={isModalVisible}
          transparent
          animationType="fade"
          onRequestClose={closeModal}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Animated.View
              style={{
                backgroundColor: "#FFFCF8",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
                transform: [{ translateY }],
              }}
              {...panResponder.panHandlers}
            >
              <View className="flex h-[300px]">
                <Text className="text-lg font-bold">Service details</Text>
                <View className="bg-[#FFFCF8] border border-[#FCEFDD] rounded-lg p-4 mt-4">
                  <Text className="text-base font-medium">Vet visit</Text>
                  <Text className="text-base text-gray-600">₹850.00</Text>
                </View>
                <TouchableOpacity>
                  <Text className="text-red-500 mt-4">
                    + Add Additional Services
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Modal>
        <Text className="mt-[20px] mb-[14px] h-[18px] font-[Proxima-Nova-Semibold] text-[16px] text-[#000000] ml-[20px]">
          Payment summary
        </Text>
        <View className="w-[325px] bg-[#FFFCF8] border-[0.75px] border-[#FCEFDD] rounded-[15px] ml-[20px]">
          <View className="mt-[15px] ml-[15px] flex flex-row  justify-between">
            <Text className="text-[16px] font-[Proxima-Nova-Semibold] text-[#000000]">
              Service Charges
            </Text>
            <View className=" flex-row items-center">
              <FontAwesome name="rupee" size={14} color="#7F7F7F" />
              <Text className="text-[14px] font-[Proxima-Nova-Medium] text-[#7F7F7F] mb-[6px] mr-[15px]">
                850
              </Text>
            </View>
          </View>
          <View className="mt-[15px] ml-[15px] flex flex-row  justify-between">
            <Text className="text-[16px] font-[Proxima-Nova-Semibold] text-[#7F7F7F]">
              GST and other charges
            </Text>
            <View className="flex flex-row items-center ">
              <FontAwesome name="rupee" size={14} color="#7F7F7F" />
              <Text className="text-[14px] font-[Proxima-Nova-Medium] text-[#7F7F7F] mb-[6px] mr-[15px]">
                60
              </Text>
            </View>
          </View>
          <View className="mt-[15px] ml-[15px] flex flex-row  justify-between mb-[16px]">
            <Text className="text-[16px] font-[Proxima-Nova-Semibold] text-[#7F7F7F]">
              GST and other charges
            </Text>
            <View className="flex flex-row items-center">
              <FontAwesome name="rupee" size={14} color="#7F7F7F" />
              <Text className="text-[14px] mb-[6px] font-[Proxima-Nova-Medium] text-[#7F7F7F] mr-[15px]">
                199.00
              </Text>
            </View>
          </View>
          <Text className="border-t-[0.75px] border-[#FCEFDD] mr-[14.5px] ml-[14.5px] "></Text>
          <View className="flex flex-row  justify-between ml-[20px]">
            <Text className="text-[16px] font-[Proxima-Nova-Medium] text-[#000000]">
              Estimate
            </Text>
            <View className="flex flex-row mb-[16px] items-center">
              <FontAwesome name="rupee" size={14} color="#000000" />
              <Text className="text-[14px] font-[Proxima-Nova-Semibold] text-[#000000] mr-[15px]">
                1,109.00
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-[16px] text-[#000000] font-semibold mt-[20px] ml-[15px] mb-[12px]">
          Address
        </Text>
        <View className="w-[325px] bg-[#FFFCF8] border-[0.75px] border-[#FCEFDD] rounded-[15px] ml-[20px] mb-[50px]">
          <View className="flex flex-row gap-[5.9px] mt-[15px] ml-[14.9px] mb-[7px]">
            <Image
              source={require("../assets/images/address.png")}
              className="w-[13.21px] h-[16px]"
            />
            <Text className="font-[Proxima-Nova-Medium] font-medium h-[20px] text-[14px] text-[#000000]">
              Banjara Hills
            </Text>
          </View>
          <Text className="font-[ProximaNova-Regular] text-[12px] text-[#7F7F7F] ml-[35px] mb-[16px] w-[226px] h-[30px]">
            Park View Estate, Road No. 2, Banjara Hills, Hyderabad, Telangana
            500034, India
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={openOtpModal}
        // onPress={() => navigation.navigate("ServicesPricesScreen")}
      >
        <Text style={styles.btnText}>Start Consultation</Text>
      </TouchableOpacity>
      <Modal
        visible={isOtpModalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeOtpModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter the OTP</Text>
            <Text style={styles.modalSubtitle}>
              Please enter the OTP received from the pet parent
            </Text>
            <View style={styles.otpInputContainer}>
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <TextInput
                    key={index}
                    style={styles.otpInput}
                    keyboardType="number-pad"
                    maxLength={1}
                  />
                ))}
            </View>
            <TouchableOpacity
              style={styles.verifyButton}
              onPress={closeOtpModal}
            >
              <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: "#FF5362",
    height: 60,
    width: 300,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  otpInput: {
    width: 48,
    height: 58,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#FCEFDD",
    borderRadius: 10,
    backgroundColor: "#FFFCF8",
    textAlign: "center",
    fontSize: 18,
    color: "#333",
  },
  verifyButton: {
    backgroundColor: "#FF5362",
    height: 60,
    width: 300,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: 30,
    marginBottom: 20,
  },
  verifyButtonText: {
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
export default HomeVisitScreen;
