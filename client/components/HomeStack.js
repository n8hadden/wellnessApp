import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import Home from '../pages/Home';
import MoodQuiz from '../pages/MoodQuiz';
import MoodCalendar from '../pages/MoodCalendar';

// components
import Header from './Header';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          header: () => <Header headerName="Chat" navBtn={false} />
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
    </Stack.Navigator>
  );
}