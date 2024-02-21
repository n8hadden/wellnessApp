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
        // justifyContent: 'space-between',
        backgroundColor: '#D5B9B2',
        height: windowHeight * 0.8, // height excluding header/footer
        // minHeight: windowHeight * 0.8, // height excluding header/footer
    },
    scrollContain: {
        backgroundColor: 'green',
        height: 200,
    },
    inputContain : {
        position: 'absolute',
        height: windowHeight * 0.1,
        width: windowWidth,
        backgroundColor: 'blue',
        borderRadius: 30,
        bottom: 0
    }
});