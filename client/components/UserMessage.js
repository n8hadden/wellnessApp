import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles';

export default function Message({ message }) {

    return (
        <>
            <View style={styles.user_container}>
                <View style={styles.user_messages}>
                    <View style={styles.user_message}>
                        <Text style={styles.user_message_text}>{message}</Text>
                    </View>
                </View>
            </View>
        </>
    );
}
