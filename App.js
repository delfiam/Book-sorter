import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button , Image, TextInput} from 'react-native';
import MultipleValueTextInput from 'react-multivalue-text-input';

export default function App() {

  const [resultado, setResultado] = useState([''])
  const handleChange = () =>{
    setResultado(resultado[Math.random(resultado.length)])
    console.log(resultado)
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Poner caracteristica" value={resultado}></TextInput>
      <Button onPress={handleChange} title="Change"></Button>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      width: '100px',
      height: '200px',

    },

  });
