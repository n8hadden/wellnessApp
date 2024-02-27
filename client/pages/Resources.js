import {  StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { styles } from '../styles/ResourcesStyles'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Resources() {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            

            <Text style={styles.title1}>Featured videos</Text>

            
            <View style={styles.video1}>
            <Text>Grounding technique</Text>
            </View>
            <View style={styles.video2}>
            <Text>Grounding technique</Text>

            </View>
            
            <View style={styles.video3}>
            <Text>Grounding technique</Text>

            </View>
        

            
            <View style={styles.resource1}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Teen4Teens</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={styles.resource2}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Thereapist Aid</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.resource3}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Nami</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.resource4}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Text Crisis Line</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

