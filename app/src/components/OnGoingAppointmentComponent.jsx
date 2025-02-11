import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import AntDesign from "@expo/vector-icons/AntDesign";

const OnGoingAppointmentComponent = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className=" w-[345px]  bg-[#FFFCF8] border-[0.75px] border-[#FFF4E5] rounded-[15px] py-8">
        <View className="flex-row ml-[15px] justify-between mb-[10px]">
          <Text className="font-[Proxima-Nova-Semibold] text-[14px]">
            Booked Services - Home Visit
          </Text>
          <AntDesign name="right" size={24} color="#6319C4" />
        </View>
        <View className="flex-row item-center gap-[5px] ml-[15px] mb-[10px]">
          <Text className="mt-[3px]">
            <FontAwesome6 name="calendar-days" size={14} color="#6319C4" />
          </Text>
          <Text className="text-[15px] font-[ProximaNova-Regular] text-[#000] ">
            April 24, 2024
          </Text>
        </View>
        <View className="flex-row items-center gap-[5px] ml-[15px] mb-[10px]">
          <Text className="mt-[3px]">
            <MaterialIcons name="access-alarms" size={14} color="#6319C4" />
          </Text>
          <Text className="text-[14px] font-[ProximaNova-Regular] text-[#000]">
            08:00 AM - 09:00 AM
          </Text>
        </View>

        <View className="flex flex-row items-center rounded-[10px] ml-[15px] mr-[25px] w-[305] bg-[#FF5362] border-[0.75px] border-[#FBA537] px-3 py-3 mt-3">
          <Image
            source={require("../assets/images/DummyImages/Mask Group 116.png")}
          />
          <View className="flex flex-col justify-around">
            <View className="flex flex-row items-center ml-[10px] gap-3">
              <Text className="text-[20px] text-[#FFFFFF] font-bold">MAX</Text>
              <Text className="font-[ProximaNova-Regular] text-[12px] text-[#FFFFFF]">
                Australian Shepherd
              </Text>
            </View>
            <View className=" flex flex-row ml-[10px] gap-3">
              <Text className="font-[ProximaNova-Regular] text-[14px] text-[#FFFFFF]">
                Male |
              </Text>
              <Text className="font-[ProximaNova-Regular] text-[14px] text-[#FFFFFF]">
                Age 3 yrs |
              </Text>
              <Text className="font-[ProximaNova-Regular] text-[14px] text-[#FFFFFF]">
                30 Kgs
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnGoingAppointmentComponent;

const styles = StyleSheet.create({});
