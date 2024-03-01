import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// style(s)
import { styles } from '../styles/ProfileStyles';
import { UserProvider } from '../context/UserContext';

// user context hook
import { useUser } from '../context/UserContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Profile() {

    const { user } = useUser();

    const [userTags, setUserTags] = useState([]);
    const [uniqueTags, setUniqueTags] = useState([]);

    useEffect(() => {
        handleTags();
    }, [user]);

    useEffect(() => {
        console.log("Unique Tags:")
        console.log(uniqueTags);
    }, [uniqueTags]);

    const removeDuplicates = (tags) => {
        const unique = [];
        console.log("userTags:")
        console.log(tags)
        tags.forEach(tag => {
            console.log('tag:');
            console.log(tag.tag_name)
            if (!unique.includes(tag.tag_name)) {
                unique.push(tag.tag_name);
            }
        });
        return unique; 
    };

    const handleTags = async () => {
        try {
            const response = await fetch('https://wellness-server.onrender.com/tag/getTags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.user_id,
                }),
            });
            const res = await response.json();
            setUserTags(res.tags);
            setUniqueTags(removeDuplicates(res.tags));
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    };
    
    const Tag = ({ text }) => {
        const [boxWidth, setBoxWidth] = useState(null);
      
        const measureText = (event) => {
          const { width } = event.nativeEvent.layout;
          setBoxWidth(width);
        };
      
        return (
            <View style={{ padding: 10, borderWidth: 1, borderColor: '#35a7ff', borderRadius: 5 }}>
                <Text 
                    style={{ color: '#35a7ff', textDecorationLine: 'none', }} 
                    onLayout={measureText}
                >
                    {text}
                </Text>
                {boxWidth && <View style={{ width: boxWidth, height: 1, }} />}
            </View>
        );
    };

    useEffect(() => {
        handleTags();
    }, []);

    return (
        <>
            <View style={{
                height: windowHeight * 0.8,
                width: windowWidth,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    height: windowHeight * 0.7,
                    paddingVertical: windowHeight * 0.04,
                    width: windowWidth * 0.9,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 10,
                    alignItems: 'center',
                }}>
                    <Image
                        // source={{ uri: user.user_profile_picture }} 
                        style={{
                            width: windowHeight * 0.18,
                            aspectRatio: 1,
                            backgroundColor: 'orange',
                            borderRadius: 100,
                        }} 
                    />
                    <Text style={{
                        fontSize: 27,
                        color: 'black',
                        width: windowWidth * 0.7,
                        textAlign: 'center',
                        marginVertical: windowHeight * 0.015,
                    }}>
                        {user.username}
                    </Text>
                    <ScrollView contentContainerStyle={{
                        width: windowWidth * 0.7,
                        marginVertical: windowHeight * 0.02,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 7,
                        justifyContent: 'center',
                    }}>
                        {uniqueTags.length !== 0 || uniqueTags[0] !== undefined ? (
                            uniqueTags.map((tag, index) => (
                                <Tag key={index} text={tag} />
                            ))
                            ) : ( <></> )
                        }
                        {/* <Tag text="Photography" /> */}
                        {/* <Tag text="Crocheting" />
                        <Tag text="Fitness Training" />
                        <Tag text="Yoga" />
                        <Tag text="Podcasts" />
                        <Tag text="Video Games" />
                        <Tag text="Baking" />
                        <Tag text="Crocheting" />
                        <Tag text="Cooking" />
                        <Tag text="Video Games" />
                        <Tag text="Baking" />
                        <Tag text="Crocheting" />
                        <Tag text="Cooking" />
                        <Tag text="Yoga" />
                        <Tag text="Knitting" />
                        <Tag text="Video Games" />
                        <Tag text="Cycling" />
                        <Tag text="Crocheting" />
                        <Tag text="Cooking" />
                        <Tag text="Yoga" />
                        <Tag text="Knitting" />
                        <Tag text="Video Games" />
                        <Tag text="Baking" />
                        <Tag text="Crocheting" />
                        <Tag text="Cooking" />
                        <Tag text="Yoga" />
                        <Tag text="Knitting" />
                        <Tag text="Video Games" /> */}
                    </ScrollView>
                </View>
            </View>
        </>
    );
}
