import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/ChatStyles'
import { useNavigation } from '@react-navigation/native';
import socket from '../components/socket';

// pages
import ChatRoom from '../pages/ChatRoom';

// components
import TagContainer from '../components/ChatTagBtn'; 

export default function Page({route}) {

    const navigation = useNavigation();
    const [showSuggestion, setShowSuggestion] = useState(false);

    // const handleTags = async () => {      
    //     const id = await AsyncStorage.getItem('userId');
    //     console.log(id, " id");
    //     if(id == undefined)
    //         return;
    //     try {
    //         fetch('https://wellness-server.onrender.com/user/getUserById', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 id: id,
    //             }),
    //         })
    //         .then(res => res.json())
    //         .then(async res => {
    //             const user = res;
    //             setUserName(user.username);
    //             console.log("username: ");
    //             console.log(user);
    //         })
    //         .catch(err => console.error(err));
    //     } catch (error) {
    //         console.error('Error:', error);
    //         Alert.alert('Error', 'An error occurred. Please try again later.');
    //     }
    //     try {
    //         fetch('https://wellness-server.onrender.com/affirmation/get', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 user_id: id,
    //             }),
    //         })
    //         .then(res => res.json())
    //         .then(async res => {
    //             const affirmation = res;
    //             setAffirmation(affirmation.affirmation);
    //         })
    //         .catch(err => console.error(err));
    //     } catch (error) {
    //         console.error('Error:', error);
    //         Alert.alert('Error', 'An error occurred. Please try again later.');
    //     }
    // };
    // handleTags();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Search Bar - To Be Implemented */}

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
                tagName="Comp Sci"
                tagColor="#525b76"
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
                    />
                    <TagContainer
                        tagName="Reading"
                        tagColor="#4056f4"
                    />
                    <TagContainer
                        tagName="Crocheting"
                        tagColor="#ce2d4f"
                    />
                    <TagContainer
                        tagName="Baking"
                        tagColor="#007ea7"
                    />
                </>
                : 
                <></> 
            }

            <StatusBar style="auto" />
        </ScrollView>
    );
}
