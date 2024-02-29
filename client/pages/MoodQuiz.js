// import React, { useState } from 'react';
// import { ScrollView, Text, View, TouchableOpacity, TextInput, StatusBar } from 'react-native';
// import { styles } from '../styles/MoodQuizStyles';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Slider from '@react-native-community/slider';
// import { Dimensions } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const moodButtons = [
//   { mood: 'happy', bgColor: '#FFD700', label: 'Happy' },
//   { mood: 'sad', bgColor: '#87CEEB', label: 'Sad' },
//   { mood: 'mad', bgColor: '#FF0000', label: 'Mad' },
//   { mood: 'scared', bgColor: '#FE83A0', label: 'Scared' },
//   { mood: 'enjoyed', bgColor: '#708090', label: 'Enjoyed' },
//   { mood: 'awkward', bgColor: '#FFC0CB', label: 'Awkward' },
// ];

// export default function Page() {
//   const [selectedMoods, setSelectedMoods] = useState([]);
//   const [sliderValues, setSliderValues] = useState({});
//   const [finalThoughts, setFinalThoughts] = useState('');

//   const handleMoodSelection = (mood) => {
//     if (selectedMoods.includes(mood)) {
//       setSelectedMoods(selectedMoods.filter((selectedMood) => selectedMood !== mood));
//       setSliderValues((prevSliderValues) => {
//         const updatedSliderValues = { ...prevSliderValues };
//         delete updatedSliderValues[mood];
//         return updatedSliderValues;
//       });
//     } else {
//       setSelectedMoods([...selectedMoods, mood]);
//       setSliderValues((prevSliderValues) => ({
//         ...prevSliderValues,
//         [mood]: 1,
//       }));
//     }
//   };

//   const handleSliderValueChange = (mood, value) => {
//     setSliderValues((prevSliderValues) => ({
//       ...prevSliderValues,
//       [mood]: Math.floor(value),
//     }));
//   };

//   const handleFinalThoughtsChange = (text) => {
//     setFinalThoughts(text);
//   };

//   const handleSave = async () => {
//     const trimmedFinalThoughts = finalThoughts.trim();
//     const currentDate = new Date().toISOString(); // Get the current date and format as ISO string
//     const uId = await AsyncStorage.getItem("userId");

//     const moodData = {
//       mood: "Sad"
//     }
    
//     let id = 0;
//     const response = await fetch("https://wellness-server.onrender.com/mood/getMoodId", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(moodData)
//     })
   
//     if(response.ok){
//       const data = await response.json();
//       id = data.id;

//       console.log(id);
//     }
    
//     const data = {
//       day: currentDate, // Assuming "day" in your database corresponds to the date
//       user_id: uId,// Assuming you have a user ID, replace with actual user ID
//       mood_id:id,
//       note: trimmedFinalThoughts    
//     };

//     console.log(data)
//     fetch("https://wellness-app.onrender.com/calendar/addDay", {
//       method: "POST",
//       header: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .then(res => console.log(res))
//     .catch(e => console.log(e));
    
//     setSelectedMoods([]);
//     setSliderValues({});
//     setFinalThoughts('');
//   };

//   return (
//     <ScrollView style={styles.body}>
//       <View style={styles.qbody}>
//         <Text style={styles.question}>How are you feeling today?</Text>
//       </View>
//       <View style={styles.container}>
//         {moodButtons.map((button) => (
//           <TouchableOpacity
//             key={button.mood}
//             style={[
//               styles.moodButton,
//               selectedMoods.includes(button.mood) ? styles.selectedMoodButton : null,
//               selectedMoods.includes(button.mood) && { backgroundColor: button.bgColor },
//             ]}
//             onPress={() => handleMoodSelection(button.mood)}
//           >
//             <Text style={styles.moodButtonText}>{button.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.sliderContainer}>
//         {selectedMoods.map((mood) => (
//           <React.Fragment key={mood}>
//             <View style={styles.sliderContainer}>
//               <Text style={styles.sliderText}>How {mood} do you feel?</Text>
//               <Text style={styles.sliderValue}>{Math.floor(sliderValues[mood] || 1)}</Text>
//             </View>
//             <Slider
//               style={styles.slider}
//               minimumValue={1}
//               maximumValue={5}
//               minimumTrackTintColor="#000000"
//               maximumTrackTintColor="#000000"
//               value={sliderValues[mood] || 1}
//               onValueChange={(value) => handleSliderValueChange(mood, value)}
//             />
//           </React.Fragment>
//         ))}
//       </View>
//       <Text style={styles.question}>Your Thoughts</Text>
//       <View style={styles.thoughtBody}>
//         <TextInput
//           multiline
//           numberOfLines={4}
//           placeholder="Enter your final thoughts..."
//           value={finalThoughts}
//           onChangeText={(text) => handleFinalThoughtsChange(text)}
//         />
//       </View>
//       <TouchableOpacity
//         style={styles.submitButton}
//         onPress={handleSave}
//         disabled={selectedMoods.length === 0} // Disable the button if no mood is selected
//       >
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//       <StatusBar style="auto" />
//     </ScrollView>
//   );
// }


import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, TextInput, StatusBar } from 'react-native';
<<<<<<< HEAD
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { Dimensions } from 'react-native';

// style(s)
import { styles } from '../styles/MoodQuizStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
=======
import { styles } from '../styles/MoodQuizStyles';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
>>>>>>> mood_quiz

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
    const currentDate = new Date().toISOString(); // Get the current date and format as ISO string
  
    const moodData = {
      day: currentDate,
      mood: selectedMoods,
      moodValue: sliderValues,
      finalThoughts: trimmedFinalThoughts,
    };
  
    try {
<<<<<<< HEAD
      // console.log(data)
      const response = await fetch('https://wellness-server.onrender.com/calendar/addDay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data}),
      });
      console.log(await response.json())
      // console.log(await response.ok)
      // if (response.ok) {
      //   console.log('Data saved successfully for date:', currentDate);
      //   console.log('Data saved:', data);
      // } else {
      //   console.error('Failed to save data:', response);
      // }
=======
      await AsyncStorage.setItem('moodData', JSON.stringify(moodData));
      console.log('Mood data saved successfully!');
>>>>>>> mood_quiz
    } catch (error) {
      console.error('Error saving mood data:', error);
    }
  
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
