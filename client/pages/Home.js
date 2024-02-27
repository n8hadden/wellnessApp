import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../styles/HomeStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { io } from 'socket.io-client';
import { baseURL } from '../util';

import axios from 'axios';

// components
import Btn from '../components/HomeBtn';

import { useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { color } from 'react-native-elements/dist/helpers';

const windowWidth = Dimensions.get('window').width;

export default function Page({ route }) {

    const [weatherIcon, setWeatherIcon] = useState(null);
    const [affirmation, setAffirmation] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const navigation = useNavigation();

    const socket = useRef();

    const handleaffirmation = async () => {      
        const id = await AsyncStorage.getItem('userId');
        console.log(id, " id");
        if(id == undefined)
            return;
        try {
            fetch('https://wellness-server.onrender.com/user/getUserById', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                }),
            })
            .then(res => res.json())
            .then(async res => {
                const user = res;
                setUserName(user.username);
                console.log("username: ");
                console.log(user);
            })
            .catch(err => console.error(err));
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
        try {
            fetch('https://wellness-server.onrender.com/affirmation/get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: id,
                }),
            })
            .then(res => res.json())
            .then(async res => {
                const affirmation = res;
                setAffirmation(affirmation.affirmation);
            })
            .catch(err => console.error(err));
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    };
    handleaffirmation();

    useEffect(() => {
        console.log("Affirmation: " + affirmation);
    }, [affirmation]);
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.introContainer}>
                <Text style={styles.introText}>Goodmorning, {userName}</Text>
                <Text style={styles.introText}>{/* Date, Weather */}</Text>
                <View style={styles.introImage}>
                    {/* <MaterialCommunityIcons 
                        name={weatherNames[0]}
                        size={120} 
                        color="white" 
                    /> */}
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
            <Btn 
                onPress={() => { navigation.navigate('Home'); }}
                iconImg="document-text"
                iconColor="#ffffff"
                text="Resources"
            />
            <Btn 
                onPress={() => { navigation.navigate('Home', {screen: 'SignInScreen'}); }}
                iconImg="document-text"
                iconColor="#ffffff"
                text="Sign In"
            />
            <Btn 
                onPress={() => { navigation.navigate('Home', {screen: 'SignUpScreen'}); }}
                iconImg="document-text"
                iconColor="#ffffff"
                text="Sign Up"
            />
        </ScrollView>
    );
}