import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home/index';
import Navigation from './src/router/MainNavigator';
import Favoritos from './src/pages/Favoritos';
import Login from './src/pages/Login';
import MainNavigator from './src/router/MainNavigator';
import Registro from './src/pages/Registro';
import ProdutoDetalhes from './src/pages/ProdutoDetalhes';

export default function App() {
    return (
            <MainNavigator/>
    );
}
