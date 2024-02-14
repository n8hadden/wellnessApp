// import React from 'react';
// import { TouchableOpacity, Text, Image, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import { styles } from '../styles/ChatStyles';

// export default function Header({ onPress, profileImg }) {

//     const navigation = useNavigation();

//     const groupName = "Perry The Platypus Group";

//     return (
//         <View style={styles.rh_contain1} >
//             <View
//                 style={styles.rh_contain3} 
//             >
//                 <Image 
//                     source={{ uri: profileImg }} 
//                     style={styles.rh_img} 
//                 />
//                 <Text style={styles.rh_text}>
//                     {groupName}
//                 </Text>
//             </View>
//             <TouchableOpacity
//                 style={styles.rh_contain2}
//                 onPress={ () => navigation.goBack() }
//             >
//                 <Ionicons
//                     name="arrow-back-outline" /* icon image prop */
//                     size={35} /* size of icon */
//                     color="black" /* icon color prop */
//                 />
//             </TouchableOpacity>
//         </View>
//     );
// }