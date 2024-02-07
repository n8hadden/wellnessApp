import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/MoodQuizStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Page({ route }) {
  const [selectedMood, setSelectedMood] = useState('');
  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.question}>How do you feel today?</Text>
      <TouchableOpacity
        style={[
          styles.moodButton,
          selectedMood === 'happy' ? styles.selectedMoodButton : null,
          selectedMood === 'happy' && { backgroundColor: '#FFD700' },
        ]}
        onPress={() => handleMoodSelection('happy')}
      >
        <Text style={styles.moodButtonText}>Happy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.moodButton,
          selectedMood === 'sad' ? styles.selectedMoodButton : null,
          selectedMood === 'sad' && { backgroundColor: '#87CEEB' },
        ]}
        onPress={() => handleMoodSelection('sad')}
      >
        <Text style={styles.moodButtonText}>Sad</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.moodButton,
          selectedMood === 'mad' ? styles.selectedMoodButton : null,
          selectedMood === 'mad' && { backgroundColor: '#FF0000' },
        ]}
        onPress={() => handleMoodSelection('mad')}
      >
        <Text style={styles.moodButtonText}>Mad</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.moodButton,
          selectedMood === 'joyful' ? styles.selectedMoodButton : null,
          selectedMood === 'joyful' && { backgroundColor: '#FE83A0' },
        ]}
        onPress={() => handleMoodSelection('joyful')}
      >
        <Text style={styles.moodButtonText}>Joyful</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.moodButton,
          selectedMood === 'depressed' ? styles.selectedMoodButton : null,
          selectedMood === 'depressed' && { backgroundColor: '#708090' },
        ]}
        onPress={() => handleMoodSelection('depressed')}
      >
        <Text style={styles.moodButtonText}>Depressed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.moodButton,
          selectedMood === 'loved' ? styles.selectedMoodButton : null,
          selectedMood === 'loved' && { backgroundColor: '#FFC0CB' },
        ]}
        onPress={() => handleMoodSelection('loved')}
      >
        <Text style={styles.moodButtonText}>Loved</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.moodButton,
          selectedMood === 'weird' ? styles.selectedMoodButton : null,
          selectedMood === 'weird' && { backgroundColor: '#A74D60' },
        ]}
        onPress={() => handleMoodSelection('weird')}
      >
        <Text style={styles.moodButtonText}>Weird</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.moodButton,
          selectedMood === 'calm' ? styles.selectedMoodButton : null,
          selectedMood === 'calm' && { backgroundColor: '#98FB98' },
        ]}
        onPress={() => handleMoodSelection('calm')}
      >
        <Text style={styles.moodButtonText}>Calm</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          // Handle the submission logic here
         console.log("Selected mood:", selectedMood);
        }}
        disabled={!selectedMood} // Disable the button if no mood is selected
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
}