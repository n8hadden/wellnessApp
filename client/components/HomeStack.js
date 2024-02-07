import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import MoodQuiz from '../pages/MoodQuiz';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        // options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="MoodQuizScreen"
        component={MoodQuiz}
      />
    </Stack.Navigator>
  );
}