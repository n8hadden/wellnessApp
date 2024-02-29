import * as React from 'react';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// user context hook
import { useUser } from '../context/UserContext';

// page(s)
import ChatRoom from '../pages/ChatRoom';
import ChatTag from '../pages/ChatTag';

// component(s)
import Header from './Header';

const Stack = createStackNavigator();

export default function ChatStack() {
  const { user } = useUser();
  const [userTags, setUserTags] = useState([]);

  const handleTags = async () => {
    if (user) {
      try {
        fetch('https://wellness-server.onrender.com/tag/getTags', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user.user_id,
          }),
        })
        .then(res => res.json())
        .then(async res => {
          setUserTags(res.tags);
        })
        .catch(err => console.error(err));
      } catch (error) {
        console.error('Error:', error);
        Alert.alert('Error', 'An error occurred. Please try again later.');
      }
    }
  }

  useEffect(() => {
    handleTags();
  }, [user])

  useEffect(() => {
    handleTags();
  }, [])

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
          key={`ChatRoom_${tag.tag_id}`}
          name={`ChatRoom_${tag.tag_id}`}
          // component={ChatRoom}
          options={{
            header: () => <Header headerName={tag.tag_name} isGroup={true} profileImg="https://sdzwildlifeexplorers.org/sites/default/files/2019-11/platypus-bill.jpg" />
          }}
        >
          {(props) => <ChatRoom {...props} />}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
}