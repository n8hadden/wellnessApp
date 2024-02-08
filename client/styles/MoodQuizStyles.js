import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  question: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  moodButton: {
    width: '48%',
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
    width: '100%',
    maxWidth: 250,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  slider: {
    width: '50%',
    height: 40,
  },
  sliderValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});