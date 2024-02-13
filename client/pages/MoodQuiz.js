import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/MoodQuizStyles';
import Slider from '@react-native-community/slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [sliderValues, setSliderValues] = useState({});

  const handleMoodSelection = (mood) => {
    if (selectedMoods.includes(mood)) {
      setSelectedMoods(selectedMoods.filter((selectedMood) => selectedMood !== mood));
      setSliderValues((prevSliderValues) => {
        const updatedSliderValues = { ...prevSliderValues };
        delete updatedSliderValues[mood];
        return updatedSliderValues;
      });
    } else {
      setSelectedMoods([...selectedMoods, mood]);
      setSliderValues((prevSliderValues) => ({
        ...prevSliderValues,
        [mood]: 1,
      }));
    }
  };

  const handleSliderValueChange = (mood, value) => {
    setSliderValues((prevSliderValues) => ({
      ...prevSliderValues,
      [mood]: value,
    }));
  };

  return (
    <ScrollView>
      <Text style={styles.question}>How are you feeling today?</Text>
      <View style={styles.container}>
        {moodButtons.map((button) => (
          <React.Fragment key={button.mood}>
            <TouchableOpacity
              style={[
                styles.moodButton,
                selectedMoods.includes(button.mood) ? styles.selectedMoodButton : null,
                selectedMoods.includes(button.mood) && { backgroundColor: button.bgColor },
              ]}
              onPress={() => handleMoodSelection(button.mood)}
            >
              <Text style={styles.moodButtonText}>{button.label}</Text>
            </TouchableOpacity>
            {selectedMoods.includes(button.mood) && (
                  <Text style={styles.sliderValue}>{Math.floor(sliderValues[button.mood] || 1)}</Text>
                )}
            {selectedMoods.includes(button.mood) && (
              <View style={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
                  minimumValue={1}
                  maximumValue={5}
                  minimumTrackTintColor="#000000"
                  maximumTrackTintColor="#000000"
                  value={sliderValues[button.mood] || 1}
                  onValueChange={(value) => handleSliderValueChange(button.mood, value)}
                />
                
              </View>
            )}
          </React.Fragment>
        ))}
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          // Handle the submission logic here
          console.log("Selected moods:", selectedMoods);
          console.log("Slider values:", sliderValues);
        }}
        disabled={selectedMoods.length === 0} // Disable the button if no mood is selected
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
}