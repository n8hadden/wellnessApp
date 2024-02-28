import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

// Stack Navigations 
import HomeStack from './HomeStack';
import ResourceStack from './ResourceStack'
import ChatStack from './ChatStack';

export default function Navbar() {

  // Tab route names
  const homeTab = "Home";
  const resourceTab = "Resource";
  const chatTab = "Chat";

  const Tab = createBottomTabNavigator();

  return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    /* Icon Focus */
                    if (rn === homeTab) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === resourceTab) {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (rn === chatTab) {
                        iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-outline';
                    }
                    
                    return <Ionicons name={iconName} size={size*1.25} color={color} />;
                },
                tabBarActiveTintColor: '#476a6f',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: { fontSize: 15, height: windowHeight * 0.017 },
                tabBarStyle: {  paddingTop: 10, height: windowHeight * 0.1, backgroundColor: 'lightgrey',  }, // overall height
            })}
        >
            {/* Tab screens with props */}
            <Tab.Screen name={homeTab} component={HomeStack} options={{headerShown: false}} />
            <Tab.Screen name={resourceTab} component={ResourceStack} options={{headerShown: false}} />
            <Tab.Screen name={chatTab} component={ChatStack} options={{headerShown: false}} />
        </Tab.Navigator>
  );
}