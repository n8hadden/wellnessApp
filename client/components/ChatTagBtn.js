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
            {/* <View style={styles.tagContain_1}>
                <Text style={styles.tagText_1}>{tagName}</Text> 
            </View>
            <View style={styles.tagContain_2}>
                <Text style={styles.tagText}>Find</Text> 
            </View>
            <View style={styles.tagContain_3}>
                <Text style={styles.tagText}>Chat</Text> 
            </View> */}
        </TouchableOpacity>
    );
}