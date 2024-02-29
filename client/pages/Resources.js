import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions, Linking, SafeAreaView } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from '../styles/ResourcesStyles'
import YoutubePlayer from 'react-native-youtube-iframe';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Resources() {
    const video1 = useRef(null);
    const [status1, setStatus1] = useState({});

    return (
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <Text style={styles.header}>Featured Videos</Text>

            <View >
                <Text style={styles.title}>Grounding technique</Text>
                <YoutubePlayer
                    height={windowHeight * .25}
                    width={windowWidth * .9}
                    style={styles.video}
                    // play={playing}
                    videoId={'Up5Isb-U7Ow'}
                />
            </View>

            <View >
                <Text style={styles.title}>Anxiety & coping skills</Text>
                <YoutubePlayer
                    height={windowHeight * .25}
                    width={windowWidth * .9}
                    style={styles.video}
                    // play={playing}
                    videoId={'grfXR6FAsI8'}
                />
            </View>

            <View >
                <Text style={styles.title}>Fight Depression and Burnout</Text>
                <YoutubePlayer
                    height={windowHeight * .25}
                    width={windowWidth * .9}
                    style={styles.video}
                    // play={playing}
                    videoId={'sWfNosruPPw'}
                />
            </View>

            <Text style={styles.header}>Other Resources</Text>
            <View onPress={() => {}}  style={styles.buttonContainer} >
                <TouchableOpacity onPress={() => Linking.openURL('https://www.teens4teenshelp.org/resources')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText} >Teen4Teens</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View  style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.therapistaid.com/')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Therapistaid</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.nami.org/Your-Journey/Kids-Teens-and-Young-Adults/Teens')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText} >Nami Hotline</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://988lifeline.org/help-yourself/for-deaf-hard-of-hearing/')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText} >988 suicide and crisis lifeline</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer/*{ marginBottom: 20}*/}>
                <TouchableOpacity onPress={() => { /* handle button press */ }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => Linking.openURL('https://www.crisistextline.org/')}>Text Crisis Line</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}





























