import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity  } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles';

const windowHeight = Dimensions.get('window').height;

export default function Message({ message, username, profileImg }) {

    return (
        <>
            <View style={styles.peer_container}>
                {/*
                  * Need to set a restriction that only when a new user (username) is present, 
                  * then you add the profile picture, otherwise, keep sending messages under the same user 
                  */}
                <Image
                    source={{ uri: profileImg }} 
                    style={styles.profileImg} 
                />
                <View style={styles.peer_messages}>
                    <View style={styles.peer_username}>
                        { username ? 
                            <Text style={styles.peer_username_text}>{username}</Text>
                            :
                            <></>
                        }
                    </View>
                    <View style={styles.peer_message}>
                        <Text style={styles.peer_message_text}>dfj</Text>
                    </View>

                </View>
            </View>
        </>
    );
}
