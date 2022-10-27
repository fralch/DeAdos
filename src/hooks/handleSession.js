import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const storeSesion = async (value) => {
  try {
    await AsyncStorage.setItem('@session_Key', value)
    // const jsonValue = JSON.stringify(value)
    // await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {

  }
}
const removeSesion = async () => {
  try {
    await AsyncStorage.removeItem('@session_Key')
  } catch (e) {

  }
}
const getSesion = async  () => {
  try {
    const value = await AsyncStorage.getItem('@session_Key')
    return value;
  } catch (e) {

  }
}


export { storeSesion, removeSesion, getSesion };