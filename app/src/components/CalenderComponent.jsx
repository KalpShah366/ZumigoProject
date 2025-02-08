import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CalenderCards from "./CalenderCards";
const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState("Thu");
  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    viewMore ? setViewMore(false) : setViewMore(true);
  };

  // Example data for the week
  const days = [
    { day: "Mon", date: 22 },
    { day: "Tue", date: 23 },
    { day: "Wed", date: 24 },
    { day: "Thu", date: 25 },
    { day: "Fri", date: 26 },
    { day: "Sat", date: 27 },
    { day: "Sun", date: 28 },
  ];

  const handleDatePress = (day) => {
    setSelectedDate(day);
  };

  return (
    <>
      <View style={styles.container}>
        {/* Week Range and Navigation */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.arrow}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>April 22nd - 29th</Text>
          <TouchableOpacity>
            <Text style={styles.arrow}>{">"}</Text>
          </TouchableOpacity>
        </View>

        {/* Days List */}
        <FlatList
          horizontal
          data={days}
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dateContainer,
                item.day === selectedDate && styles.selectedDateContainer,
              ]}
              onPress={() => handleDatePress(item.day)}
            >
              <Text
                style={[
                  styles.dayText,
                  item.day === selectedDate && styles.selectedDayText,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  item.day === selectedDate && styles.selectedDateText,
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        />
        <CalenderCards
          title="Home Visit - Vet Visit, Vaccination"
          date="24, April, 2024"
          time="08:00 AM - 09:00 AM"
          status="Completed"
        />
        <CalenderCards
          title="Home Visit - Vet Visit, Vaccination"
          date="24, April, 2024"
          time="08:00 AM - 09:00 AM"
          status="Completed"
        />
        <CalenderCards
          title="Home Visit - Vet Visit, Vaccination"
          date="24, April, 2024"
          time="08:00 AM - 09:00 AM"
          status="Schedule"
        />
        <TouchableOpacity onPress={handleViewMore}>
          <Text
            style={{
              textAlign: "center",
              // fontFamily: "Proxima-Nova-Medium",
              fontSize: 14,
              textDecorationLine: "underline",
              // paddingBottom: "50px",
            }}
          >
            View More
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    backgroundColor: "#FFFCF8",
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 50,
    borderWidth: 0.75,
    borderColor: "#FFF4E5",
    width: "345px",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  arrow: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 10,
    backgroundColor: "#FFF7F0",
    marginRight: 15, // Reduced to ensure spacing
  },
  selectedDateContainer: {
    backgroundColor: "#FFE4E1",
  },
  dayText: {
    fontSize: 14,
    color: "#999",
  },
  selectedDayText: {
    color: "#FF4D4D",
    fontWeight: "600",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  selectedDateText: {
    color: "#FF4D4D",
    fontWeight: "600",
  },
});

export default CalendarComponent;
