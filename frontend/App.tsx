import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from "./src/pages/Tela_de_Login/";
import Registro from './src/pages/pagina-de-registro/index';


export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
