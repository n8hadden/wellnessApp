import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "../styles/SignInStyles";

import { useUser } from '../context/UserContext'

export default function SignIn({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useUser();

  const handleSignIn = async () => {
    console.log("Handle sign-in function called.");
    try {
      // Make an HTTP request to the /user/login endpoint
      const response = await fetch('https://wellness-server.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });
      console.log("API Response:", response);

      if (response.ok) {
        const userData = await response.json();
        console.log("response.ok");
        console.log(userData);
        if (userData && userData.user.user_id && userData.session) {
          // Save session key and user id in AsyncStorage
          await AsyncStorage.setItem('sessionKey', JSON.stringify(userData.session));
          await AsyncStorage.setItem('userId', JSON.stringify(userData.user.user_id));
          setUser(userData.user) // adds user information to user useState and useContext
          navigation.navigate('Home', { screen: "HomeScreen" });
        }
      } else {
        Alert.alert('Error', 'Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  const handleSignUp = () => {
    navigation.navigate("Home", { screen: "SignUpScreen" });
  };

  const handleOpenURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Into Peer Voices</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialIcon} onPress={() => { handleOpenURL('https://www.instagram.com/peer_voices_of_orange_county/') }}>
            <Ionicons name="logo-instagram" size={40} color="#E1306C" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} onPress={() => { handleOpenURL('https://www.youtube.com/@peervoices1669') }}>
            <Ionicons name="logo-youtube" size={40} color="#FF0000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} onPress={() => { handleOpenURL('https://www.facebook.com/peervoicesorangecounty') }}>
            <Ionicons name="logo-facebook" size={40} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} onPress={() => { handleOpenURL('https://www.tiktok.com/@peervoices') }}>
            <Ionicons name="logo-tiktok" size={40} color="#69C9D0" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
