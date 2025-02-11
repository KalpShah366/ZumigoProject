import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreenBoxes = ({ title, number, color }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <View
        className="rounded-[15px] mt-2 flex-col"
        style={{
          backgroundColor: color,
          width: "109",
          height: "90",
          flexDirection: "column",
          justifyContent: "space-evenly",
          borderRadius: 15,
        }}
      >
        <Text className="w-[102] ml-[12px] font-[ProximaNova-Regular] text-[14px] text-[#7F7E7C]">
          {title}
        </Text>
        <Text className="w-[51] ml-[12px] font-[Proxima-Nova-Semibold] text-[20px] text[#1C222F] font-bold">
          {number}
        </Text>
      </View>
    </View>
  );
};

export default HomeScreenBoxes;

const styles = StyleSheet.create({});
