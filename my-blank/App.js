/*  Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import React,{useState} from 'react';

const Texto = ()=>{
  const [contenido, setContenido] = useState('Hola Mundo RNative');
  const actualizaTexto=()=>{setContenido('Estado actualizado del texto')};
  return(
    <Text onPress={actualizaTexto}>{contenido}</Text>
  )
};
const Boton = () =>{
  const [texto,setTexto] = useState('Tlabaja');
  const actualizaBoton= ()=>{setTexto('No tlabajes')};
  return(
    <Button title={texto} onPress={actualizaBoton} />
  )
}


/*  Zona 2: Main */

export default function App() {
  return (
    <View style={styles.container}>
      <Texto>Hola</Texto> 
      <Boton />
      <Texto>Mundo</Texto>
      <Texto>React Native</Texto>
      <StatusBar style="auto" />
    </View>
  );
}

/*  Zona 3: Estilos del screen*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
