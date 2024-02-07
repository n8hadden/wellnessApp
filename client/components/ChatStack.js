import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../pages/Chat';

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ChatScreen"
        component={Chat}
      />
    </Stack.Navigator>
  );
}