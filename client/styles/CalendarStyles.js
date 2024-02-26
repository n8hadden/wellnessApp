import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '15%',
    paddingBottom: 20,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'blue',
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  calendarContainer: {
    marginHorizontal: 10,
    aspectRatio: 1.2, // Adjust the aspect ratio according to your preference
    width: '100%',
  },
  additionalArea: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10, // Add horizontal padding
    paddingTop: 20, // Add top padding
    alignItems: 'center',
     height: '100%'
  },
  calendar: {
    backgroundColor: '#fff',
    width: '100%',
    aspectRatio: 1.5,
  },
  moodText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  noMoodText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  recordMoodButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  recordMoodButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});