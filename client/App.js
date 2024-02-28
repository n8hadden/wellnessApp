import * as React from 'react';
import { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navbar from './components/Navbar';

import { UserProvider } from './context/UserContext';

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'blue',
      background:'white'
    },
  };

  return (
    <UserProvider>
      <NavigationContainer theme={MyTheme}>
        <Navbar>
          
        </Navbar>
      </NavigationContainer>
    </UserProvider>
  );
}
