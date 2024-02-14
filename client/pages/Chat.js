import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar, Permissions } from 'expo';

export default function CalendarScreen() {
  const [calendarPermission, setCalendarPermission] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    requestCalendarPermission();
  }, []);

  const requestCalendarPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CALENDAR);
    setCalendarPermission(status === 'granted');
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      {calendarPermission ? (
        <View>
          <Calendar
            style={styles.calendar}
            onDayPress={(day) => handleDateSelect(day.dateString)}
          />
          {selectedDate && (
            <Text style={styles.selectedDateText}>
              Selected Date: {selectedDate}
            </Text>
          )}
        </View>
      ) : (
        <Text style={styles.permissionText}>
          Calendar permission not granted.
        </Text>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  calendar: {
    marginBottom: 20,
  },
  selectedDateText: {
    fontSize: 18,
    marginTop: 20,
  },
  permissionText: {
    fontSize: 18,
    textAlign: 'center',
  },
});