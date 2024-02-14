import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        alignItems: 'center',
        rowGap: 10,
        paddingBottom: 30,
    },
    /* ChatTagScreen Styles */
    tagContainer: {
        height: 75,
        width: windowWidth * 0.90,
        padding: windowWidth * 0.05,
        backgroundColor: '#4b4e6d', // default tag container color
        borderRadius: 5, 
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagText: {
        color: 'white',
        fontSize: 20,
    },
    suggestText: {
        color: 'black',
        marginVertical: 5
    },
    /* ChatRoomScreen Header Styles */
    rh_contain1: {
        backgroundColor: '#f5f5f5',
        height: windowHeight * 0.11,
        paddingTop: windowHeight * 0.04,
    },
    rh_contain3: {
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight * 0.08,
        flexDirection: 'row',
        columnGap: 8,
    },
    rh_img: {
        width: 37,
        height: 37,
        borderRadius: 40, 
    },
    rh_text: {
        color: 'black',
        fontSize: 19,
    },
    rh_contain2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: windowHeight * 0.11,
        paddingTop: windowHeight * 0.04,
        marginLeft: 5,
    },
    /* ChatRoomScreen Styles */

});