import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
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
    /* ChatRoomScreen Styles */
    cr_contain: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#D5B9B2',
        height: windowHeight * 0.8, // height excluding header/footer
    },
    scrollContain: {
        backgroundColor: 'green',
        height: 200,
    },
    inputContain : {
        position: 'absolute',
        height: windowHeight * 0.1,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 10,
        marginTop: windowHeight * 0.7,
    },
    input: {
        width: windowWidth * 0.7,
        height: windowHeight * 0.055,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    messages: {
        width: windowWidth * 0.875,
        marginTop: 10,
        alignSelf: 'center',
    },  
    /* Peer Message Styles */
    peer_container: {
        backgroundColor: 'blue',
        flex: 2,
        flexDirection: 'row',
    },
    profileImg: {
        height: 50,
        width: 50,
        borderRadius: 30,
    },
    peer_messages: {
        marginLeft: 10,
    },
    peer_message: {
        backgroundColor: 'red',
        padding: 7,
        fontSize: 40,
        borderRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
});