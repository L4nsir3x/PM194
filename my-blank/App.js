/*  Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';

const Texto = (props)=>{
  const {contenido}=props;
  return(
    <Text>{contenido}</Text>
  )
};


/*  Zona 2: Main */

export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenido="Hola"></Texto>
      <Button title='Trabaja'></Button>
      <Texto contenido="Mundo"></Texto>
      <Texto contenido="React Native"></Texto>
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
