import React from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const screenSteps = [
  // "Register",
  // "ServicesScreen",
  "VetDetailsScreen",
  "VetLocationScreen",
  "AddSpecializationScreen",
  "AddServicesScreen",
  "WeekScheduleScreen",
  "ServicesPricesScreen",
  "BankDetailsScreen",
  "AddAssistantScreen",
  // "AggrementScreen",
];

const ProgressBar = () => {
  const route = useRoute();
  const currentIndex = screenSteps.indexOf(route.name);

  return (
    <View style={styles.container}>
      {screenSteps.map((_, index) => (
        <View
          key={index}
          style={[
            styles.segment,
            {
              backgroundColor: index <= currentIndex ? "#6319C4" : "#e0e0e0", // Highlight completed segments
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  segment: {
    flex: 1,
    height: 8,
    // marginLeft: 4,
    borderRadius: 5, // Rounded edges for each segment
    marginHorizontal: 1, // Spacing between segments
  },
});

export default ProgressBar;
// import React from "react";
// import { View } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";

// const screenSteps = [
//   // "Register",
//   // "ServicesScreen",
//   "VetDetailsScreen",
//   "VetLocationScreen",
//   "AddSpecializationScreen",
//   "AddServicesScreen",
//   "WeekScheduleScreen",
//   "ServicesPricesScreen",
//   "BankDetailsScreen",
//   "AddAssistantScreen",
//   // "AggrementScreen",
// ];

// const ProgressBar = () => {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const currentIndex = screenSteps.indexOf(route.name);
//   const progress = (currentIndex + 1) / screenSteps.length;

//   return (
//     <View style={{ height: 5, width: "100%", backgroundColor: "#e0e0e0" }}>
//       <View
//         style={{
//           height: 5,
//           width: `${progress * 100}%`,
//           backgroundColor: "#6319C4",
//         }}
//       />
//     </View>
//   );
// };

// export default ProgressBar;
