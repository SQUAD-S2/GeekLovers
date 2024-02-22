import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registro from './src/pages/pagina-de-registro/index';

export default function App() {
  return (
    <View>
      <Registro/>
      <StatusBar style="auto" />
    </View>
  );
}
