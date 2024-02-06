import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomePage from '../pages/Home';
import ResourcePage from '../pages/Resource'
import ChatPage from '../pages/Chat';

export default function Navbar() {

  //Screen names
  const homeName = "Home";
  const resourceName = "Community";
  const chatName = "Peers";

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                /* Icon Focus */
                if (rn === homeName) {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (rn === resourceName) {
                    iconName = focused ? 'newspaper' : 'newspaper-outline';
                } else if (rn === chatName) {
                    iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-outline';
                }
                
                return <Ionicons name={iconName} size={size*1.5} color={color} />;
            },
            tabBarActiveTintColor: '#476a6f',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { paddingBottom: 0, fontSize: 15 },
            tabBarStyle: { padding: 10, height: 100, backgroundColor: 'lightgrey',  }
        })}
    >
        {/* Tab screens with props */}
        <Tab.Screen name="Home" component={HomePage} /* options={{headerShown: false}} */ />
        <Tab.Screen name="Community" component={ResourcePage} />
        <Tab.Screen name="Peers" component={ChatPage} />
    </Tab.Navigator>
  );
}