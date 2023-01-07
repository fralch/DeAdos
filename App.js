import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { storeSesion, removeSesion, getSesion } from './src/hooks/handleSession';


import Inicio from './src/components/Inicio';
import Chat from './src/components/Chat';
import { async } from '@firebase/util';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const obtenerSesion = async () => {
    let usuario = await getSesion();
    setUser(usuario);
    setLoading(false);
    return JSON.parse(usuario);
  };
  useEffect(() => {
    obtenerSesion().then((usuario) => {
      console.log(usuario);
    }); 
     
  } , []);

  return (
    /*  OJO MUY IMPORTANTE: ANTES DE VALIDAR EL USUARIO, AGREGAR LOADING PARA EVITAR QUE SE MUESTRE EL LOGIN ANTES DE QUE SE CARGUE EL USUARIO */
    loading ?  (
      <ActivityIndicator
        //visibility of Overlay Loading Spinner
        visible={loading}
        //Text with the Spinner
        textContent={'Loading...'}
        //Text style of the Spinner Text
        textStyle={styles.spinnerTextStyle}
      />
    ) :
    user ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen name="Inicio" options={{headerShown: false}} component={Inicio} />
        <Stack.Screen name="Chat" options={{headerShown: false}} component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>) : (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Chat" options={{headerShown: false}} component={Chat} />
          <Stack.Screen name="Inicio" options={{headerShown: false}} component={Inicio} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
