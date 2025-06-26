import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect } from 'react';



export default function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [terminos, setTerminos] = useState(false);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  const registro = () => {
    if (!nombre.trim() || !correo.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    if (!terminos) {
      Alert.alert('Terminos no aceptados', 'Debes aceptar los terminos y condiciones');
      return;
    }
    Alert.alert('Registro exitoso', `Nombre: ${nombre}, Correo: ${correo}`);
  };

  return (
    <ImageBackground
      source={require('./assets/sunset.jpg')} // Asegúrate de que la ruta y el archivo existen
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          
        />
        <View style={styles.switchContainer}>
          <Switch value={terminos} onValueChange={setTerminos} />
          <Text>Acepto términos y condiciones</Text>
        </View>
        <Button title="Registrarse" onPress={registro} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});