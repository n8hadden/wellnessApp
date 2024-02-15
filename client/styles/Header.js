import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    contain: {
        height: windowHeight * 0.1,
    },
    img_text_contain: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop: windowHeight * 0.04,
        flexDirection: 'row',
        columnGap: 7,
    }, 
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
    },
    btn: {
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        paddingTop: windowHeight * 0.04,
        left: 10,
    },
    groupImg: {
        width: 37,
        height: 37,
        borderRadius: 40, 
    },
});