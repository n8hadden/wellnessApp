import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

import Header from './Header';
import Resource from '../pages/Resource';

const Stack = createStackNavigator();

export default function ResourceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ResourceScreen"
        component={Resource}
        options={{
          header: () => <Header headerName="Resources" navBtn={false} />
        }}
      />
    </Stack.Navigator>
  );
}