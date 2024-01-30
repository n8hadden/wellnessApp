// npx expo start --tunnel

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import React from 'react';
import { styles } from '../styles/HomeStyles'

export default function Home() {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.font}>fortnite</Text>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
