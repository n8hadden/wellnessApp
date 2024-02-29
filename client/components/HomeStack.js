import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// page(s)
import Home from '../pages/Home';
import MoodQuiz from '../pages/MoodQuiz';
import MoodCalendar from '../pages/MoodCalendar';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from '../pages/Profile';

// component(s)
import Header from './Header';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          header: () => <Header headerName="Home" navBtn={false} />
        }}
      />
      <Stack.Screen
        name="MoodQuizScreen"
        component={MoodQuiz}
        options={{
          header: () => <Header headerName="Mood Quiz" />
        }}
      />
      <Stack.Screen
        name="MoodCalendarScreen"
        component={MoodCalendar}
        options={{
          header: () => <Header headerName="Mood Calendar" />
        }}
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
      <Stack.Screen
        name="UserProfileScreen"
        component={Profile}
        options={{ headerTitle: 'Profile' }}
      />
    </Stack.Navigator>
  );
}