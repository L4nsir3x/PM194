/*  Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import React,{useState} from 'react';

const Texto = ({style})=>{
  const [contenido, setContenido] = useState('Hola Mundo RNative');
  const actualizaTexto=()=>{setContenido('Estado actualizado del texto')};
  return(
    <Text style={[styles.text, style]} onPress={actualizaTexto}>{contenido}</Text>
  )
};



/*  Zona 2: Main */

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}>Hola</Texto> 
      <Texto style={styles.blue}>Mundo</Texto>
      <Texto style={styles.green}>React Native</Texto>
      <StatusBar style="auto" />
    </View>
  );
}

/*  Zona 3: Estilos del screen*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text:{
    color: 'white',
    fontSize: 27,
    
  },
  red:{backgroundColor:'red'},
  blue:{backgroundColor:'blue'},
  green:{backgroundColor:'green'},
});
