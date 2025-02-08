import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import PricingCard from "../components/PricingCard";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";

const ServicesPricesScreen = () => {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["75%"], []); // Full-screen bottom sheet
  const bottomSheetRef = useRef(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [bottomSheetData, setBottomSheetData] = useState({});
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
    setIsBottomSheetVisible(false);
  };

  const openBottomSheet = (data) => {
    setBottomSheetData(data); // Set the data for BottomSheet
    bottomSheetRef.current?.expand();
    setIsBottomSheetVisible(true);
  };
  return (
    <>
      <View className="flex-1 bg-white">
        <View>
          <ProgressBar />
          {/* {children} */}
        </View>
        <ScrollView>
          <Text className="text-[#7F7F7F] mt-2 ml-5 mb-2">
            ServicesPricesScreen
          </Text>
          <View className=" flex-1 ml-[15px] mr-[15px] bg-#FFFCF8">
            <PricingCard
              title={"Illness and diagnostic care"}
              cardHeading={"Doorstep Visit"}
              text1={"Changes in eye appearance"}
              text2={"Changes in body tempearatue"}
              text3={"Behavioural changes"}
              price={850}
              openBottomSheet={() =>
                openBottomSheet({
                  title: "Illness and diagnostic care",
                  text1: "Changes in eye appearance",
                  text2: "Changes in body temperature",
                  text3: "Behavioral changes",
                  text4: "Changes in eye appearance",
                  text5: "Changes in body temperature",
                  text6: "Behavioral changes",
                  text1: "Changes in eye appearance",
                  text7: "Changes in body temperature",
                  text8: "Behavioral changes",
                })
              }
            />
            <PricingCard
              cardHeading={"Doorstep Lab Diagnostic Services"}
              text1={"CBC & Blood Chemistry"}
              text2={"Urinalysis"}
              text3={"Tick-borne illness Test"}
              price={650}
              openBottomSheet={() =>
                openBottomSheet({
                  title: "Illness and diagnostic care",
                  text1: "Changes in eye appearance",
                  text2: "Changes in body temperature",
                  text3: "Behavioral changes",
                  text4: "Changes in eye appearance",
                  text5: "Changes in body temperature",
                  text6: "Behavioral changes",
                  text1: "Changes in eye appearance",
                  text7: "Changes in body temperature",
                  text8: "Behavioral changes",
                })
              }
            />
            <PricingCard
              cardHeading={"Doorstep Lab Diagnostic Services"}
              text1={"CBC & Blood Chemistry"}
              text2={"Urinalysis"}
              text3={"Tick-borne illness Test"}
              price={650}
              openBottomSheet={() =>
                openBottomSheet({
                  title: "Illness and diagnostic care",
                  text1: "Changes in eye appearance",
                  text2: "Changes in body temperature",
                  text3: "Behavioral changes",
                  text4: "Changes in eye appearance",
                  text5: "Changes in body temperature",
                  text6: "Behavioral changes",
                  text1: "Changes in eye appearance",
                  text7: "Changes in body temperature",
                  text8: "Behavioral changes",
                })
              }
            />
          </View>
        </ScrollView>
      </View>
      <View className="flex justify-center items-center fixed bg-white">
        <TouchableOpacity
          className="bg-[#FF5362] h-[60] w-[300] mt-5 rounded-[20px] mb-5"
          onPress={() => navigation.navigate("BankDetailsScreen")}
        >
          <Text className="text-[#fff] text-[18px] font-bold text-center py-[15px] px-[20] rounded-[10px] ">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      {isBottomSheetVisible && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
      )}
      {isBottomSheetVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          onChange={handleSheetChanges}
          backgroundComponent={null} // Removes default styling
        >
          <BottomSheetView className="flex-1 bg-white p-5 rounded-[15px] my-5 mx-2">
            <Text className="text-black text-lg font-bold">
              {bottomSheetData.title}
            </Text>
            <View className="mt-4 bg-[#FFFCF8] rounded-[15px] px-4 py-4">
              <Text className="text-black font-[ProximaNova-Regular] text-[14px] mt-[5px]">
                • {bottomSheetData.text1}
              </Text>
              <Text className="text-black font-[ProximaNova-Regular] text-[14px] mt-[5px]">
                • {bottomSheetData.text2}
              </Text>
              <Text className="text-black font-[ProximaNova-Regular] text-[14px] mt-[5px]">
                • {bottomSheetData.text3}
              </Text>
              <Text className="text-black font-[ProximaNova-Regular] text-[14px] mt-[5px]">
                • {bottomSheetData.text4}
              </Text>
              <Text className="text-black font-[ProximaNova-Regular] text-[14px] mt-[5px]">
                • {bottomSheetData.text5}
              </Text>
              <Text className="text-black font-[ProximaNova-Regular] text-[14px] mt-[5px]">
                • {bottomSheetData.text6}
              </Text>
              <Text className="text-black font-[ProximaNova-Regular] text-[14px] mt-[5px]">
                • {bottomSheetData.text7}
              </Text>
              <Text className="text-black font-[ProximaNova-Regular] text-[14px] mt-[5px]">
                • {bottomSheetData.text8}
              </Text>
            </View>
            <TouchableOpacity
              className="bg-[#FF5362] p-3 rounded-lg mt-[60px] justify-end"
              onPress={closeBottomSheet}
            >
              <Text className="text-white text-center font-bold">OK</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

const styles = StyleSheet.create({});
export default ServicesPricesScreen;
