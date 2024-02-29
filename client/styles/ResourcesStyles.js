import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    header: {
        marginVertical: 15,
        fontSize: 24,
    },
    title: {
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    // button: {
    //     flexDirection: 'row', // layout image and text horizontally
    //     alignItems: 'center', // center items vertically
    //     justifyContent: 'center', // center items horizontally
    //     padding: 10,
    // },
    buttonText: {
        fontSize: 18, // or your desired size
        color: 'white',
        flexDirection: 'row', // layout image and text horizontally
        textAlign: 'center',
        justifyContent: 'center', // center items horizontally
        paddingVertical: 10,
        paddingBottom: 15,
        paddingTop: 15,
    },
    buttonContainer:  {
        backgroundColor: '#4DAA57',
        flex: 1,
        borderRadius: 10,
        padding: 10,
        width: windowWidth * 0.7,
        margin: 10,
        
    },
})