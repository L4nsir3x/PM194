import React, {useState,useEffect} from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.background} 
    showsVerticalScrollIndicator={false}
    horizontal={true}>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
      <Text>Hola Mundo Chiva</Text>
    </ScrollView>
  )
}


/* Estilos */
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // overlay semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  }
});