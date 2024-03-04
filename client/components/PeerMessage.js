import { Text, View, Image } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles';

export default function Message({ message, username, profileImg, sameUser }) {

    return (
        <>
            { sameUser ?
                <View style={styles.peer_container_su}>
                    <View style={styles.peer_messages_su}>
                        <View style={styles.peer_message_su}>
                            <Text style={styles.peer_message_text_su}>{message}</Text>
                        </View>
                    </View>
                </View>
                :
                <View style={styles.peer_container}>
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
                            <Text style={styles.peer_message_text}>{message}</Text>
                        </View>

                    </View>
                </View>
            }
        </>
    );
}
