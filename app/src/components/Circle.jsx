import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Svg, { Circle } from "react-native-svg";

const CircleDesign = () => {
  return (
    <View className="flex-1 flex-row justify-around w-[335px] py-4 bg-[#FFFCF8] border-[#FFF4E5] border-[0.6px] rounded-[15px] ">
      <Svg height="118.75" width="118.75" viewBox="0 0 200 200">
        {/* Purple Arc */}
        <Circle
          cx="100"
          cy="100"
          r="80"
          stroke="#6319C4"
          strokeWidth="40"
          strokeDasharray="251.2 251.2" // Arc size (80% filled, 20% empty)
          strokeLinecap="round"
          fill="none"
          rotation="90"
          origin="100, 100"
        />
        {/* Orange Arc */}
        <Circle
          cx="100"
          cy="100"
          r="80"
          stroke="#FBA537"
          strokeWidth="40"
          strokeDasharray="251.2 251.2" // Arc size (80% filled, 20% empty)
          strokeLinecap="round"
          fill="none"
          rotation="-90"
          origin="100, 100"
        />
      </Svg>
      <View className="w-[116px] flex-col justify-around">
        <Text className="font-[ProximaNova-Regular] text-[14px] text-[#787A82]  ">
          Earning
        </Text>
        <Text className="w-[30px] h-[5px]  rounded-[2px] bg-[#FBA537]"></Text>
        <Text className="w-[116px] font-[Proxima-Nova-Semibold] text-[20px] font-semibold">
          <FontAwesome name="rupee" size={19} color="black" />
          <Text className="font-semibold">1,32,499.00</Text>
        </Text>
        <Text className="font-[ProximaNova-Regular] text-[14px] text-[#787A82]">
          Settled
        </Text>
        <Text className="w-[30px] h-[5px]  rounded-[2px] bg-[#6319C4]"></Text>
        <Text className="w-[116px] font-[Proxima-Nova-Semibold] text-[20px] font-semibold">
          <FontAwesome name="rupee" size={19} color="black" />
          <Text className="font-semibold">92,674.00</Text>
        </Text>
      </View>
    </View>
  );
};

export default CircleDesign;

const styles = StyleSheet.create({});
