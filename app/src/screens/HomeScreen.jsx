import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HomeScreenBoxes from "../components/HomeScreenBoxes";
import CircleDesign from "../components/Circle";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppointmentsChart from "../components/BarComponent";
import CalendarComponent from "../components/CalenderComponent";
import AddvertisementCard from "../components/AddvertisementCard";
import OnGoingAppointmentComponent from "../components/OnGoingAppointmentComponent";
import { useNavigation } from "@react-navigation/native";
// import "../../../global.css";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex justify-center bg-white ">
      <ScrollView>
        <View className="w-[253px] ">
          <Text className="ml-[20px] font-[Proxima-Nova-Semibold] font-bold text-[20px] mt-[15px]">
            Hi Jeevan Kumar,
          </Text>
          <Text className="w-[243] h-[39] font-[Proxima-Nova-Semibold] text-[14px] ml-[20px] text-[#606060]">
            you have 10 appointments this week
          </Text>
        </View>
        <Text className="font-[Proxima-Nova-Semibold] text-[16px] ml-[20px] mb-[3px] font-bold">
          Summary
        </Text>
        <View className="flex flex-row items-center  gap-[10px] mr-[10px] ">
          <HomeScreenBoxes title="Pets served" number="90" color="#FFEAEC" />
          <HomeScreenBoxes
            title="Total Appointments"
            number="132"
            color="#F3EAFF"
          />
          <HomeScreenBoxes title="Pets served" number="122" color="#EBFFEE" />
        </View>

        <Text className="w-[205px] font-[Proxima-Nova-Semibold] font-bold text-[16px] mt-[20px] mx-[20px] mb-[10px]">
          On Going Appointment
        </Text>
        {/* <View className="flex-1 items-center justify-center"> */}
        <TouchableOpacity onPress={() => navigation.navigate("Home Visit")}>
          <OnGoingAppointmentComponent />
        </TouchableOpacity>
        {/* </View> */}

        <Text className="w-[65px] font-[Proxima-Nova-Semibold] font-bold text-[16px] mt-[20px] mx-[20px] mb-[10px] ">
          Earnings
        </Text>
        <View className="flex-1 justify-center items-center">
          <CircleDesign />
        </View>
        <View className="flex-1 justify-center items-center">
          <View className=" flex flex-row justify-around w-[345px] mt-[20px] py-3 bg-[#FFFCF8] border-[0.6px] border-[#FFF4E5] rounded-[15px]">
            <View className=" flex-col justify-around">
              <Text className="w-[126px] text-[12px] text-[#787A82]">
                Average Earning by Vet
              </Text>
              <Text className="w-[149px] text-[16px] font-bold ">
                <FontAwesome name="rupee" size={15} color="black" />
                80,574.00/
                <Text className="text-[12px] text-[#787A82]">Per Month</Text>
              </Text>
            </View>
            <Image
              source={require("../assets/images/DummyImages/Group 94395.png")}
            />
          </View>
        </View>
        <Text className="w-[105px] font-[Proxima-Nova-Semibold] font-bold text-[16px] mt-[20px] mx-[20px] mb-[10px] ">
          Appointments
        </Text>
        <View className="flex-1 justify-center items-center ">
          <AppointmentsChart />
        </View>
        <Text className="w-[500px] font-[Proxima-Nova-Semibold] font-bold text-[16px] mt-[20px] mx-[20px] mb-[20px] ">
          Upcoming Appointments
        </Text>
        <View className="flex-1 justify-center items-center">
          <CalendarComponent />
        </View>
        {/* <AddvertisementCard /> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
