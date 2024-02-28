import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { color } from 'react-native-elements/dist/helpers';

import { io } from 'socket.io-client';
import { baseURL } from '../util';

import axios from 'axios';

// style(s)
import { styles } from '../styles/HomeStyles';

// component(s)
import Btn from '../components/HomeBtn';

// user context hook
import { useUser } from '../context/UserContext';

const windowWidth = Dimensions.get('window').width;

export default function Page({ route }) {

    const [weatherIcon, setWeatherIcon] = useState(null);
    const [affirmation, setAffirmation] = useState(null);
    // const [userId, setUserId] = useState(null); // deprecated
    // const [userName, setUserName] = useState(null); // deprecated
    const navigation = useNavigation();

    const socket = useRef();

    const { user, setUser } = useUser();
    console.log("Context: ");
    console.log(user);

    const handleaffirmation = async () => {      
        const id = await AsyncStorage.getItem('userId');
        if(id == undefined)
            return;
        // try { /* Don't really need this anymore because I [Daniel] implemented a useContext hook for storing user information locally */
        //     fetch('https://wellness-server.onrender.com/user/getUserById', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             _id: id,
        //         }),
        //     })
        //     .then(res => res.json())
        //     .then(async res => {
        //         const user = res && res.user; // Check if res and res.user exist
        //         if (!user) {
        //             console.log("User not found");
        //             return;
        //         }
        //         setUserName(user.username);
        //     })
        //     .catch(err => {
        //         console.log("the error");
        //         console.error(err);
        //     });
        // } catch (error) {
        //     console.error('Error:', error);
        //     Alert.alert('Error', 'An error occurred. Please try again later.');
        // }
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
            {
                user ? 
                <>
                    <View style={styles.introContainer}>
                        <Text style={styles.introText}>Goodmorning, {user ? user.username : <></>}</Text>
                        <Text style={styles.introText}>Forecast: Cloudy Weather</Text>
                        <View style={styles.introImage}>
                            <MaterialCommunityIcons 
                                name="weather-cloudy"
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
                </>
                : // if user == false
                <></>
            }

            <TouchableOpacity 
                onPress={() => {  }}
            >
                <View style={styles.tempvidContainer}>
                    <Text style={{ color: "#f9fbfd"}}>Video Placeholder</Text>
                </View>
            </TouchableOpacity>
            
            { !user ? 
                <>
                    <Btn 
                        onPress={() => { navigation.navigate('Home', {screen: 'SignInScreen'}); }}
                        iconImg="log-in"
                        iconColor="#ffffff"
                        text="Sign In"
                    />
                    <Btn 
                        onPress={() => { navigation.navigate('Home', {screen: 'SignUpScreen'}); }}
                        iconImg="create"
                        iconColor="#ffffff"
                        text="Sign Up"
                    />
                </>
                : 
                <></>
            }
            <Btn 
                onPress={() => { navigation.navigate('Home', {screen: 'MoodCalendarScreen'}); }}
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
            { user ? 
                <Btn 
                    onPress={() => { 
                        setUser(null);  
                        navigation.navigate('Home');
                    }}
                    iconImg="log-out"
                    iconColor="#ffffff"
                    text="Log Out"
                />
                :
                <></>
            }
        </ScrollView>
    );
}