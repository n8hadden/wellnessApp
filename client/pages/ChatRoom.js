import { StatusBar } from 'expo-status-bar';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Button,
    Keyboard,
    Dimensions,
    ScrollView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// style(s)
import { styles } from '../styles/ChatStyles'; 

// component(s)
import socket from '../components/socket';
import PeerMessage from '../components/PeerMessage';
import UserMessage from '../components/UserMessage';

const windowHeight = Dimensions.get('window').height;

export default function ChatRoom({ route }) {

    const { tagName, tagId } = route.params;
    const myInputRef = useRef(null);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    useEffect(() => {        
        socket.on("new_chat", (data) => {
            const {content, sender, group} = data;
            console.log(content + " new chat");
        })
    }, [socket]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 0 : -500}
            style={{
                flex: 1,
            }}
        >
            <ScrollView style={styles.cr_contain}>
                <View style={styles.messages}>
                    <PeerMessage
                        message="abc" //{tagId} // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        username="A Platypus"
                        profileImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aca833f9-1f8b-40c7-801c-7859070fd37b/d3cx2fp-8d2aaf7b-7fd9-4945-b360-abca60d772e3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FjYTgzM2Y5LTFmOGItNDBjNy04MDFjLTc4NTkwNzBmZDM3YlwvZDNjeDJmcC04ZDJhYWY3Yi03ZmQ5LTQ5NDUtYjM2MC1hYmNhNjBkNzcyZTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GCedvmkI-ftUz8P3IUk4TEc46eYovARAJ-EDEl7vvDQ"
                    />
                    <UserMessage
                        message="*platypus noises*"
                    />
                    <PeerMessage
                        message="The platypus is one of the few mammals that lays eggs instead of giving birth to live young, making it a monotreme, along with echidnas."
                        username="Dr. Doofenshmirtz "
                        profileImg="https://i.pinimg.com/550x/c4/82/c8/c482c8c448b458fb7358710c341981dc.jpg"
                    />
                    <UserMessage
                        message="Platypus eggs are leathery and about the size of a marble. They are excellent swimmers and spend much of their time in freshwater streams and rivers in eastern Australia, where they use their webbed feet and flat tail to propel themselves through the water."
                    />
                    <UserMessage
                        message="Despite their cuddly appearance, male platypuses have venomous spurs on their hind legs. While not lethal to humans, their venom can cause severe pain and swelling. Platypuses are nocturnal and primarily feed on aquatic invertebrates such as insects, worms, and shrimp. They use their sensitive bills to detect electrical signals produced by their prey in the water."
                    />
                    <PeerMessage
                        message="Chrrr chrrr chrrr"
                        username="Perry the Platypus"
                        profileImg="https://openseauserdata.com/files/eb24512ed311ea7826de01337a4e52ad.jpg"
                    />
                </View>
                <StatusBar style="auto" />
            </ScrollView>
            <View style={styles.inputContain}>
                <View style={styles.textInputContain}>
                    <TextInput
                        value={inputValue} 
                        onChangeText={handleInputChange}
                        style={styles.textInput}
                        ref={myInputRef}
                        placeholder="Message"
                    />
                </View>
                <TouchableOpacity onPress={() => {
                    const userObject = {
                        content: inputValue,
                        sender: 1,
                        group: tagName,
                    }
                    socket.emit("chat", userObject);
                    console.log(userObject);
                }}>
                    <Ionicons 
                        name="chevron-up-circle" 
                        size={windowHeight * 0.055} 
                        color="#3d3b3c" 
                        style={{ 
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    />
                </TouchableOpacity> 
            </View>
        </KeyboardAvoidingView>
    );
}
