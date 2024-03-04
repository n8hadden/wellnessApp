


import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import { styles } from '../styles/MoodQuizStyles';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const moodButtons = [
  { mood: 'happy', bgColor: '#FFD700', label: 'Happy' },
  { mood: 'sad', bgColor: '#87CEEB', label: 'Sad' },
  { mood: 'mad', bgColor: '#FF0000', label: 'Mad' },
  { mood: 'scared', bgColor: '#FE83A0', label: 'Scared' },
  { mood: 'enjoyed', bgColor: '#708090', label: 'Enjoyed' },
  { mood: 'awkward', bgColor: '#FFC0CB', label: 'Awkward' },
];

export default function MoodQuiz() {
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [sliderValues, setSliderValues] = useState({});
  const [finalThoughts, setFinalThoughts] = useState('');

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
      [mood]: Math.floor(value),
    }));
  };

  const handleFinalThoughtsChange = (text) => {
    setFinalThoughts(text);
  };

  const handleSave = async () => {
    const trimmedFinalThoughts = finalThoughts.trim();
    // format desired: 2024-03-03 (year, month, day)
    const date = new Date().toLocaleString('en-US')
      .split(',')[0] // Remove the time part
      .split('/')
      .map((datePart, index) => {
        if (index === 0) {
          // For the first part (month), add leading zero if necessary
          return datePart.padStart(2, '0');
        } else if (index === 1) {
          // For the second part (day), add leading zero if necessary
          return datePart.padStart(2, '0');
        } else {
          // For the third part (year), remove leading zeros
          return datePart.replace(/^0+/, ''); // Remove leading zeros
        }
      })
      .join('-'); // Join the parts with dashes

    const currentDate = date.slice(6) + "-" + date.slice(0,2) + "-" + date.slice(3,5);

    const moodData = {
      day: currentDate,
      mood: selectedMoods,
      moodValue: sliderValues,
      finalThoughts: trimmedFinalThoughts,
    };
    console.log("current date (locally):", currentDate) 
  
    try {
      await AsyncStorage.setItem('moodData', JSON.stringify(moodData));
      console.log('Mood data saved successfully!');
    } catch (error) {
      console.error('Error saving mood data:', error);
    }
    console.log("Async mood data1:", AsyncStorage.getItem('moodData'))
  
    setSelectedMoods([]);
    setSliderValues({});
    setFinalThoughts('');
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.qbody}>
        <Text style={styles.question}>How are you feeling today?</Text>
      </View>
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
      <Text style={styles.question}>Your Thoughts</Text>
      <View style={styles.thoughtBody}>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Enter your final thoughts..."
          value={finalThoughts}
          onChangeText={(text) => handleFinalThoughtsChange(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSave}
        disabled={selectedMoods.length === 0} // Disable the button if no mood is selected
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
