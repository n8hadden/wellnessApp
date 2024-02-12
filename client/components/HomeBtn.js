import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { styles } from '../styles/HomeStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Btn({ onPress, iconImg, iconColor, text }) {

    return (
        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={onPress}
        >
            <View style={styles.btnContent}>
                <Ionicons 
                    name={iconImg} /* icon image prop */
                    size={40} /* size of icon */
                    color={iconColor} /* icon color prop */
                    style={styles.icon} 
                />
                <Text style={styles.btnText}>{text}</Text> 
            </View>
        </TouchableOpacity>
    );
}