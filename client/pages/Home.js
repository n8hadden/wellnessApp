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
import YoutubePlayer from 'react-native-youtube-iframe';


import { io } from 'socket.io-client';
import { baseURL } from '../util';

import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// style(s)
import { styles } from '../styles/HomeStyles';

// component(s)
import Btn from '../components/HomeBtn';

// user context hook
import { useUser } from '../context/UserContext';

export default function Home({ route }) {

    const clearAsyncStorage = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    };

    function confirmLogOut() {
        Alert.alert(
            'Confirm Logout',
            'Are you sure you want to logout?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'Yes', onPress: () => {
                setUser(null);  
                clearAsyncStorage(); // ask Edward if this is ok to do
                navigation.navigate('Home');
              }},
            ],
            { cancelable: false }
        );
    }

    const [weatherIcon, setWeatherIcon] = useState(null);
    const [affirmation, setAffirmation] = useState(null);
    const navigation = useNavigation();

    const socket = useRef();

    const { user, setUser } = useUser();

    const handleaffirmation = async () => {      
        const id = await AsyncStorage.getItem('userId');
        if(id == undefined)
            return;
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
                // console.log(res)
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
        // console.log("Affirmation: " + affirmation);
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
                <YoutubePlayer
                    style={[styles.tempvidContainer, {  }]}
                    height={windowHeight * .25}
                    width={windowWidth * .9}
                    // play={playing}
                    videoId={'Up5Isb-U7Ow'}
                />
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
            { user ? 
                <>
                    <Btn 
                        onPress={() => { navigation.navigate('Home', {screen: 'UserProfileScreen'}) }}
                        iconImg="person"
                        iconColor="#ffffff"
                        text="User Profile"
                    />
                    <Btn 
                        onPress={() => { confirmLogOut(); }}
                        iconImg="log-out"
                        iconColor="#ffffff"
                        text="Log Out"
                    />
                </>
                :
                <></>
            }
        </ScrollView>
    );
}