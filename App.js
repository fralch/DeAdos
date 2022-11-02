import {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { storeSesion, removeSesion, getSesion } from './src/hooks/handleSession';


import Inicio from './src/components/Inicio';
import Chat from './src/components/Chat';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [session, setSession] = useState(false);

  const obtenerSesion = async () => {
    let usuario = await getSesion();
    if(JSON.parse(usuario)?.length > 0){
      setSession(true);
    }else{
      setSession(false);
    }
    return JSON.parse(usuario);
  };
  useEffect(() => {
    obtenerSesion()
      .then((value) => {
        console.log('desde useeffet APP.js',value)
      })
  } , []);

  return (
    session ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" options={{headerShown: false}} component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>) : (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Chat" options={{headerShown: false}} component={Chat} /> */}
          <Stack.Screen name="Inicio" options={{headerShown: false}} component={Inicio} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

