import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Resource from '../pages/Resource';

const Stack = createStackNavigator();

export default function ResourceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ResourceScreen"
        component={Resource}
      />
    </Stack.Navigator>
  );
}