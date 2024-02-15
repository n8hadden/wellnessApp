import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles'

export default function Page({route}) {

    return (
        <ScrollView style={styles.body}>
            <View contentContainerStyle={styles.container}>
                
                
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
