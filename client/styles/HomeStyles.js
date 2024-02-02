import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    dailyaffirm: {
        width: windowWidth * 0.85,
        flex: .15,
        backgroundColor: '#38b44a', 
        justifyContent: 'center',
        alignItems: "center",
        top: 0,
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10
    },
    tempvid: {
        width: windowWidth * 0.85, 
        flex: .35, // Flex layout
        backgroundColor: '#242424', 
        justifyContent: 'center',
        alignItems: "center",
    },
    buttonContainer: {
        width: windowWidth * 0.85,
        flex: .1,
        backgroundColor: '#929292',
        justifyContent: 'flex-start',
        alignItems: "center",
        marginTop: 10,
        flexDirection: 'row', // add this to layout children horizontally
        borderRadius: 10,
      },
      button: {
        flexDirection: 'row', // layout image and text horizontally
        alignItems: 'center', // center items vertically
        justifyContent: 'center', // center items horizontally
        padding: 10, // add some padding
      },
      icon: {
        width: 50, // or your desired size
        height: 50, // or your desired size
        marginRight: 0, // add some margin to the right of the image
        marginLeft: 20,
      },
      buttonText: {
        fontSize: 18, // or your desired size
        marginLeft: 15,
      },

});
