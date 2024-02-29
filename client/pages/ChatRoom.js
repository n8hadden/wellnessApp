import { StatusBar } from 'expo-status-bar';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// user context hook
import { useUser } from '../context/UserContext';

// style(s)
import { styles } from '../styles/ChatStyles'; 

// component(s)
import socket from '../components/socket';
import PeerMessage from '../components/PeerMessage';
import UserMessage from '../components/UserMessage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const windowHeight = Dimensions.get('window').height;

export default function ChatRoom({ route }) {
    const { user, setUser } = useUser();

    const { tagName, tagId } = route.params;
    const myInputRef = useRef(null);

    const [inputValue, setInputValue] = useState('');
    const [chats, setChats] = useState([]);
    const [senderInfo, setSenderInfo] = useState([]);
    const [msgId, setMsgId] = useState(); // update manually each run until database is connected

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const addToCustom = (userObject) => { // temp func 
        const updatedChat = [...chats];
        updatedChat.push(userObject);
        setChats(updatedChat);
    }

    const show = () => { // temp func
        console.log("testingArray");
        console.log(chats);
    }

    // const getMsgId = async () => {
    //     try {
    //         fetch('https://wellness-server.onrender.com/user/getUserById', { // Problem with getMessages
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 _id: sender,
    //             }),
    //         })
    //         .then(res => res.json())
    //         .then(async res => {

    //         })  
    //         .catch(err => console.error(err));
    //     } catch (error) {
    //         console.error('Error:', error);
    //         Alert.alert('Error', 'An error occurred. Please try again later.');
    //     }
    // }

    const addToSender = async (sender) => {
        //userObject.sender
        try {
            fetch('https://wellness-server.onrender.com/user/getUserById', { // Problem with getMessages
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: sender,
                }),
            })
            .then(res => res.json())
            .then(async res => {
                const updatedSender = [...senderInfo];
                updatedSender.push({ username: res.user.username, sender: sender, msg_id: msgId });
                setMsgId(prev => prev + 1);
                setSenderInfo(updatedSender)
                console.log("senderData:") 
                console.log(senderInfo); 
            })  
            .catch(err => console.error(err));
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    }

    const findNameById = (senderId) => {
        const sender = senderInfo.find(e => e.sender === senderId);
        return sender ? sender.username : null;
    }

    const getGroupMessages = async () => {
        try {
            fetch('https://wellness-server.onrender.com/chat/getMessages', { // Problem with getMessages
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    group: tagId,
                }),
            })
            .then(res => res.json())
            .then(async res => {
                console.log(res.chats)
                setChats(res.chats)
            })  
            .catch(err => console.error(err));
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    }

    useEffect(() => {
        getGroupMessages();
    }, [])

    useEffect(() => {        
        socket.on("new_chat", (data) => { // The "new_chat" socket event recieves all messages from the room
            const {content, sender, group, msg_id} = data;
            console.log(content + " - new chat"); // LEFT OFF HERE, this seems to only be the most recent message
            // TRYING TO FIGURE OUT HOW TO GET CHAT MESSAGES DATA
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
                    {chats.length !== 0 &&
                        chats.map((messageData, index) => {
                            const msgUserName = findNameById(messageData.sender);
                            console.log("msgUserName:", msgUserName, messageData);

                            const isDifferentSender =
                                index === 0 || chats[index - 1].sender !== messageData.sender;

                            const isCurrentUser = messageData.sender === user.user_id;

                            return (
                                <React.Fragment key={index}>
                                    {!isCurrentUser && (
                                        <>
                                            <UserMessage
                                                message={messageData.content}
                                            />
                                        </>
                                    )}

                                    {isCurrentUser && (
                                        <>
                                            <UserMessage
                                                message={messageData.content}
                                            />
                                            {/* <PeerMessage
                                                message={messageData.content}
                                                username={msgUserName}
                                                sameUser={!isDifferentSender}
                                                profileImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aca833f9-1f8b-40c7-801c-7859070fd37b/d3cx2fp-8d2aaf7b-7fd9-4945-b360-abca60d772e3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FjYTgzM2Y5LTFmOGItNDBjNy04MDFjLTc4NTkwNzBmZDM3YlwvZDNjeDJmcC04ZDJhYWY3Yi03ZmQ5LTQ5NDUtYjM2MC1hYmNhNjBkNzcyZTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GCedvmkI-ftUz8P3IUk4TEc46eYovARAJ-EDEl7vvDQ"
                                            /> */}
                                        </>
                                    )}
                                </React.Fragment>
                            );
                        })
                    }
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
                        sender: user.user_id,
                        group: tagName,
                    }
                    socket.emit("chat", userObject); // The "chat" socket event adds a new message to a room
                    console.log(userObject);
                    getGroupMessages();
                    addToCustom(userObject);
                    addToSender(userObject.sender);
                    show();
                }}>
                    <Ionicons 
                        name="chevron-up-circle" 
                        size={windowHeight * 0.055} 
                        color="#3d3b3c" 
                    />
                </TouchableOpacity> 
            </View>
        </KeyboardAvoidingView>
    );
}
