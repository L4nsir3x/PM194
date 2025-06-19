/* Zona 1: Importaciones */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';

/* Componente Texto */
const Texto = ({ style }) => {
  const [contenido, setContenido] = useState('Hola Mundo React');
  const actualizarTexto = () => setContenido('Hola Mundo como estas');

  return (
    <View style={{ margin: 10 }}>
      <Text style={[styles.text, style]}>{contenido}</Text>
      <Button title="Actualizar texto" onPress={actualizarTexto} color="orange" />
    </View>
  );
};

// const [isEnabled, setIsEnabled] = useState(false);
// const toggleSwitch = () => setIsEnabled(previousState => !previousState);

/* Zona 2: Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} />
      <Texto style={styles.green} />
      <Texto style={styles.blue} />
    </View>
  );
}

/* Estilos */

/* Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 27,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
  },
  red: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  blue: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  green: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
});