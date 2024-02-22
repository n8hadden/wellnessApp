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
        marginTop: 10,
        alignSelf: 'center',
    },  
    /* Peer Message Styles */
    peer_container: {
        flex: 2,
        flexDirection: 'row',
        columnGap: 5,
        width: windowWidth * 0.9
    },
    profileImg: {
        height: windowWidth * 0.11,
        width: windowWidth * 0.11,
        borderRadius: 30,
    },
    peer_messages: {
        rowGap: 5,
        maxWidth: windowWidth * (1.0 - 0.11) - windowWidth * 0.1,
    },
    peer_username: {
        height: 25,
        marginLeft: 10,
        justifyContent: 'center',
    },
    peer_username_text: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
    },
    peer_message: {
        // width: '90%',
        backgroundColor: 'red',
        padding: 10,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    peer_message_text: {
        fontSize: 14,
    },
});