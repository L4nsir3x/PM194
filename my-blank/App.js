/* Zona 1: Importaciones */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';

const Interruptor = () =>{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        {isEnabled ? 'Activado' : 'Desactivado'}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        
    </View>
  )
}

/* Zona 2: Main */
export default function App() {
  return (
    <View style={styles.container}>

      <Interruptor />

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