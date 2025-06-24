import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [splash, setSplash] = useState(false);

  useEffect(() => {

    setTimeout(async () => {
      setSplash(true);
      await SplashScreen.hideAsync();
    }, 2000);

}, []);

}




/* Estilos */
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
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