import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

import Resource from '../pages/Resource';

const Stack = createStackNavigator();

export default function ResourceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ResourceScreen"
        component={Resource}
        options={{ 
          headerTitle: 'Resource Page',
          headerStyle: { height: windowHeight },
        }}
      />
    </Stack.Navigator>
  );
}