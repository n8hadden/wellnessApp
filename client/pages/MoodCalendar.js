import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from '../styles/CalendarStyles';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

export default function Page() {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [initialDate, setInitialDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  useEffect(() => {
    loadInitialDate();
  }, []);

  const loadInitialDate = async () => {
    try {
      const savedDate = await AsyncStorage.getItem('initialDate');
      if (savedDate) {
        setInitialDate(savedDate);
      } else {
        const currentDate = moment().format('YYYY-MM-DD');
        await AsyncStorage.setItem('initialDate', currentDate);
        setInitialDate(currentDate);
      }
    } catch (error) {
      console.log('Error loading initial date from storage:', error);
    }
  };

  const isInitialMonth = moment(selectedDate).isSame(moment(initialDate), 'month') && moment(selectedDate).isSame(moment(initialDate), 'year');

  const handleMonthChange = (month) => {
    setSelectedDate(moment(month.dateString).format('YYYY-MM-DD'));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          current={selectedDate}
          minDate={initialDate}
          onDayPress={(day) => handleDateSelect(day)}
          hideExtraDays={true}
          disableMonthChange={true}
          onMonthChange={handleMonthChange} // Update the selected date when the month changes
          disableArrowLeft={isInitialMonth} // Disable the left arrow only for the initial month
          disableArrowRight={false} // Enable the right arrow
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: 'blue' },
          }}
          theme={{
            selectedDayBackgroundColor: 'blue',
            todayTextColor: 'blue',
            arrowColor: 'blue',
          }}
        />
      </View>
      <Text style={styles.title}>{moment(selectedDate).format('dddd, MMMM D, YYYY')}</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}