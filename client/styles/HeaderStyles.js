import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    /* default header styling */
    h_contain: {
        height: windowHeight * 0.11, 
        backgroundColor: 'white', 
    },
    h_text_contain: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop: windowHeight * 0.04,
    }, 
    h_text: {
        fontSize: 22,
        color: 'black',
        fontWeight: '500',
    },
    h_btn: {
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        paddingTop: windowHeight * 0.04,
        left: 10,
    },
});