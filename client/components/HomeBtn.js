import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// style(s)
import { styles } from '../styles/HomeStyles'

export default function Btn({ onPress, iconImg, iconColor, text }) {

    return (
        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={onPress}
        >
            <View style={styles.btnContent}>
                <Ionicons 
                    name={iconImg} 
                    size={40}
                    color={iconColor}
                    style={styles.icon} 
                />
                <Text style={styles.btnText}>{text}</Text> 
            </View>
        </TouchableOpacity>
    );
}