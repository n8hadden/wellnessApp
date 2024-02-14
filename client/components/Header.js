import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from '../styles/HeaderStyles';

export default function Header({ pageName, navBtn }) {

    const navigation = useNavigation();

    return (
        <View style={styles.h_contain}>
            <TouchableOpacity style={styles.h_text_contain}>
                <Text style={styles.h_text}>{pageName}</Text>
            </TouchableOpacity>
            { navBtn == false ? 
                <></>
                :
                <TouchableOpacity 
                    style={styles.h_btn}
                    onPress={ () => navigation.goBack() }
                >
                    <Ionicons
                        name="arrow-back-outline"
                        size={35} 
                        color="black"
                    />
                </TouchableOpacity>
            }
        </View>
        // <View style={styles.rh_contain1} >
        //     <View
        //         style={styles.rh_contain3} 
        //     >
        //         <Image 
        //             source={{ uri: profileImg }} 
        //             style={styles.rh_img} 
        //         />
        //         <Text style={styles.rh_text}>
        //             {groupName}
        //         </Text>
        //     </View>
        //     <TouchableOpacity
        //         style={styles.rh_contain2}
        //         onPress={ () => navigation.goBack() }
        //     >
        //         <Ionicons
        //             name="arrow-back-outline" /* icon image prop */
        //             size={35} /* size of icon */
        //             color="black" /* icon color prop */
        //         />
        //     </TouchableOpacity>
        // </View>
    );
}