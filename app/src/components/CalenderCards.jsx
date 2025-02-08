import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";

const CalenderCards = ({ title, date, time, status }) => {
  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    viewMore ? setViewMore(false) : setViewMore(true);
  };
  const statusBackgroundColor =
    status === "Completed"
      ? "#8efa95"
      : status === "Schedule"
      ? "#FFCC80"
      : "#EEE";
  return (
    <>
      <TouchableOpacity>
        <View className="w-[325] flex flex-row justify-around border-t-[0.75px] border-t-[#FCEFDD] mt-[15px] py-3">
          <Text className="w-[39px] h-[39px] bg-[#EEE7F7] rounded-[15px]"></Text>
          <View className="flex flex-col justify-around">
            <View className="flex flex-row justify-between">
              <Text className="text-[14px] font-[Proxima-Nova-Semibold] text-[#1C222F]">
                {title}
              </Text>
              <TouchableOpacity>
                <AntDesign name="right" size={19} color="#6319C4" />
              </TouchableOpacity>
            </View>
            <View className="flex-row  item-center gap-[15px]">
              <Text className="mt-[3px]">
                <FontAwesome6 name="calendar-days" size={14} color="#6319C4" />
              </Text>
              <Text className="text-[15px] font-[ProximaNova-Regular] text-[#666666] ">
                {date}
              </Text>
            </View>
            <View className="flex-row gap-[15px]">
              <Text className="mt-[3px]">
                <MaterialIcons name="access-alarms" size={14} color="#6319C4" />
              </Text>
              <Text className="text-[14px] font-[ProximaNova-Regular] text-[#666666]">
                {time}
              </Text>
              <Text
                style={{
                  backgroundColor: statusBackgroundColor,
                  textAlign: "center",
                  borderRadius: 5,
                  color: "#000",
                  fontWeight: "600",
                  width: 80,
                  padding: 5,
                }}
              >
                {status}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CalenderCards;

const styles = StyleSheet.create({});
