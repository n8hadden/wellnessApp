import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title1: {
        fontSize:20,
        
    },
    video1:{
        width: windowWidth * 0.85,
        flex: .15,
    },
})