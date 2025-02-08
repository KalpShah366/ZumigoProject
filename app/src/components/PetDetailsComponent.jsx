import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PetDetailsComponent = () => {
  return (
    <View className="w-[325] ml-[20px] bg-[#FFFCF8] border-[0.75px] border-[#FCEFDD] rounded-[15px] ">
      <View className="flex flex-row items-center mt-[11px] ml-[15px] mr-[25px] ">
        <Image
          source={require("../assets/images/DummyImages/Dog.png")}
          className="w-[59px] h-[59px]"
        />
        <View className="flex flex-col justify-around">
          <View className="flex flex-row items-center ml-[10px] gap-3">
            <Text className="text-[20px] text-[#6319C4] font-bold">MAX</Text>
            <Text className="font-[Proxima-Nova-Medium] text-[15px] text-[#1C222F]">
              Australian Shepherd
            </Text>
          </View>
          <View className=" flex flex-row ml-[10px] gap-3">
            <Text className="font-[ProximaNova-Regular] text-[14px] text-[#7F7E7C]">
              Male |
            </Text>
            <Text className="font-[ProximaNova-Regular] text-[14px] text-[#7F7E7C]">
              Age 3 yrs |
            </Text>
            <Text className="font-[ProximaNova-Regular] text-[14px] text-[#7F7E7C]">
              30 Kgs
            </Text>
          </View>
        </View>
      </View>
      <View className="ml-[15px] mt-[15px] flex flex-col gap-[5px]">
        <Text className="font-[Proxima-Nova-Semibold] text-[16px] text-[#1C222F]">
          Symptoms -
        </Text>
        <Text className="font-[ProximaNova-Regular] text-[14px] text-[#7F7E7C] mb-[16px] ">
          Change in Appetite, Change in Activity Level
        </Text>
        <Text className="border-t-[0.75px] border-[#FCEFDD] mr-[20px]"></Text>
      </View>
      <View>
        <Text className=" ml-[15px] mb-[12px] font-[Proxima-Nova-Semibold] text-[16px] h-[18px] text-[#1C222F]">
          Pet Images -
        </Text>
        <View className="flex flex-row ml-[15px] gap-[10px] mb-[16px] ">
          <Image
            source={require("../assets/images/DummyImages/petImage.png")}
            className="w-[70px] h-[58px]"
          />
          <Image
            source={require("../assets/images/DummyImages/petImage.png")}
            className="w-[70px] h-[58px]"
          />
        </View>
        <Text className="border-t-[0.75px] border-[#FCEFDD] mr-[20px] ml-[15px]"></Text>
      </View>
      <View className="ml-[15px] flex flex-col gap-[10px]">
        <Text className="font-[Proxima-Nova-Semibold] text-[16px] text-[#1C222F] w-[44px] h-[18px]">
          Note -
        </Text>
        <Text className="w-[285px] h-[52px] font-[ProximaNova-Regular] text-[14px] text-[#7F7E7C] mb-[16.5px]">
          Pellentesque suscipit tempor ullamcorper. Nun a quam posuere,
          consectetur lectus eu, euismod ipsum
        </Text>
      </View>
    </View>
  );
};

export default PetDetailsComponent;

const styles = StyleSheet.create({});
