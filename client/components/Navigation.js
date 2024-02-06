import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Resource from '../pages/Resource'
import Chat from '../pages/Chat';
import MoodQuiz from '../pages/MoodQuiz';

import Navbar from './Navbar';

const Stack = createStackNavigator();

export default function Navigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Navbar}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Resource"
        component={Resource}
      />
      <Stack.Screen 
        name="Chat"
        component={Chat}
      />
      <Stack.Screen 
        name="MoodQuiz"
        component={MoodQuiz}
      />
    </Stack.Navigator>
  );
}