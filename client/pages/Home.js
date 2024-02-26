import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { styles } from '../styles/HomeStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

// components
import Btn from '../components/HomeBtn';

import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const testName = 'Daniel';

export default function Page({route}) {

    const [affirmation, setAffirmation] = useState(null);

    const navigation = useNavigation();

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
                console.log(userData);
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
                <Text style={styles.introText}>Goodmorning, {testName}</Text>
                <Text style={styles.introText}>Date, Time</Text>
                <Text style={styles.introText}>{affirmation}</Text>
                <Image 
                    style={styles.introImage}
                />
                <Text style={styles.introText}>Daily Affirmation</Text>
            </View>

            <TouchableOpacity 
                onPress={() => {  }}
            >
                <View style={styles.dailyaffirm}>
                    <Text>Daily Affrimation</Text>
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
