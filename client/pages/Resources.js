import {  StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/ResourcesStyles'

export default function Resources() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            
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

