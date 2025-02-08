import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HomeVisitBoxes from "../components/HomeVisitBoxes";
import PetDetailsComponent from "../components/PetDetailsComponent";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const HomeVisitScreen = () => {
  return (
    <View className="flex-1 w-[393]  bg-white">
      <ScrollView>
        <View className=" ml-[20px] rounded-[15px] bg-[#FFF2E1] w-[325px] mt-[20px]">
          <Text className="ml-[15px] mt-[15px] font-[Proxima-Nova-Semibold] text-[16px] text-[#1C222F]">
            Scheduled
          </Text>
          <Text className="ml-[15px] mt-[15px] mb-[16px] mr-[45px] font-[ProximaNova-Regular] text-[14px] text-[#7F7E7C]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in
            rerum quaerat! Amet, iusto odio dolor deleniti neque necessitatibus
            quos vel expedita perferendis exercitationem numquam. Consequuntur
          </Text>
        </View>
        <View className=" ml-[20px] rounded-[15px] mt-[20px] w-[325px] bg-[#FFFCF8] border-[0.75px] border-[#FFF4E5]">
          <View className="flex flex-row items-center ml-[15px] mt-[15.3px]  gap-[5px]">
            <Text className="text-[14px] text-[#7F7F7F]">Appointment ID:</Text>
            <Text className="text-[16px] text-[#000000] font-semibold">
              23456789
            </Text>
          </View>
          <View className="flex flex-row items-center ml-[15px] mt-[15.3px] mb-[17px] gap-[5px]">
            <Image
              source={require("../assets/images/timedate.png")}
              className="w-[18.18] h-[16.05]"
            />
            <Text className="font-[Proxima-Nova-Medium] text-[16px] text-[#1C222F]">
              24, April, 2024, 09:00 AM - 10:00 AM
            </Text>
          </View>
        </View>
        <View className="w-[290px] bg-white flex flex-row items-center justify-center gap-[10px] ml-[34px] mt-[20.3px] ">
          <TouchableOpacity>
            <HomeVisitBoxes
              title="Call"
              imageUri={require("../assets/images/contact.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <HomeVisitBoxes
              title="Chat"
              imageUri={require("../assets/images/DummyImages/chat.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <HomeVisitBoxes
              title="Directions"
              imageUri={require("../assets/images/DummyImages/Direction.png")}
            />
          </TouchableOpacity>
        </View>
        <Text className=" ml-[20px] mb-[12px] mt-[20px] text-[16px] text-[#000000] font-semibold ">
          Pet Details
        </Text>
        <PetDetailsComponent />
        <TouchableOpacity>
          <View className=" flex flex-row items-center justify-between w-[325px] h-[58px] bg-[#FFFCF8] border-[0.75px] border-[#FCEFDD] rounded-[15px] ml-[20px] mt-[15px]">
            <View className="flex flex-row justify-center items-center gap-[12.7px] ml-[17px] mb-[21px] mt-[19px]">
              <Image
                source={require("../assets/images/services.png")}
                className="w-[16.29px] h-[18.01px]"
              />
              <Text className="w-[107px] h-[18px] font-[Proxima-Nova-Medium] text-[16px]">
                Medical history
              </Text>
            </View>
            <View>
              <Image
                source={require("../assets/images/secondaryBack.png")}
                className="mr-[24.8px] "
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className=" flex flex-row items-center justify-between w-[325px] h-[58px] bg-[#FFFCF8] border-[0.75px] border-[#FCEFDD] rounded-[15px] ml-[20px] mt-[15px]">
            <View className="flex flex-row justify-center items-center gap-[12.7px] ml-[17px] mb-[21px] mt-[19px]">
              <Image
                source={require("../assets/images/services.png")}
                className="w-[16.29px] h-[18.01px]"
              />
              <Text className="w-[107px] h-[18px] font-[Proxima-Nova-Medium] text-[16px]">
                Service details
              </Text>
            </View>
            <View>
              <Image
                source={require("../assets/images/secondaryBack.png")}
                className="mr-[24.8px] "
              />
            </View>
          </View>
        </TouchableOpacity>
        <Text className="mt-[20px] mb-[14px] h-[18px] font-[Proxima-Nova-Semibold] text-[16px] text-[#000000] ml-[20px]">
          Payment summary
        </Text>
        <View className="w-[325px] bg-[#FFFCF8] border-[0.75px] border-[#FCEFDD] rounded-[15px] ml-[20px]">
          <View className="mt-[15px] ml-[15px] flex flex-row  justify-between">
            <Text className="text-[16px] font-[Proxima-Nova-Semibold] text-[#000000]">
              Service Charges
            </Text>
            <View className=" flex-row items-center">
              <FontAwesome name="rupee" size={14} color="#7F7F7F" />
              <Text className="text-[14px] font-[Proxima-Nova-Medium] text-[#7F7F7F] mr-[15px]">
                850
              </Text>
            </View>
          </View>
          <View className="mt-[15px] ml-[15px] flex flex-row  justify-between">
            <Text className="text-[16px] font-[Proxima-Nova-Semibold] text-[#7F7F7F]">
              GST and other charges
            </Text>
            <View className="flex flex-row items-center ">
              <FontAwesome name="rupee" size={14} color="#7F7F7F" />
              <Text className="text-[14px] font-[Proxima-Nova-Medium] text-[#7F7F7F] mr-[15px]">
                60
              </Text>
            </View>
          </View>
          <View className="mt-[15px] ml-[15px] flex flex-row  justify-between mb-[16px]">
            <Text className="text-[16px] font-[Proxima-Nova-Semibold] text-[#7F7F7F]">
              GST and other charges
            </Text>
            <View className="flex flex-row items-center">
              <FontAwesome name="rupee" size={14} color="#7F7F7F" />
              <Text className="text-[14px] font-[Proxima-Nova-Medium] text-[#7F7F7F] mr-[15px]">
                199.00
              </Text>
            </View>
          </View>
          <Text className="border-t-[0.75px] border-[#FCEFDD] mr-[14.5px] ml-[14.5px] "></Text>
          <View className="flex flex-row  justify-between ml-[20px]">
            <Text className="text-[16px] font-[Proxima-Nova-Medium] text-[#000000]">
              Estimate
            </Text>
            <View className="flex flex-row mb-[16px] items-center">
              <FontAwesome name="rupee" size={14} color="#000000" />
              <Text className="text-[14px] font-[Proxima-Nova-Semibold] text-[#000000] mr-[15px]">
                1,109.00
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-[16px] text-[#000000] font-semibold mt-[20px] ml-[15px] mb-[12px]">
          Address
        </Text>
        <View className="w-[325px] bg-[#FFFCF8] border-[0.75px] border-[#FCEFDD] rounded-[15px] ml-[20px] mb-[50px]">
          <View className="flex flex-row gap-[5.9px] mt-[15px] ml-[14.9px] mb-[7px]">
            <Image
              source={require("../assets/images/address.png")}
              className="w-[13.21px] h-[16px]"
            />
            <Text className="font-[Proxima-Nova-Medium] font-medium h-[20px] text-[14px] text-[#000000]">
              Banjara Hills
            </Text>
          </View>
          <Text className="font-[ProximaNova-Regular] text-[12px] text-[#7F7F7F] ml-[35px] mb-[16px] w-[226px] h-[30px]">
            Park View Estate, Road No. 2, Banjara Hills, Hyderabad, Telangana
            500034, India
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <Text>Start Consultation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeVisitScreen;

const styles = StyleSheet.create({});
