import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/HomeStyles'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.dailyaffirm}>
                <Text>Daily Affrimation</Text>
            </View>
            
            <View style={styles.tempvid}>
                <Text style={{ color: "#f9fbfd"}}>Video Placeholder</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Ionicons name="calendar" size={40} color="#ffffff" style={styles.icon} />
                        <Text style={styles.buttonText}>Mood Calendar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Ionicons name="chatbubbles" size={40} color="#ffffff" style={styles.icon} />
                        <Text style={styles.buttonText}>Chat</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Ionicons name="document-text" size={40} color="#ffffff" style={styles.icon} />
                        <Text style={styles.buttonText}>Resources</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}