import {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { storeSesion, removeSesion } from '../hooks/handleSession';

export default function Inicio() {
    const [checked, setChecked] = useState('female');
    const [nombre, setNombre] = useState('');

    const handlePress = async () => {
        if (nombre === '') {
            Alert.alert('Error', 'Debes ingresar un nombre');
            return 0; 
        } 
        let data = {
            nombre: nombre,
            sexo: checked
        }
        await storeSesion(JSON.stringify(data));

        Alert.alert('Exito', 'Sesion iniciada');
    }
    const cerrarSesion = async () => {
        await removeSesion();
        Alert.alert('Exito', 'Sesion cerrada');
    }
    
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logoFox.png')} style={styles.logo} />
        <View >
            <Text  style={styles.text} >Ingresa tu nombre</Text>
            <TextInput style={styles.input} placeholder="|" onChangeText={setNombre} value={nombre} />
            <View style={styles.radios}>
                <RadioButton
                    value="female"
                    status={checked == 'female' ? 'checked' : 'unchecked'}
                    color="#fff"
                    onPress={() => setChecked('female')}
                />
                <Text  style={styles.text} >Mujer</Text>
                <RadioButton
                    value="male"
                    label="Carto Base MAp"
                    status={ checked == "male" ? 'checked' : 'unchecked' }
                    color="#fff"
                    onPress={() => setChecked('male')}
                />
                <Text  style={styles.text} >Varón</Text>
                {/* <Button
                title="cerrar sesion"
                color="#353535"
                onPress={cerrarSesion}
                /> */}
            </View>
            <Button
                title="Iniciar"
                color="#353535"
                
                onPress={handlePress}
            />
           
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#662F9A',
      alignItems: 'center',
      justifyContent:"space-around"
    },
    logo: {
        width: 120,
        height: 150,
        marginTop: 50,
        marginBottom: 50,
        marginHorizontal: 60,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
    },  
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        borderRadius: 10,
        borderColor: '#fff',
        color: '#fff',
        fontSize: 20,
    },
    radios: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        alignSelf: 'center',
        marginBottom: 20,
    }, 
   
  });
  