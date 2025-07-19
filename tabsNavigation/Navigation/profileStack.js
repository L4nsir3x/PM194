// navigation/ProfileStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import Detail from '../screens/detail';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={Detail} options={{ title: 'Detalle de Usuario' }} />
    </Stack.Navigator>
  );
}
