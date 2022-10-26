import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { storeSesion, removeSesion, getSesion } from './src/hooks/handleSession';

import Inicio from './src/components/Inicio';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" options={{headerShown: false}} component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

