import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity  } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles';

const windowHeight = Dimensions.get('window').height;

export default function Message({ message, username, profileImg }) {

    return (
        <>
            <View style={styles.peer_container}>
                <Image 
                    source={{ uri: profileImg }} 
                    style={styles.profileImg} 
                />
                <View style={styles.peer_messages}>
                    <Text style={styles.peer_message}>{message}</Text>
                    <Text style={styles.peer_message}>{message}</Text>
                    <Text style={styles.peer_message}>{message}</Text>
                    <Text style={styles.peer_message}>{message}</Text>
                </View>
            </View>
        </>
    );
}
