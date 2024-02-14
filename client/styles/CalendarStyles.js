import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    calendar: {
      marginBottom: 20,
    },
    selectedDateText: {
      fontSize: 18,
      marginTop: 20,
    },
    permissionText: {
      fontSize: 18,
      textAlign: 'center',
    },
  });