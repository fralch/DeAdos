import {useState} from 'react';
import { StyleSheet, 
        Text, View, Image, 
        TextInput, Button, Alert, 
        Dimensions, TouchableOpacity, ScrollView  } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getSesion } from '../hooks/handleSession';
import { Ionicons } from '@expo/vector-icons'; 
export default function Chat() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    const enviar = () => {
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.from}>
                <Text style={styles.textFrom}>Mario</Text>
            </View>
            <ScrollView style={styles.body}>
                <Text style={styles.fromMessage}>Hola, como estas?</Text>
                <Text style={styles.letterMessage}>Yo estoy bien y tu ? </Text>
            </ScrollView>
            
            <View style={styles.letter}>
                <TextInput style={[styles.textInput, {width: windowWidth - 20}]} placeholder="Escribe tu mensaje" />
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
      backgroundColor: '#662F9A',
      alignItems: 'center',
      justifyContent:"space-between",
      paddingTop: 80
    },
    from:{
        width:"100%",
        backgroundColor:"#662F9A",
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
    },
    letter:{
        width:"100%",
        height:"10%",
        alignItems:"center",
        flexDirection:"row",
    },
    textInput:{
        borderRadius:10,
        padding:10,
        fontSize:15,
        fontFamily:"sans-serif",
        textAlign:"left",
    },
    fromMessage:{
        color:"#662F9A",
        fontSize:20,
        textAlign: "left",
        marginLeft:20,
        marginTop:40,
        fontFamily:"sans-serif",
    },
    letterMessage:{
        color:"white",
        fontSize:20,
        textAlign: "right",
        marginRight:20,
        marginTop:40,
        fontFamily:"sans-serif",
    },
    
    
    

});