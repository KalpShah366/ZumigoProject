import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useCallback, useMemo, useState, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import WeekDaysComponent from "../components/WeekDaysComponent";
import ToggleSwitch from "toggle-switch-react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";

const WeekScheduleScreen = () => {
  const navigation = useNavigation();
  const [selectedDays, setSelectedDays] = useState([]);
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isSelectConsultentVisible, setIsSelectConsultentVisible] =
    useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an Option");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleSelection = (option) => {
    if (selectedDay && selectedIndex !== null) {
      setSchedules((prevSchedules) => {
        const updatedSchedules = { ...prevSchedules };
        updatedSchedules[selectedDay][selectedIndex].type = option;
        return updatedSchedules;
      });
    }
    setModalVisible(false);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleConfirm = (time) => {
    console.warn("A time has been picked: ", time);
    setSelectedTime(time); // Store the selected time
    hideTimePicker();
  };
  const bottomSheetRef = useRef(null);
  const fieldBottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["75%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
    bottomSheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
    setIsBottomSheetVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [schedules, setSchedules] = useState({
    Mon: [
      { start: "9:00 AM", end: "12:00 PM", type: "Home Visit" },
      { start: "1:00 AM", end: "4:00 PM", type: "Tele Consult" },
    ],
    Tue: [{ start: "5:00 AM", end: "8:00 PM", type: "Home Visit" }],
    Wed: [{ start: "5:00 AM", end: "8:00 PM", type: "Home Visit" }],
    Thu: [{ start: "5:00 AM", end: "8:00 PM", type: "Home Visit" }],
    Fri: [{ start: "5:00 AM", end: "8:00 PM", type: "Home Visit" }],
    Sat: [{ start: "5:00 AM", end: "8:00 PM", type: "Home Visit" }],
    Sun: [{ start: "5:00 AM", end: "8:00 PM", type: "Home Visit" }],
  });

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };
  console.log(selectedOption);

  return (
    // {/* <View className="flex-1 bg-white"> */}
    // <View className="flex-1 bg-white">
    <View style={styles.container}>
      <View>
        <ProgressBar />
        {/* {children} */}
      </View>
      <ScrollView>
        <Text style={styles.firstHeading}>Schedule your work week</Text>
        <Text style={styles.secondHeading}>Schedule your work for a week?</Text>
        <Text style={styles.thirdHeading}>
          Please set your start and end dates when you are available to work
        </Text>

        <WeekDaysComponent selectedDays={selectedDays} toggleDay={toggleDay} />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Use same hours for all days</Text>
          <ToggleSwitch
            isOn={isSwitchOn}
            onColor="red"
            offColor="grey"
            size="small"
            onToggle={(isOn) => setIsSwitchOn(isOn)}
          />
        </View>
        {isSwitchOn && (
          <>
            <Text style={styles.hoursLabel}>Hours</Text>
            <View style={styles.hoursContainer}>
              <View style={styles.scheduleItem}>
                <TouchableOpacity onPress={showTimePicker}>
                  <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideTimePicker}
                  />
                  <Text style={styles.time}>9:00</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimePicker}>
                  <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideTimePicker}
                  />
                  <Text style={styles.time}>12:00</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.time}>Home Visit</Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-2">
                  <AntDesign name="delete" size={20} color="red" />
                </TouchableOpacity>
              </View>
              <View style={styles.scheduleItem}>
                <TouchableOpacity onPress={showTimePicker}>
                  <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideTimePicker}
                  />
                  <Text style={styles.time}>9:00</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimePicker}>
                  <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideTimePicker}
                  />
                  <Text style={styles.time}>12:00</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.time}>Home Visit</Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-2">
                  <AntDesign name="delete" size={20} color="red" />
                </TouchableOpacity>
              </View>
              <View style={styles.scheduleItem}>
                <TouchableOpacity onPress={showTimePicker}>
                  <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideTimePicker}
                  />
                  <Text style={styles.time}>9:00</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimePicker}>
                  <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideTimePicker}
                  />
                  <Text style={styles.time}>12:00</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.time}>Home Visit</Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-2">
                  <AntDesign name="delete" size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}

        <View style={styles.hoursContainer}>
          {selectedDays.map((day, index) => (
            <View key={index}>
              <Text style={styles.dayLabel}>{day}</Text>
              {/* Schedule Box */}
              <View style={styles.scheduleBox}>
                {schedules[day]?.map((schedule, index) => (
                  <>
                    <View key={index} style={styles.scheduleItem}>
                      <TouchableOpacity onPress={showTimePicker}>
                        <DateTimePickerModal
                          isVisible={isTimePickerVisible}
                          mode="time"
                          onConfirm={handleConfirm}
                          onCancel={hideTimePicker}
                        />
                        <Text style={styles.time}>{schedule.start}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={showTimePicker}>
                        <DateTimePickerModal
                          isVisible={isTimePickerVisible}
                          mode="time"
                          onConfirm={handleConfirm}
                          onCancel={hideTimePicker}
                        />
                        <Text style={styles.time}>{schedule.end}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.time}>{schedule?.type}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity className="mt-2">
                        <AntDesign name="delete" size={20} color="red" />
                      </TouchableOpacity>
                    </View>
                  </>
                ))}
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/secondaryAdd.png")}
                    className="w-[14px] h-[14px] ml-[288] mt-[5] "
                  />
                </TouchableOpacity>
              </View>

              {/* Gap with white background */}
              {index !== selectedDays.length - 1 && (
                <View style={styles.gapView} />
              )}
            </View>
          ))}
        </View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          style={styles.modal}
          backdropOpacity={0.5}
        >
          <View style={styles.modalContent}>
            <Text style={styles.title}>Select</Text>

            {/* Tele Consult Option */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === "Tele Consult" && styles.selectedOption,
              ]}
              onPress={() => handleSelection("Tele Consult")}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === "Tele Consult" && { color: "red" },
                ]}
              >
                Tele Consult
              </Text>
            </TouchableOpacity>

            {/* Home Visit Option */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === "Home Visit" && styles.selectedOption,
              ]}
              onPress={() => handleSelection("Home Visit")}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === "Home Visit" && { color: "red" },
                ]}
              >
                Home Visit
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={openBottomSheet}>
            <Text style={styles.link}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("ServicesPricesScreen")}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      {isBottomSheetVisible && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
      )}
      {isBottomSheetVisible && ( // Conditionally render the BottomSheet
        // <View style={styles.bottomSheetContainer}>
        <BottomSheet
          ref={bottomSheetRef} // Attach the ref to BottomSheet
          snapPoints={snapPoints}
          onChange={handleSheetChanges} // Handle sheet changes
        >
          <BottomSheetView>
            <View className="mt-[46px] mb-[32px]">
              {/* image will go here  */}
              <View className="h-[67px] w-[158px]  bg-[#F5F3F0] mx-auto rounded-lg"></View>
            </View>
            <Text className="w-[336] h-[125] color-[#1C222F] text-center pl-5 text-[20px] font-[Proxima-Nova-Medium]">
              Your profile will not be activated for business without defining
              your Zumigo schedule. Please complete your schedule setup.
            </Text>
            <TouchableOpacity style={styles.okBox} onPress={closeBottomSheet}>
              <Text style={styles.btnText}>Ok</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
        // </View>
      )}
    </View>
    // </View>
    // {/* </View> */}
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    backgroundColor: "#fff",
  },
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
    fontSize: 14,
    fontFamily: "Proxima-Nova-Regular",
    color: "#787A82",
    marginTop: 10,
    marginLeft: 15,
  },
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
  hoursLabel: {
    fontSize: 16,
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 10,
  },
  hoursContainer: {
    flex: 1,
    width: 325,
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#FFFCF8",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    gap: 10,
    // padding: 10,
  },
  time: {
    width: 85,
    height: 38,
    fontSize: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 0.6,
    borderColor: "#FFF4E5",
    // marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    fontSize: 14,
    color: "#1C222F",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 5,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  bottomSheetContainer: {
    flex: 1,
    // justifyContent: "flex-end",
    marginTop: 20,
  },
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
  okBox: {
    backgroundColor: "#FF5362",
    height: 60,
    width: 300,
    // marginTop: 150,
    borderRadius: 20,
    marginLeft: 30,
    marginBottom: 80,
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
  scheduleBox: { padding: 10, marginBottom: 10 },
  scheduleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderColor: "#F5F3F0",
  },
  gapView: {
    height: 30, // Adjust gap height as needed
    backgroundColor: "#FFFFFF", // White gap background
  },
  dayLabel: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  option: {
    width: "100%",
    padding: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: "#F9F5F1",
    // alignItems: "center",
  },
  // selectedOption: {
  //   backgroundColor: "#f0f0f0",
  // },
  optionText: {
    fontSize: 16,
    textAlign: "left",
    color: "#333",
  },
});

export default WeekScheduleScreen;
