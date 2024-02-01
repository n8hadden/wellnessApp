import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import React from 'react';
import { styles } from '../styles/HomeStyles'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Chat() {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Chat Page</Text>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
