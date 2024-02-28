import * as React from 'react';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

// user context hook
import { useUser } from '../context/UserContext';

// page(s)
import ChatRoom from '../pages/ChatRoom';
import ChatTag from '../pages/ChatTag';

// component(s)
import Header from './Header';

const Stack = createStackNavigator();

export default function ChatStack() {
  const { user, setUser } = useUser();
  const [userTags, setUserTags] = useState([]);

  const handleTags = () => {
    if (user) {
      setUserTags([
        {
          tag_id: 9,
          tag_name: "Bird Watching",
        },
        {
          tag_id: 5,
          tag_name: "Computer Science",
        },
      ]);
    }
  }

  useEffect(() => {
    handleTags();
  }, [user])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatTagScreen"
        component={ChatTag}
        options={{
          header: () => <Header headerName="Chat" navBtn={false} />
        }}
      />
      { userTags && userTags.map((tag, index) => (
        <Stack.Screen 
          key={`ChatRoomScreen_${tag.tag_id}`} 
          name={`ChatRoomScreen_${tag.tag_id}`}
          component={ChatRoom}
          options={{
            header: () => <Header headerName={tag.tag_name} isGroup={true} profileImg="https://sdzwildlifeexplorers.org/sites/default/files/2019-11/platypus-bill.jpg" />
          }}
        />
      ))}
    </Stack.Navigator>
  );
}