import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/ChatStyles'
import { useNavigation } from '@react-navigation/native';

// pages
import ChatRoom from '../pages/ChatRoom';

// components
import TagContainer from '../components/ChatTagBtn'; 

export default function Page({route}) {

    const navigation = useNavigation();
    const [showSuggestion, setShowSuggestion] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Search Bar - To Be Implemented */}

            <TagContainer
                tagName="Platypus Talk" // will add [info] to database
                tagColor="#64b6ac" // will add [info] to database
                onPress={() => navigation.navigate('ChatRoomScreen', { tagId: 'df' } )}
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
