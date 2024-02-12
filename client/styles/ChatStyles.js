import { Dimensions, StyleSheet } from 'react-native';

windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
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
    /* tagContain_1: {
        flex: 1.8,
    },
    tagContain_2: {
        flex: 1,
    },
    tagContain_3: {
        flex: 1,
    },
    tagText_1: {
        color: 'white',
        textAlign: 'left',
        fontSize: 20,
    },
    tagText: {
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
    }, */

    /* ChatRoomScreen Styles */
    
});