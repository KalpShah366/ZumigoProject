import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useCallback, useMemo, useState, useRef } from "react";
// import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const PricingCard = ({
  title,
  cardHeading,
  price,
  text1,
  text2,
  text3,
  openBottomSheet,
}) => {
  return (
    <>
      <Text className="w-[189] h-[18] font-[Proxima-Nova-Medium] text-[16px] mt-2 mb-2 ml-2 ">
        {title}
      </Text>
      <View className="flex-1 justify-center items-center">
        {/* <ScrollView> */}

        <View className=" flex-1 w-[325] h-[227] bg-[#FFFCF8]  rounded-[15px] border-[0.6px] border-[#FFF4E5] ">
          <Text className="w-[114] h-[21] ml-5 mb-2 mt-2 font-[Proxima-Nova-Semibold] text-[18px] text-[#1C222F]">
            {cardHeading}
          </Text>
          <Text className="ml-5 mb-2 nt-2">Please remember the following</Text>
          <View className="flex flex-row item-center">
            <Entypo name="dot-single" size={24} color="black" />
            <Text className="font-[ProximaNova-Regular] text-[14px] text-[#1C222F] mt-1">
              {text1}
            </Text>
          </View>
          <View className="flex flex-row item-center">
            <Entypo name="dot-single" size={24} color="black" />
            <Text className=" font-[ProximaNova-Regular] text-[14px] text-[#1C222F] mt-1">
              {text2}
            </Text>
          </View>
          <View className="flex flex-row item-center">
            <Entypo name="dot-single" size={24} color="black" />
            <Text className="font-[ProximaNova-Regular] text-[14px] text-[#1C222F] mt-1">
              {text3}
            </Text>
          </View>
          <TouchableOpacity onPress={openBottomSheet}>
            <Text className="text-[#FF5362]  ml-5 text-[14px] h-[24px] font-[Proxima-Nova-Medium] underline mt-5">
              More details
            </Text>
          </TouchableOpacity>
          <View className=" flex flex-row ml-5 w-[76] h-[25] font-[Proxima-Nova-Semibold] text-[#1C222F] mt-2">
            <Text className="text-[22px] w-[80] h-[25] ">
              <FontAwesome name="rupee" size={22} color="black" />
              {price}.00
            </Text>
          </View>
        </View>

        {/* {isBottomSheetVisible && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
      )}
      {isBottomSheetVisible && (
        <BottomSheet
          ref={bottomSheetRef} // Attach the ref to BottomSheet
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={true} // Allow swiping down to close
          backgroundComponent={null}
        >
          <BottomSheetView className="flex-1 bg-white p-[20px] rounded-lg">
            {/* <View className="mt-[46px] mb-[32px]"></View> */}
        {/* <View className="flex flex-row item-center"> */}
        {/* <Entypo name="dot-single" size={24} color="black" /> */}
        {/* <Text className="font-[ProximaNova-Regular] text-[14px] text-[#1C222F] mt-1"> */}
        {/* {text1} */}
        {/* </Text> */}
        {/* </View> */}
        {/* <View className="flex flex-row item-center"> */}
        {/* <Entypo name="dot-single" size={24} color="black" /> */}
        {/* <Text className="font-[ProximaNova-Regular] text-[14px] text-[#1C222F] mt-1"> */}
        {/* {text1} */}
        {/* </Text> */}
        {/* </View> */}
        {/* <View className="flex flex-row item-center"> */}
        {/* <Entypo name="dot-single" size={24} color="black" /> */}
        {/* <Text className="font-[ProximaNova-Regular] text-[14px] text-[#1C222F] mt-1"> */}
        {/* {text1} */}
        {/* </Text> */}
        {/* </View> */}
        {/* <View className="flex flex-row item-center"> */}
        {/* <Entypo name="dot-single" size={24} color="black" /> */}
        {/* <Text className="font-[ProximaNova-Regular] text-[14px] text-[#1C222F] mt-1"> */}
        {/* {text1} */}
        {/* </Text> */}
        {/* </View> */}
        {/* <View className="flex flex-row item-center"> */}
        {/* <Entypo name="dot-single" size={24} color="black" /> */}
        {/* <Text className="font-[ProximaNova-Regular] text-[14px] text-[#1C222F] mt-1"> */}
        {/* {text1} */}
        {/* </Text> */}
        {/* </View> */}
        {/* <View className="flex flex-row item-center"> */}
        {/* <Entypo name="dot-single" size={24} color="black" /> */}
        {/* <Text className="font-[ProximaNova-Regular] text-[14px] text-[#1C222F] mt-1"> */}
        {/* {text1} */}
        {/* </Text> */}
        {/* </View> */}
        {/* <TouchableOpacity style={styles.okBox} onPress={closeBottomSheet}> */}
        {/* <Text style={styles.btnText}>Ok</Text> */}
        {/* </TouchableOpacity> */}
        {/* </BottomSheetView> */}
        {/* // </BottomSheet> */}
        {/* // )}  */}
        {/* </ScrollView> */}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  okBox: {
    backgroundColor: "#FF5362",
    height: 50,
    width: 300,
    marginTop: 10,
    borderRadius: 20,
    // marginLeft: 30,
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
});

export default PricingCard;
