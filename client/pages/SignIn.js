import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { styles } from "../styles/SignInStyles";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      // Make an HTTP request to the /user/login endpoint
      const response = await fetch('https://wellness-server.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const userData = await response.json();

        // Save session key in AsyncStorage
        await AsyncStorage.setItem('sessionKey', userData.sessionKey);

        // Verify session key
        const verifyResponse = await fetch('https://wellness-server.onrender.com/user/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionKey: userData.sessionKey,
          }),
        });

        if (verifyResponse.ok) {
          // If session key is verified successfully, navigate to home screen
          navigation.navigate('Home');
        } else {
          Alert.alert('Error', 'Session verification failed.');
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
  );
}
