import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
// import Chip from '@mui/material/Chip';
// import Grid from '@mui/material/Grid'; // Grid version 1

// style(s)
import { styles } from '../styles/ProfileStyles';
import { UserProvider } from '../context/UserContext';

// user context hook
import { useUser } from '../context/UserContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Profile() {

    const { user, setUser } = useUser();

    const [userTags, setUserTags] = useState([]);
    const [uniqueTags, setUniqueTags] = useState([]);

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

    const removeDuplicates = () => {
        const unique = [];
        userTags.forEach(tag => {
            console.log('tag:');
            console.log(tag.tag_name)
            if (!unique.includes(tag.tag_name)) {
                unique.push(tag.tag_name);
            }
        });
        setUniqueTags(unique); 
        // const unique = [];
        // userTags.forEach(tag => {
        //     console.log('tag:');
        //     console.log(tag.tag_name)
        //     if (!unique.includes(tag.tag_name)) {
        //         unique.push(tag.tag_name);
        //     }
        // });
        // return unique;
    };

    const handleTags = async () => {
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
                removeDuplicates();
                // const uniqueTags = removeDuplicates();
                // setUniqueTags(uniqueTags);
                // console.log(uniqueTags)
            })
            .catch(err => console.error(err));
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    }

    // useEffect(() => {
    //     handleTags();
    // }, [uniqueTags]);

    useEffect(() => {
        handleTags();
    }, [user]);

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
                        {/* <Tag text="Photography" />
                        <Tag text="Crocheting" />
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
            {/* <View style={styles.container}>
                <ScrollView style={styles.mainContainer} >
                    <Grid container columns={3} style={styles.cardContainer}>
                        <Grid item>
                            <Avatar style={styles.userAvatar} alt="User's Avatar" sx={{ width: 100, height: 100 }} />
                        </Grid>
                        <Grid item xs={2} style={styles.nameStyle}>
                            <p style={styles.name}>User's Display Name</p>
                            <Divider variant="middle" />
                        </Grid>
                        <Grid item gridRow="span 2">
                            <View style={styles.aboutContent}>
                                <p style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <View style={styles.tagArea}>
                                    <Chip style={styles.chips} label="Baking" variant="outlined" color="info" clickable />
                                    <Chip style={styles.chips} label="Reading" variant="outlined" color="info" clickable />
                                    <Chip style={styles.chips} label="Gardening" variant="outlined" color="info" clickable />
                                    <Chip style={styles.chips} label="Travel" variant="outlined" color="info" clickable />
                                    <Chip style={styles.chips} label="Photography" variant="outlined" color="info" clickable
                                    // component="a" href="/" 
                                    // Components and href can both be added to Chips to make them redirect upon click. 
                                    />
                                </View>
                            </View>
                        </Grid>
                    </Grid>
                </ScrollView>
            </View> */}
        </>
    );
}
