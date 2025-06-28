import { View, Text, ActivityIndicator, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

const simularCarga = () => {
  setLoading(true);
  setMensaje('');
  setTimeout(() =>{
    setLoading(false);
    setMensaje('Carga completada exitosamente');
  }, 2000);
}

return(
  <View style={styles.container}>
    <Text style = {styles.title}>
      Simular carga


    </Text>

    {loading ? (
      <>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style = {styles.texto}>Cargando...</Text>
      </>
      ) : (
        <>
        <Button title="Iniciar Carga" onPress={simularCarga}></Button>
        {mensaje ? <Text style={styles.texto}>{mensaje}</Text> : null}
        </>)}

  </View>
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
  texto: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
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