import React, { useState, useEffect } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, StatusBar, Dimensions  } from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// style(s)
import { styles } from '../styles/CalendarStyles';

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MoodCalendar() {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [initialDate, setInitialDate] = useState(null);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [note, setNote] = useState('');
  const [submittedData, setSubmittedData] = useState({});
  const [currentMood, setCurrentMood] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    loadInitialDate();
    loadSubmittedData(selectedDate);
    loadMood(selectedDate);
  }, [selectedDate]);

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

  const loadSubmittedData = async (date) => {
    try {
      const data = await AsyncStorage.getItem(date);
      if (data) {
        setSubmittedData(JSON.parse(data));
      } else {
        setSubmittedData({});
      }
    } catch (error) {
      console.log('Error loading submitted data from storage:', error);
    }
  };

  const loadMood = async (date) => {
    try {
      const mood = await AsyncStorage.getItem(`mood_${date}`);
      setCurrentMood(mood || '');
    } catch (error) {
      console.log('Error loading mood from storage:', error);
    }
  };

  const handleDateSelect = async (date) => {
    if (selectedDate === date.dateString) {
      const savedNote = await AsyncStorage.getItem(date.dateString);
      setNote(savedNote || '');
      setShowNotesModal(true);
    } else {
      setSelectedDate(date.dateString);
    }
  };

  const handleMonthChange = (month) => {
    setSelectedDate(moment(month.dateString).format('YYYY-MM-DD'));
  };

  const handleCloseNotes = () => {
    setShowNotesModal(false);
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {moment(selectedDate).format('dddd, MMMM D, YYYY')}
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
          disableArrowLeft={moment(selectedDate).isSame(moment(initialDate), 'month')}
          disableArrowRight={false}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: 'blue' },
          }}
          theme={{
            selectedDayBackgroundColor: 'blue',
            todayTextColor: 'blue',
            arrowColor: 'blue',
            textDayFontFamily: 'Arial',
            textMonthFontFamily: 'Arial',
            textDayHeaderFontFamily: 'Arial',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
      <View style={styles.additionalArea}>
  {currentMood ? (
    <>
      <Text style={styles.moodText}>{currentMood}</Text>
    </>
  ) : (
    <>
      <Text style={styles.noMoodText}>No mood recorded today</Text>
      <TouchableOpacity style={styles.recordMoodButton} onPress={() => {  navigation.navigate('Home', {screen: "MoodQuizScreen"}); }}>
        <Text style={styles.recordMoodButtonText}>Record Your Mood</Text>
      </TouchableOpacity>
    </>
  )}
</View>
      <Modal visible={showNotesModal} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View style={{ backgroundColor: '#fff', padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Notes for {selectedDate}</Text>
            <Text>{note}</Text>
            <Text>Submitted Data:</Text>
            {Object.entries(submittedData).map(([key, value]) => (
              <Text key={key}>{`${key}: ${value}`}</Text>
            ))}
            <TouchableOpacity onPress={handleCloseNotes} style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18, color: 'black' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </ScrollView>
  );
}