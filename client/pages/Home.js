import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { styles } from '../styles/HomeStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// components
import Btn from '../components/HomeBtn';

import { useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { color } from 'react-native-elements/dist/helpers';

const windowWidth = Dimensions.get('window').width;
const user_name = 'Daniel';

export default function Page({ route }) {

    const [weatherIcon, setWeatherIcon] = useState(null);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [affirmation, setAffirmation] = useState(null);
    const navigation = useNavigation();

    const currentDate = new Date();
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    const weatherNames = [
        "weather-cloudy", "weather-fog", "weather-hail", 
        "weather-lightning", "weather-lightning-rainy", "weather-night", 
        "weather-night-partly-cloudy", "weather-partly-cloudy", "weather-partly-lightning", 
        "weather-partly-rainy", "weather-partly-snowy", "weather-partly-snowy-rainy",
        "weather-pouring", "weather-rainy", "weather-snowy",
        "weather-snowy-heavy", "weather-snowy-rainy", "weather-sunny", 
        "weather-sunset", "weather-sunset-down", "weather-sunset-up", 
        "weather-windy"
    ]
  
    const formattedDate = `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;  

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    useEffect(() => {
        console.log(affirmation);
    }, [affirmation]);

    const handleaffirmation = async () => {
        try {
            // Make an HTTP request to the /user/login endpoint
            const response = await fetch('https://wellness-server.onrender.com/affirmation/get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: 1, // user_id: user_id,
                }),
            });
            if (response.ok) {
                const userData = await response.json();
                setAffirmation(userData.affirmation);
                // console.log(userData);
            } else {
                Alert.alert('Error', 'Invalid username or password. Please try again.');
            }
        } catch (error) {
          console.error('Error:', error);
          Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    };

    handleaffirmation();
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.introContainer}>
                <Text style={styles.introText}>Goodmorning, {user_name}</Text>
                <Text style={styles.introText}>{/* Date, Weather */}{formattedDate}</Text>
                <View style={styles.introImage}>
                    <MaterialCommunityIcons 
                        name={weatherNames[0]}
                        size={120} 
                        color="white" 
                    />
                </View>
            </View>

            <TouchableOpacity 
                onPress={() => {  }}
            >
                <View style={styles.dailyaffirm}>
                    <Text style={{
                        fontSize: 23,
                        fontWeight: 500,
                        color: 'white',
                        textAlign: 'center',
                    }}>Daily Affirmation: {affirmation}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => {  }}
            >
                <View style={styles.tempvidContainer}>
                    <Text style={{ color: "#f9fbfd"}}>Video Placeholder</Text>
                </View>
            </TouchableOpacity>

            <Btn 
                onPress={() => { navigation.navigate('Home'); }}
                iconImg="calendar"
                iconColor="#ffffff"
                text="Mood Calender"
            />
            <Btn 
                onPress={() => { navigation.navigate('Home', {screen: 'MoodQuizScreen'}); }}
                iconImg="school"
                iconColor="#ffffff"
                text="Mood Quiz"
            />
            <Btn 
                onPress={() => { navigation.navigate('Home'); }}
                iconImg="document-text"
                iconColor="#ffffff"
                text="Resources"
            />
        </ScrollView>
    );
}