import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HomeVisitBoxes = ({ title, imageUri }) => {
  return (
    <View className="flex flex-row items-center justify-center rounded-[10px] gap-[9px] w-[102] h-[50px] bg-[#EDE5F7] ">
      <Image source={imageUri} className="w-[18.08] h-[18.08]" />
      <Text className="font-[Proxima-Nova-Medium] w-auto font-[15px] text-[#1C222F] mt-[11px] mb-[12px] mr-[16px]">
        {title}
      </Text>
    </View>
  );
};

export default HomeVisitBoxes;

const styles = StyleSheet.create({});
