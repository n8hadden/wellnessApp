import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/MoodQuizStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Define an array of mood buttons with their properties
const moodButtons = [
  { mood: 'happy', bgColor: '#FFD700', label: 'Happy' },
  { mood: 'sad', bgColor: '#87CEEB', label: 'Sad' },
  { mood: 'mad', bgColor: '#FF0000', label: 'Mad' },
  { mood: 'joyful', bgColor: '#FE83A0', label: 'Joyful' },
  { mood: 'depressed', bgColor: '#708090', label: 'Depressed' },
  { mood: 'loved', bgColor: '#FFC0CB', label: 'Loved' },
  { mood: 'weird', bgColor: '#A74D60', label: 'Weird' },
  { mood: 'calm', bgColor: '#98FB98', label: 'Calm' },
];

export default function Page({ route }) {
  // State variables to keep track of selected moods and slider values
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [sliderValues, setSliderValues] = useState({});

  // Function to handle mood selection
  const handleMoodSelection = (mood) => {
    if (selectedMoods.includes(mood)) {
      // If the mood is already selected, remove it from the selectedMoods array and delete its corresponding slider value
      setSelectedMoods(selectedMoods.filter((selectedMood) => selectedMood !== mood));
      setSliderValues((prevSliderValues) => {
        const updatedSliderValues = { ...prevSliderValues };
        delete updatedSliderValues[mood];
        return updatedSliderValues;
      });
    } else {
      // If the mood is not selected, add it to the selectedMoods array and initialize its slider value to 1
      setSelectedMoods([...selectedMoods, mood]);
      setSliderValues((prevSliderValues) => ({
        ...prevSliderValues,
        [mood]: 1,
      }));
    }
  };

  // Function to handle slider value change
  const handleSliderValueChange = (mood, value) => {
    setSliderValues((prevSliderValues) => ({
      ...prevSliderValues,
      [mood]: value,
    }));
  };

  return (
    <ScrollView style={styles.body}>
      {/* Question body */}
      <View style={styles.qbody}>
        <Text style={styles.question}>How are you feeling today?</Text>
      </View>

      {/* Mood buttons */}
      <View style={styles.container}>
        {moodButtons.map((button) => (
          <TouchableOpacity
            key={button.mood}
            style={[
              styles.moodButton,
              selectedMoods.includes(button.mood) ? styles.selectedMoodButton : null,
              selectedMoods.includes(button.mood) && { backgroundColor: button.bgColor },
            ]}
            onPress={() => handleMoodSelection(button.mood)}
          >
            <Text style={styles.moodButtonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Slider and slider values */}
      <View style={styles.sliderContainer}>
        {selectedMoods.map((mood) => (
          <React.Fragment key={mood}>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderText}>How {mood} do you feel?</Text>
              <Text style={styles.sliderValue}>{Math.floor(sliderValues[mood] || 1)}</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
              value={sliderValues[mood] || 1}
              onValueChange={(value) => handleSliderValueChange(mood, value)}
            />
          </React.Fragment>
        ))}
      </View>

      {/* Submit button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          // Handle the submission logic here
          console.log('Selected moods:', selectedMoods);
          console.log('Slider values:', sliderValues);
        }}
        disabled={selectedMoods.length === 0} // Disable the button if no mood is selected
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </ScrollView>
  );
}