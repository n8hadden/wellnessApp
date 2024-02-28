import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid'; // Grid version 1

// style(s)
import { styles } from '../styles/ProfileStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Profile() {
    return (
        <View style={styles.container}>

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

        </View>
    );
}
