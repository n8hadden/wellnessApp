import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { styles } from '../styles/ChatStyles'

export default function Btn({ onPress, tagName, tagColor, search, suggestion }) {

    return (
        <>
            { search ? 
                <View 
                    style={[styles.tagContainer, { marginTop: 8, height: 60}, tagColor ? { backgroundColor: tagColor } : null]}                    onPress={onPress}
                >
                    <Text style={styles.tagText}>{tagName}</Text> 
                    <TouchableOpacity 
                        onPress={() => { console.log("add")}}
                        style={{
                            width: '30%',
                        }}
                    >
                        <Text 
                            style={{
                                alignSelf: 'flex-end',
                                color: 'rgba(225,225,225,0.9)',
                                fontSize: 18,
                            }}
                        >
                            Add
                        </Text>
                    </TouchableOpacity>
                </View>
                :
                <TouchableOpacity 
                    style={[styles.tagContainer, tagColor ? { backgroundColor: tagColor } : null]}
                    onPress={onPress}
                >
                    <Text style={styles.tagText}>{tagName}</Text> 
                    <TouchableOpacity 
                        onPress={() => { suggestion ? console.log("add") : console.log("discard")}}
                        style={{
                            width: '30%',
                        }}
                    >
                        <Text 
                            style={{
                                alignSelf: 'flex-end',
                                color: 'rgba(225,225,225,0.9)',
                                fontSize: 18,
                            }}
                        >
                            { suggestion ? "Add" : "Discard"}
                        </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            }
        </>
    );
}