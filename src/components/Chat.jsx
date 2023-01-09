import {useEffect, useState} from 'react';
import { StyleSheet, 
        Text, View, Image, 
        TextInput, Button, Alert, 
        Dimensions, TouchableOpacity, ScrollView  } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getSesion } from '../hooks/handleSession';
import {db} from '../../firebaseConfig';
import { collection, addDoc , getDocs, where, query, documentId, updateDoc, doc, deleteDoc} from "firebase/firestore";

import { Ionicons } from '@expo/vector-icons'; 
export default function Chat() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    let messagesArray = [
        {
            id: 1,
            message: 'lorem ipsum dolor sit amet',
            type: 'yo'
        },
        {
            id: 2,
            message: 'Hola, soy Fox, tu asistente virtual. ¿En qué puedo ayudarte?',
            type: 'human'
        },
    ]

    const[mensaje, setMensaje] = useState('');
    const [messages, setMessages] = useState(messagesArray);

    useEffect(() => {
        console.log('useEffect');
      
        const getUser = async () => {
            let usuario = await getSesion();
            usuario = JSON.parse(usuario).id_para;
            console.log(usuario);

            // get user from id of firebase
            const q = query(collection(db, "Usuarios"), where(documentId(), '==',  usuario));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
            // agregar coleccion dentro de doc
            const docRef = await addDoc(collection(db, "Usuarios", usuario, "Mensajes"), {
                message: 'Hola, soy Fox, tu asistente virtual. ¿En qué puedo ayudarte?',

            });
           console.log("Document written with ID: ", docRef.id);
            // borrar datos de Mensajes 
             const borrar = await deleteDoc(doc(db, "Usuarios", usuario, "Mensajes", docRef.id));
            // // actualizar datos de Mensajes
            // const actualizar = await updateDoc(doc(db, "Usuarios", usuario, "Mensajes", docRef.id), {
            //     message: 'Probando actualizar',
            // });
            
        }
        getUser();
    }, []);
    


    

    const enviar =  () => {
        if (mensaje === '') {
            setMensaje('');
            return 0;
        }
        let newMessage = {
            id: messages.length + 1,
            message: mensaje,
            type: 'yo'
        }
         setMessages([...messages, newMessage]);

         setMensaje('');
    }   
    //api traductor 
    // const translateText = async (text ="Hola") => {
    //     const API_KEY = 'AIzaSyC1pvAVod6kZa5g8LOhArHrAchbLHEXUd0';
    //     const API_URL = 'https://translation.googleapis.com/language/translate/v2';
    //     const response = await fetch(${API_URL}?key=${API_KEY}&q=${text}&source=es&target=en);
    //     const data = await response.json();
    //     console.log('Traductor', data.data.translations[0].translatedText);

    // }

    return (
        <View style={styles.container}>
            <View style={styles.from}>
                <Text style={styles.textFrom}>Mario</Text>
            </View>
            <ScrollView style={styles.body}>
              
               {
                messages.map((item, index) => {
                    if (item.type == 'yo') {
                        return (
                            <View key={index} >
                                <Text style={styles.letterMessage}>{item.message}</Text>
                            </View>
                        )
                    } else {
                        return (
                            <View key={index} >
                                <Text style={styles.fromMessage}>{item.message}</Text>
                            </View>
                        )
                    }
                    })

                }
               
            </ScrollView>
            
            <View style={styles.letter}>
                <TextInput style={[styles.textInput, {width: windowWidth - 20}]} 
                placeholder="Escribe tu mensaje" onChangeText={text => setMensaje(text)}  value={mensaje}/>

                <TouchableOpacity onPress={enviar} style={{marginLeft:-30}}>
                    <Ionicons name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>

        </View>
    ); 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#742284',
      alignItems: 'center',
      justifyContent:"space-between",
      paddingTop: 80
    },
    from:{
        width:"100%",
        backgroundColor:"#742284",
        justifyContent: "flex-end",
        position: 'absolute',
    
        
    },
    textFrom:{
        color:"white",
        fontSize:20,
        textAlign: "left",
        marginLeft:20,
        marginTop:40,
        fontFamily:"sans-serif",
    },

    body:{
        width:"100%",
        height:"80%",
        backgroundColor:"#222222",
        flexDirection:"column-reverse",
    },
    letter:{
        width:"100%",
        height:50,
        alignItems:"center",
        flexDirection:"row",
    },
    textInput:{
        borderRadius:10,
        padding:10,
        fontSize:15,
        fontFamily:"sans-serif",
        textAlign:"left",
        color: "white",
    },
    fromMessage:{
        color:"#B840FF",
        fontSize:18,
        textAlign: "left",
        marginHorizontal:20,
        marginVertical:10,
        fontFamily:"sans-serif",
    },
    letterMessage:{
        color:"white",
        fontSize:18,
        textAlign: "right",
        marginHorizontal:20,
        marginVertical:10,
        fontFamily:"sans-serif",
    },
    
    
    

});