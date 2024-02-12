import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatRoom from '../pages/ChatRoom';
import ChatTag from '../pages/ChatTag';
// import ChatContact from '../pages/ChatContact'

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatTagScreen"
        component={ChatTag}
        options={{ headerTitle: "Tags" }}
      />
      {/* <Stack.Screen
        name="ChatContactScreen"
        component={ChatContact}
      /> */}
      <Stack.Screen 
        name="ChatRoomScreen"
        component={ChatRoom}
        options={{ headerTitle: "Chat Room" }}
      />
    </Stack.Navigator>
  );
}