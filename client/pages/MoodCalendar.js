
import React, { useState, useEffect } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
  Dimensions,
} from "react-native";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/CalendarStyles";
import { useNavigation } from "@react-navigation/native";

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

LocaleConfig.defaultLocale = "en";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Page() {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );

  const [initialDate, setInitialDate] = useState(null);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [note, setNote] = useState("");
  // const [mood, setMood] = useState("");
  const [submittedData, setSubmittedData] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    loadInitialDate();
    loadSubmittedData(selectedDate);
  }, [selectedDate]);

  const loadInitialDate = async () => {
    try {
      const savedDate = await AsyncStorage.getItem("initialDate");
      if (savedDate) {
        setInitialDate(savedDate);
      } else {
        const currentDate = moment().format("YYYY-MM-DD");
        await AsyncStorage.setItem("initialDate", currentDate);
        setInitialDate(currentDate);
      }
    } catch (error) {
      console.log("Error loading initial date from storage:", error);
    }
  };

  const loadSubmittedData = async (date) => {
    // console.log("loadSubmittedData called with date:", date);
    try {
      const response = await AsyncStorage.getItem('moodData');
      console.log('Response from AsyncStorage:', response);
      if (response) {
        let moodData;
        try {
          moodData = JSON.parse(response);
        } catch (error) {
          console.error('Error parsing mood data from AsyncStorage:', error);
          moodData = null;
        }
        console.log('Mood Data:', moodData);
        if (moodData && typeof moodData === 'object' && moodData.day.slice(0, 10) === date) {
          // console.log('Date matched:', date);
          setNote(moodData.finalThoughts || "");
          setSubmittedData({ mood: moodData.mood, moodValue: moodData.moodValue });
        } else {
          console.log('No mood data found for the selected day');
          setNote("");
          setSubmittedData({});
        }
      } else {
        console.log('No mood data found in AsyncStorage');
        setNote("");
        setSubmittedData({});
      }
    } catch (error) {
      console.error("Error fetching mood data from AsyncStorage:", error);
      setNote("");
      setSubmittedData({});
    }
  };
  
  

  const handleDateSelect = async (date) => {
    const selectedDateString = date.dateString;
    if (selectedDate === selectedDateString) {
      console.log(selectedDate)
      console.log(selectedDateString)
      try {
        const response = await AsyncStorage.getItem('moodData');
        if (response) { // checking if there is moodData in storage; should also be checking if the response is for the currently selected date
          const moodData = JSON.parse(response);
          //  if (moodData.day === selectedDateString) { // will never run because the moodData.day includes date + hours
          if (moodData.day.split("T")[0] === selectedDateString) { 
            setNote(moodData.finalThoughts || "");
            setSubmittedData({ mood: moodData.mood, moodValue: moodData.moodValue });
          } else {
            setNote("");
            // setSubmittedData({}); // Causing ERROR
            // You have to double click the date to open the notes ?
          }
          setShowNotesModal(true);
        } else {
          console.log('No mood data found for the selected day');
        }
      } catch (error) {
        console.error("Error fetching mood data from AsyncStorage:", error);
      }
    } else {
      console.log(selectedDate)
      console.log(selectedDateString)
      setSelectedDate(selectedDateString);
    }
  };

  const handleMonthChange = (month) => {
    setSelectedDate(moment(month.dateString).format("YYYY-MM-DD"));
  };

  const handleCloseNotes = () => {
    setShowNotesModal(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {moment(selectedDate).format("dddd, MMMM D, YYYY")}
        </Text>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          current={selectedDate}
          minDate={initialDate}
          onDayPress={(day) => handleDateSelect(day)}
          hideExtraDays={true}
          disableMonthChange={true}
          onMonthChange={handleMonthChange}
          disableArrowLeft={moment(selectedDate).isSame(
            moment(initialDate),
            "month"
          )}
          disableArrowRight={false}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "blue" },
          }}
          theme={{
            selectedDayBackgroundColor: "blue",
            todayTextColor: "blue",
            arrowColor: "blue",
            textDayFontFamily: "Arial",
            textMonthFontFamily: "Arial",
            textDayHeaderFontFamily: "Arial",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
      <Modal visible={showNotesModal} transparent={true} animationType="fade">
  {showNotesModal && (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <View style={{ backgroundColor: "#fff", padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>
          Notes for {moment(selectedDate).format("MMMM D, YYYY")}
        </Text>
        {/* A suggestion: add submittedData && around "Mood of the Day" as well so you can show something like "No Mood Info for this Day" */}
        <Text>Mood Of the Day:</Text>
        {console.log("Submitted Data:", submittedData)}
        {submittedData &&
          submittedData.mood &&
          submittedData.mood.map((mood, index) => (
            <Text key={index}>
              {mood} level {submittedData.moodValue[mood]}
            </Text>
          ))}
        <Text>{note}</Text>

        <TouchableOpacity
          onPress={handleCloseNotes}
          style={{ marginTop: 10 }}
        >
          <Text style={{ fontSize: 18, color: "black" }}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
</Modal>
    </ScrollView>
  );
}
