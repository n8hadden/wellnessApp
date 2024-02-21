import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles'

export default function Page({route}) {

    return (
        <ScrollView style={styles.cr_contain}>
    
            <View style={styles.inputContain}>
                <Text>Input!</Text>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
