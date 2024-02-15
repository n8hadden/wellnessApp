import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles'

export default function Page({route}) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.chats}>

            </View>
            <Text style={styles.title}>Chat Page</Text>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
