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
    const [msgId, setMsgId] = useState(); // update manually each run until database is connected // currently set to undefined

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const addToSender = async (sender) => {
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
                // console.log("senderData:") 
                // console.log(senderInfo); 
            })  
            .catch(err => console.error(err));
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    }

    // const findNameById = (senderId) => {
    //     const sender = senderInfo.find(e => e.sender === senderId);
    //     return sender ? sender.username : null;
    // }
    const findNameById = (senderId) => {
        const sender = senderInfo.find(e => e.sender === senderId);
        return sender ? sender.username : "User";
    }

    const getGroupMessages = async () => {
        try {
            fetch('https://wellness-server.onrender.com/chat/getMessages', {
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
            // console.log(data + " - new chat"); 
        });
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
                            const msgUserName = findNameById(messageData.sender_id);

                            const isDifferentSender =
                                index === 0 || chats[index - 1].sender_id !== messageData.sender_id;

                            const isCurrentUser = messageData.sender_id === user.user_id;
                            return (
                                <React.Fragment key={index}>
                                    {!isCurrentUser && isDifferentSender && (
                                        <>
                                            <PeerMessage
                                                message={messageData.content}
                                                username={msgUserName}
                                                profileImg="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
                                            />
                                        </>
                                    )}

                                    {!isCurrentUser && !isDifferentSender && (
                                        <>
                                            <PeerMessage
                                                message={messageData.content}
                                                sameUser={true}
                                                profileImg="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
                                            />
                                        </>
                                    )}

                                    {isCurrentUser && (
                                        <>
                                            <UserMessage
                                                message={messageData.content}
                                            />
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
                    getGroupMessages();
                    addToSender(userObject.sender);
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
