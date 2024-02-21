import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity  } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PeerMessage from '../components/PeerMessage';
// import UserMessage from '../components/UserMessage';

const windowHeight = Dimensions.get('window').height;

export default function Page({route}) {

    return (
        <>
            <ScrollView style={styles.cr_contain}>
                <View style={styles.messages}>
                    <PeerMessage
                        message="hello world"
                        username="user1"
                        profileImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aca833f9-1f8b-40c7-801c-7859070fd37b/d3cx2fp-8d2aaf7b-7fd9-4945-b360-abca60d772e3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FjYTgzM2Y5LTFmOGItNDBjNy04MDFjLTc4NTkwNzBmZDM3YlwvZDNjeDJmcC04ZDJhYWY3Yi03ZmQ5LTQ5NDUtYjM2MC1hYmNhNjBkNzcyZTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GCedvmkI-ftUz8P3IUk4TEc46eYovARAJ-EDEl7vvDQ"
                    />            
                </View>
                <StatusBar style="auto" />
            </ScrollView>
            <View style={styles.inputContain}>
                <View style={styles.input}>
                    <Text>Hello world!</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons 
                        name="caret-forward-circle-outline" /* icon image prop */
                        size={windowHeight * 0.055} /* size of icon */
                        color="white" /* icon color prop */
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}
