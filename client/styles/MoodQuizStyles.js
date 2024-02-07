import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  moodButton: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedMoodButton: {
    backgroundColor: '#FFCC80',
  },
  moodButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});