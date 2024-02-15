import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'sans-serif', 
    },
    mainContainer: {
        maxWidth: '100%',
    },
    cardContainer: {
        width: '70%',
        maxWidth: '750px',
        margin: '10vh auto auto',

        padding: '2em',
        borderRadius: '15px',

        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
    },


    userAvatar: {
        backgroundColor: '#f7525f',
        fontSize: 'xx-large'
    },


    nameStyle: {
        alignSelf: 'center',
    },
    name: {
        textAlign: 'center',
        fontSize: '1.2em',
    },


    bio: {
        backgroundColor: 'rgb(0 0 0 / 20%)',

        maxWidth: '650px',
        padding: '1em',
        margin: '1em',
        borderRadius: '20px',
        fontsize: 'x-large',
    },


    tagArea: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

        margin: '10px',
    },
    chips: {
        margin: '4px',
        borderColor: '#4B94DD',
        color: '#4B94DD',
    },
});
