import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    rowGap: 10,
    paddingBottom: 20,
  },
  introContainer: {
    height: 'auto',
    width: windowWidth * 0.85,
    borderRadius: 15,
    backgroundColor: '#9BA0BC',
    alignItems: 'center',
    paddingVertical: 20,
  },
  introText: {
    fontSize: 23,
    fontWeight: '500',
    width: '75%',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },  
  introImage: {
    width: 'auto',
    borderRadius: 20,
    padding: 10,
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.1)', 
  },
  dailyaffirm: {
    width: windowWidth * 0.85,
    height: 100,
    borderRadius: 15,
    backgroundColor: '#71d7ff', 
    justifyContent: 'center',
    alignItems: "center",
  },
  tempvidContainer: { /*  */
    // display: 'flex',
    height: 150,
    width: windowWidth * 0.85,
    borderRadius: 15, 
    backgroundColor: 'tomato', 
    justifyContent: 'center',
    alignItems: "center",
  },
  /* Button Styles */
  buttonContainer: {
    width: windowWidth * 0.85,
    height: 65,
    backgroundColor: '#91ADC2',
    flexDirection: 'row', // add this to layout children horizontally
    borderRadius: 10,
    // display: 'flex',
    alignItems: 'center',
  },
  btnContent: {
    flexDirection: 'row', // layout image and text horizontally
    alignItems: 'center', // center items vertically
    justifyContent: 'center', // center items horizontally
    textAlignVertical: 'center',
    padding: 10, // add some padding
  },
  icon: {
    marginLeft: 20,
    // display: 'flex',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 18, // or your desired size
    marginLeft: 15,
    color: 'white',
  },
  
});
