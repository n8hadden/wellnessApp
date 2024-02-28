import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useContext, useState, useCallback, useEffect } from 'react';
import { styles } from '../styles/ChatStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import socket from '../components/socket';

import { useUser } from '../context/UserContext';

// pages
import ChatRoom from '../pages/ChatRoom';

// components
import TagContainer from '../components/ChatTagBtn'; 
import SearchBar from '../components/SearchBar';

export default function Page({route}) {

    const navigation = useNavigation();
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [userTags, setUserTags] = useState([]);

    const { user, setUser } = useUser();

    useFocusEffect(
        useCallback(() => {
            if (user == null || user == undefined) {
                Alert.alert(
                'Requires An Account',
                'Please Sign In And/Or Create An Account',
                [
                    {
                    text: 'OK',
                    onPress: () => {
                        console.log('OK Pressed');
                        navigation.navigate('Home', { screen: 'SignInScreen' });
                    },
                    },
                ],
                { cancelable: false }
                );
            }
        }, [user, navigation]) // Make sure to include user and navigation in the dependencies array
    );

    // const handleTags = async () => {      
    //     const id = await AsyncStorage.getItem('userId');
    //     console.log(id, " id in ChatTag.js");
    //     if(id == undefined)
    //         return;
    //     try {
    //         fetch('https://wellness-server.onrender.com/tag/getTags', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 userId: id,
    //             }),
    //         })
    //         .then(res => res.json())
    //         .then(async res => {
    //             const tags = res;
    //             setUserTags(tags);
    //         })
    //         .catch(err => console.error(err));
    //     } catch (error) {
    //         console.error('Error:', error);
    //         Alert.alert('Error', 'An error occurred. Please try again later.');
    //     }
    // };
    // handleTags();

    return (
        <>
            <SearchBar />
            { user != null || user != undefined ?
                <ScrollView contentContainerStyle={styles.container}>
                    <TagContainer
                        tagName="Comp Sci"
                        tagColor="#525b76"
                    />
                    <TagContainer
                        tagName="Artist" // will add [info] to database
                        tagColor="#64b6ac" // will add [info] to database
                        onPress={() => {
                            socket.emit("join", {group: "Artist"});
                            navigation.navigate('ChatRoomScreen', { tagId: 'df', tagName: 'Artist' } );
                        }}
                        // onPress={() => navigation.navigate('Chat', {screen: 'ChatRoomScreen', tagId: '1'})}
                    />
                    <TagContainer
                        tagName="Basketball"
                        tagColor="#197278"
                    />
                    <TagContainer
                        tagName="Bird Watching"
                        tagColor="#5f634f"
                    />
                    <TouchableOpacity 
                        onPress={() => showSuggestion ? setShowSuggestion(false) : setShowSuggestion(true) }
                    >
                        <Text style={styles.suggestText}>{ showSuggestion ? "Do not show suggestions" : "Show suggestions" }</Text> 
                    </TouchableOpacity>
                    { showSuggestion ? 
                        <>
                            <TagContainer
                                tagName="Cooking"
                                tagColor="#145c9e"
                                suggestion={true}
                            />
                            <TagContainer
                                tagName="Reading"
                                tagColor="#4056f4"
                                suggestion={true}
                            />
                            <TagContainer
                                tagName="Crocheting"
                                tagColor="#ce2d4f"
                                suggestion={true}
                            />
                            <TagContainer
                                tagName="Baking"
                                tagColor="#007ea7"
                                suggestion={true}
                            />
                        </>
                        : 
                        <></> 
                    }

                    <StatusBar style="auto" />
                </ScrollView>
                :
                <></>
            }
        </>
    );
}