import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import MoodQuiz from '../pages/MoodQuiz';
import MoodCalendar from '../pages/MoodCalendar';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerTitle: 'Home Screen' }}
        // options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="MoodQuizScreen"
        component={MoodQuiz}
        options={{ headerTitle: 'Mood Quiz' }}
      />
      <Stack.Screen 
        name="MoodCalendarScreen"
        component={MoodCalendar}
        options={{ headerTitle: 'Mood Calendar' }}
      />
      <Stack.Screen 
        name="SignInScreen"
        component={SignIn}
        options={{ headerTitle: 'Login' }}
      />
      <Stack.Screen 
        name="SignUpScreen"
        component={SignUp}
        options={{ headerTitle: 'Sign Up' }}
      />
    </Stack.Navigator>
  );
}