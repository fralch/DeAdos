import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logoFox.png')} style={styles.logo} />
        <View>
            <Text  style={styles.text} >Ingresa tu nombre</Text>
            <TextInput style={styles.input} placeholder="useless placeholder" />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF9900',
      alignItems: 'center',
      justifyContent: "space-between",
    },
    logo: {
        width: 100,
        height: 100,
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
    
  });
  