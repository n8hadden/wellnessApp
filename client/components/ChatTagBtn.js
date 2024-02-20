import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles'

export default function Btn({ onPress, tagName, tagColor }) {

    return (
        <TouchableOpacity 
            style={[styles.tagContainer, tagColor ? { backgroundColor: tagColor } : null]}
            onPress={onPress}
        >
            <Text style={styles.tagText}>{tagName}</Text> 
        </TouchableOpacity>
    );
}