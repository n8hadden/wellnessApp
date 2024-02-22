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
        backgroundColor: '#335c81',
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
        // backgroundColor: 'rgba(0,0,0,0.5)'
    },
    textInputContain: {
        width: windowWidth * 0.7,
        height: windowHeight * 0.055,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    textInputContain: {

    },
    messages: {
        marginTop: 10,
        alignSelf: 'center',
        flexDirection: 'column',
        rowGap: 10,
        marginBottom: windowHeight * 0.1,
    },  
    /* Peer Message Styles */
    peer_container: {
        flex: 2,
        flexDirection: 'row',
        columnGap: 10,
        width: windowWidth * 0.9
    },
    profileImg: {
        height: windowWidth * 0.125,
        width: windowWidth * 0.125,
        borderRadius: 30,
    },
    peer_messages: {
        rowGap: 7,
        // flex-basis isn't avaiable to directly solve this problem of (peer_message: width) being as large as (peer_username: width)
        maxWidth: windowWidth * (0.9 - 0.125) - 10 - windowWidth * 0.1, // windowWidth * [(peer_container: width) - (profileImg: width)] - (peer_container: columnGap) - (white space)
    },
    peer_username: {
        height: 25,
        marginLeft: 10,
        justifyContent: 'center',
        width: 'auto',
    },
    peer_username_text: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
    },
    peer_message: {
        backgroundColor: '#64b6ac',
        padding: 10,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignSelf:"left",
    },
    peer_message_text: {
        // flex: 1,
        fontSize: 14,
    },
    /* User Message Styling */
    user_container: {
        flex: 1,
        flexDirection: 'row-reverse',
        columnGap: 10,
        width: windowWidth * 0.9
    },
    user_messages: {
        rowGap: 7,
        maxWidth: windowWidth * 0.9 - windowWidth * 0.2, // windowWidth * (user_container: width) - (white space)
    },
    user_message: {
        backgroundColor: '#f7d08a',
        padding: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    user_message_text: {
        fontSize: 14,
    },
});