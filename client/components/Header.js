import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// style(s)
import { styles } from '../styles/HeaderStyles';

export default function Header({ headerName, navBtn, profileImg, isGroup }) {

    const navigation = useNavigation();

    return (
        <View style={styles.contain}>
            <View
                style={styles.img_text_contain} 
            >
                { isGroup != undefined ?
                    <TouchableOpacity>
                        { profileImg ?
                            <Image 
                                source={{ uri: profileImg }} 
                                style={styles.groupImg} 
                            />
                            :
                            <View 
                                style={[styles.groupImg, { backgroundColor: '#6dc0d5' }]} // default color (switch for tag.color)
                            />
                        }
                    </TouchableOpacity>
                    :
                    <></>
                }
                <TouchableOpacity>
                    <Text style={styles.text}>
                        {headerName}
                    </Text>
                </TouchableOpacity>
            </View>
            { navBtn == false ? 
                <></>
                :
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={ () => navigation.goBack() }
                >
                    <Ionicons
                        name="arrow-back-outline"
                        size={33} 
                        color="black"
                    />
                </TouchableOpacity>
            }
        </View>
    );
}