import {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { storeSesion, removeSesion } from '../hooks/handleSession';
import {db} from '../../firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import SelectDropdown from 'react-native-select-dropdown'

export default function Inicio() {
    const languages = ['English', 'Español', 'Français', 'Deutsch', 'Italiano', 'Português']; 
    const [language, setLanguage] = useState(null);
    const navigation = useNavigation();
    const handlePress = async () => {       
        console.log(language)
        if (language === null) {
            return 0; 
        } 
        try {
            const docRef = await addDoc(collection(db, "Usuarios"), {
              idioma: language, 
              libre: 1
            });
            console.log("Document written with ID: ", docRef.id);

            
            let data = {
                id_para: docRef.id,
                idioma: language
            }
            await storeSesion(JSON.stringify(data));
            navigation.navigate('Chat');
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
    }
    const cerrarSesion = async () => {
        await removeSesion();
        Alert.alert('Exito', 'Sesion cerrada');
    }
    
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logoFox.png')} style={styles.logo} />
        <View >
            <SelectDropdown
                    data={languages}
                    onSelect={(selectedItem, index) => {
                        if (selectedItem == 'English') {
                             setLanguage('en');
                        } else if (selectedItem == 'Español') {
                             setLanguage('es');
                        } else if (selectedItem == 'Français') {
                             setLanguage('fr');
                        } else if (selectedItem == 'Deutsch') {
                             setLanguage('de');
                        } else if (selectedItem == 'Italiano') {
                             setLanguage('it');
                        } else if (selectedItem == 'Português') {
                            setLanguage('pt');                
                        }
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                       
                        return item
                    }}
                />
            <View style={styles.radios}>   
                <Button
                title="cerrar sesion"
                color="#353535"
                onPress={cerrarSesion}
                />
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
      backgroundColor: '#742284',
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
  