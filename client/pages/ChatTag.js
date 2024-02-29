import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import socket from '../components/socket';

// user context hook
import { useUser } from '../context/UserContext';

// style(s)
import { styles } from '../styles/ChatStyles';

// page(s)
import ChatRoom from '../pages/ChatRoom';

// component(s)
import TagContainer from '../components/ChatTagBtn';
import SearchBar from '../components/SearchBar';

export default function ChatTag({route}) {

    const navigation = useNavigation();
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [userTags, setUserTags] = useState([{}]);

    const { user } = useUser();

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
                        navigation.navigate('Home', { screen: 'SignInScreen' });
                    },
                    },
                ],
                { cancelable: false }
                );
            }
        }, [user, navigation]) // Make sure to include user and navigation in the dependencies array
    );

    const getTagIdByTagName = async (tagName) => {
        if (user) {
            try {
                fetch('https://wellness-server.onrender.com/tag/getTagIdByTagName', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: tagName,
                    }),
                })
                .then(res => res.json())
                .then(async res => {
                    console.log("getTagIdByTagName")
                    console.log(res)
                })
                .catch(err => console.error(err));
            } catch (error) {
                console.error('Error:', error);
                Alert.alert('Error', 'An error occurred. Please try again later.');
            }
        }
    }

    const getTagNameById = async (tagId_) => {
        if (user) {
            try {
                fetch('https://wellness-server.onrender.com/tag/getTagNameById', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: tagId_
                    }),
                })
                .then(res => res.json())
                .then(async res => {
                    console.log("getTagNameById");
                    console.log(res);
                })
                .catch(err => console.error(err));
            } catch (error) {
                console.error('Error:', error);
                Alert.alert('Error', 'An error occurred. Please try again later.');
            }
        }
    }

    const handleTags = async () => {
        if (user) {
            try {
                fetch('https://wellness-server.onrender.com/tag/getTags', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: user.user_id,
                    }),
                })
                .then(res => res.json())
                .then(async res => {
                    const tags = res;
                    setUserTags(tags.tags);
                    // console.log(user.user_id);
                    // console.log("tags: ");
                    // console.log(tags.tags); 
                })
                .catch(err => console.error(err));
            } catch (error) {
                console.error('Error:', error);
                Alert.alert('Error', 'An error occurred. Please try again later.');
            }
        }
    }

    useEffect(() => {
        handleTags();
    }, [user]);

    useEffect(() => {
        handleTags();
    }, []);

    // useEffect(() => {
    //     handleTags();
    // }, [user]);

    // const suggestedTags = async () => {
    //     return (
    //         <TagContainer
    //             tagId={15}
    //             tagName="Cycling"
    //             suggestion={true}
    //         />
    //     )
    // }

    // useEffect(() => {
        
    // }, [showSuggestion])

    return (
        <>
            <SearchBar />
            { user ?
                <ScrollView contentContainerStyle={styles.container}>
                    {userTags != null && userTags.length !== 0 &&
                        userTags.map((tag, index) => (
                            <TagContainer
                                key={index}
                                tagName={tag.tag_name}
                                tagId={tag.tag_id}
                                onPress={() => {
                                    // console.log("HERE:")
                                    // console.log(index, tag);
                                    getTagIdByTagName(tag.tag_name);
                                    getTagNameById(tag.tag_id);
                                    socket.emit("join", {group: tag.tag_name});
                                    navigation.navigate(`ChatRoom_${tag.tag_id}`, { tagId: tag.tag_id, tagName: tag.tag_name } );
                                }}
                            />
                    ))}
                    {/* <TagContainer
                        tagName={"Artist"}
                        tagId={1}
                        onPress={() => {
                            console.log("HERE:")
                            console.log(index, tag);
                            socket.emit("join", {group: "Artist"});
                            navigation.navigate(`ChatRoom_${1}`, { tagId: 1, tagName: "Artist" } );
                        }}
                    /> */}
                    
                    {/* <TouchableOpacity 
                        onPress={() => showSuggestion ? setShowSuggestion(false) : setShowSuggestion(true) }
                    >
                        <Text style={styles.suggestText}>{ showSuggestion ? "Do not show suggestions" : "Show suggestions" }</Text> 
                    </TouchableOpacity>
                    { showSuggestion ? 
                        suggestedTags()
                        : 
                        <></> 
                    } */}
                    <StatusBar style="auto" />
                </ScrollView>
                :
                <></>
            }
        </>
    );
}