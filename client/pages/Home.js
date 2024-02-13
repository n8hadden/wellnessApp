import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/HomeStyles'

// components
import Btn from '../components/HomeBtn';

import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const testName = 'Daniel';

export default function Page({route}) {

    const navigation = useNavigation();
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.introContainer}>
                <Text style={styles.introText}>Goodmorning, {testName}</Text>
                <Text style={styles.introText}>Date, Time</Text>
                <Text style={styles.introText}>Weather</Text>
                <Image 
                    style={styles.introImage}
                />
                <Text style={styles.introText}>Message</Text>
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
