import { StatusBar } from 'expo-status-bar';
import React,{ useEffect, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button , Image, TextInput, FlatList} from 'react-native';

export default function App() {

  const libros = require('./libros.json')
  const [input , setInput] = useState('')
  const [opciones, setOpciones] = useState([])
  const [resultado, setResultado] = useState('')

  const addtoArray = () => {
    opciones.push(input)
    console.log(opciones)
    console.log(libros[1].Title)
  }
  const randomCategoria = () =>{
    const random = Math.floor(Math.random() * opciones.length)
    setResultado(opciones[random].toString())
    console.log(resultado)
  }

  const randomLibro = () =>{
    const random = Math.floor(Math.random() * libros.length)
    const libro = libros[random]
    setResultado(libro.Title.toString() + ' de ' + libro.Author.toString())
    console.log(resultado)
  }
  return (
    <View style={styles.container}>
<TextInput onChangeText={text => setInput(text)} value={input} style={{backgroundColor: 'pink'}}></TextInput>
      <Button onPress={addtoArray} title="Add"></Button>
      <Text style={{padding: 10, fontSize: 42}}>
        {opciones.toString().split(',').join(' \n')}
      </Text>
 <Button onPress={randomCategoria} title="random por categoría"></Button>
  <Button onPress={randomLibro} title="random por libro"></Button>
<Text>{resultado}</Text>
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
