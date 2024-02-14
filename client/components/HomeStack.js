import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

import Home from '../pages/Home';
import MoodQuiz from '../pages/MoodQuiz';
import Header from './Header';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          header: () => <Header pageName="Home" navBtn={false} />
        }}
      />
      <Stack.Screen 
        name="MoodQuizScreen"
        component={MoodQuiz}
        options={{
          header: () => <Header pageName="Mood Quiz" />
        }}
      />
      {/* {<Stack.Screen 
        name="MoodCalenderScreen"
        component={MoodCalender}
        options={{ 
          headerTitle: 'Mood Calender',
          headerStyle: { height: windowHeight },
        }}
      />} */}
    </Stack.Navigator>
  );
}