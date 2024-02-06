import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/HomeStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const testName = 'Daniel';
const moodQuiz = "Quiz";

export default function Page({route}) {

    const navigation = useNavigation();
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{
                width: windowWidth * 0.85,
                backgroundColor: 'blue',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 20,
                    color: 'white',
                    marginTop: 20,
                    marginBottom: 20,
                }}>Goodmorning {testName}</Text>
            </View>

            <View style={styles.dailyaffirm}>
                <Text>Daily Affrimation</Text>
            </View>
            
            <View style={styles.tempvid}>
                <Text style={{ color: "#f9fbfd"}}>Video Placeholder</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Ionicons 
                            name="calendar" 
                            size={40} color="#ffffff" style={styles.icon} 
                        />
                        <Text style={styles.buttonText}>Mood Calendar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {  navigation.navigate('MoodQuiz', {name: "Daniel"}); }}>
                    <View style={styles.button}>
                        <Ionicons 
                            name="school" 
                            size={40} color="#ffffff" style={styles.icon} 
                        />
                        <Text style={styles.buttonText}>Mood Test</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Ionicons 
                            name="chatbubbles" 
                            size={40} 
                            color="#ffffff" 
                            style={styles.icon} 
                        />
                        <Text style={styles.buttonText}>Chat</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => { /* handle button press */ }}
            >
                <View>
            
                    <View style={styles.button}>
                        <Ionicons 
                            name="document-text" 
                            size={40} 
                            color="#ffffff" 
                            style={styles.icon} 
                        />
                        <Text style={styles.buttonText}>Resources</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}
