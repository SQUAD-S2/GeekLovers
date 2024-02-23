import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home/index';
import ProdutoDetalhes from './src/pages/ProdutoDetalhes';

export default function App() {
    return (
        <View>
            <ProdutoDetalhes/>
        </View>
    );
}

