import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// style(s)
import { styles } from "../styles/SignUpStyles";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('https://wellness-server.onrender.com/user/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // SignUp successful
        console.log('SignUp successful');
        // Navigate to SignInScreen upon successful signup
        navigation.navigate("Home", { screen: "SignInScreen" });
      } else {
        // SignUp failed
        console.error('SignUp failed:', data.message); // Log the error message
      }
    } catch (error) {
      console.error('Error occurred during SignUp:', error);
    }
  };

  const handleOpenURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Your Peer Voices Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton} onPress={() => { navigation.navigate("Home", { screen: "SignInScreen" }) }}>
          <Text style={styles.buttonText}>Already have an Account?</Text>
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
