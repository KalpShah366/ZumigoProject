import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import { useNavigation } from "@react-navigation/native";

const AggrementScreen = () => {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ScrollView>
        <Text className="font-[Proxima-Nova-Semibold] text-[26px] text-[#1C222F] ml-5 mt-5 mb-2">
          Agreement
        </Text>
        <View className="mt-2 ml-5 mb-5 gap-[10px] w-[309px] ">
          <Text className="font-[ProximaNova-Regular] text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa
            aspernatur inventore cumque quisquam, quaerat quos, nulla aliquid
            praesentium corporis earum voluptatem eligendi? Ipsa sit eum earum
            odio, facilis sapiente. Quae praesentium blanditiis iusto
            exercitationem fugiat voluptatem, rem explicabo perspiciatis!
          </Text>
          <Text className="font-[ProximaNova-Regular] text-[12px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            aperiam, eligendi dicta nemo aliquid vel tempora quidem
            reprehenderit incidunt repudiandae, consectetur quisquam nulla,
            velit repellat qui deleniti magnam voluptas. Quos porro iure nisi
            blanditiis iste similique totam itaque consectetur corporis
            doloribus quasi corrupti eligendi amet, aliquam est non odit earum
            natus vero, cupiditate quod a. Atque accusantium necessitatibus et
            corporis.
          </Text>
          <Text className="font-[ProximaNova-Regular] text-[12px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            aperiam, eligendi dicta nemo aliquid vel tempora quidem
            reprehenderit incidunt repudiandae, consectetur quisquam nulla,
            velit repellat qui deleniti magnam voluptas. Quos porro iure nisi
            blanditiis iste similique totam itaque consectetur corporis
            doloribus quasi corrupti eligendi amet, aliquam est non odit earum
            natus vero, cupiditate quod a. Atque accusantium necessitatibus et
            corporis.
          </Text>
          <Text className="font-[ProximaNova-Regular] text-[12px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            aperiam, eligendi dicta nemo aliquid vel tempora quidem
            reprehenderit incidunt repudiandae, consectetur quisquam nulla,
            velit repellat qui deleniti magnam voluptas. Quos porro iure nisi
            blanditiis iste similique totam itaque consectetur corporis
            doloribus quasi corrupti eligendi amet, aliquam est non odit earum
            natus vero, cupiditate quod a. Atque accusantium necessitatibus et
            corporis.
          </Text>
          <Text className="font-[ProximaNova-Regular] text-[12px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            aperiam, eligendi dicta nemo aliquid vel tempora quidem
            reprehenderit incidunt repudiandae, consectetur quisquam nulla,
            velit repellat qui deleniti magnam voluptas. Quos porro iure nisi
            blanditiis iste similique totam itaque consectetur corporis
            doloribus quasi corrupti eligendi amet, aliquam est non odit earum
            natus vero, cupiditate quod a. Atque accusantium necessitatibus et
            corporis.
          </Text>
        </View>
        <Text className="font-[Proxima-Nova-Medium] h-[20px] text-[18px] bordet-t-[0.75px] border-[#FFF4E5] mt-[15px] text-[#000000] ml-5 mb-10 ">
          Security and privacy
        </Text>
        <View className="flex flex-row ml-5 mt-2 mb-20 gap-[8]">
          <ToggleSwitch
            isOn={isSwitchOn}
            onColor="red"
            offColor="#D9D9D9"
            size="small"
            onToggle={(isOn) => setIsSwitchOn(isOn)}
          />
          <Text className="text-[15px]">I Accept the terms and conditions</Text>
        </View>
      </ScrollView>
      <View className="flex-1 justify-center items-center fixed bg-white mt-[50] mb-[50] ">
        <TouchableOpacity
          className="bg-[#FF5362] h-[60] w-[300] mt-5 rounded-[20px] mb-5"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text className="text-[#fff] text-[18px] font-bold text-center py-[15px] px-[20] rounded-[10px] ">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AggrementScreen;

const styles = StyleSheet.create({});
