import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/HomeStyles'
import { useNavigation } from '@react-navigation/native';

export default function Btn({ onPressFunc }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => { onPressFunc }}
        >
            <View>
                <View style={styles.button}>
                    
                </View>
            </View>
        </TouchableOpacity>
    );
}