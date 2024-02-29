import { View, TouchableOpacity, Text } from 'react-native';
import React, { useEffect } from 'react';

// style(s)
import { styles } from '../styles/ChatStyles'

// user context hook
import { useUser } from '../context/UserContext';


export default function Btn({ onPress, tagName, tagId, tagColor, search, suggestion }) {

    const { user, setUser } = useUser();

    useEffect(() => {
        console.log("user data");
        console.log(user)
    }, [setUser]);

    const updateUserTags = (newTagId) => {
        const updatedUser = { ...user };
        updatedUser.tags.push(newTagId);
        setUser(updatedUser);
    }

    const addTag = async (tag_id) => {
        try {
            fetch('https://wellness-server.onrender.com/tag/addTag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.user_id,
                    tagId: tag_id,
                }),
            })
            .then(res => res.json())
            .then(async res => {
                updateUserTags(tag_id);
            })
            .catch(err => console.error(err));
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    }

    return (
        <>
            { search ? 
                <View 
                    style={[styles.tagContainer, { marginTop: 8, height: 60}, tagColor ? { backgroundColor: tagColor } : null]}                    onPress={onPress}
                >
                    <Text style={styles.tagText}>{tagName}</Text> 
                    <TouchableOpacity 
                        onPress={() => { 
                            console.log("tag ID");
                            console.log(tagId);
                            addTag(tagId);
                        }}
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
                : suggestion ? 
                    <View 
                        style={[styles.tagContainer, tagColor ? { backgroundColor: tagColor } : null]}
                    >
                        <Text style={styles.tagText}>{tagName}</Text> 
                        <TouchableOpacity 
                            onPress={async() => { 
                                console.log("tag ID")
                                console.log(tagId)
                                addTag(tagId);
                            }}
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
                            onPress={() => { 
                                console.log("tag ID");
                                console.log(tagId);
                                addTag(tagId);
                            }}
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
                                Discard
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
            }
        </>
    );
}