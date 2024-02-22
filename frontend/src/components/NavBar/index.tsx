import { Text, Button, TouchableOpacity, View} from 'react-native';
import *as React from "react";
import { Container2, Image1 } from './style';
import ProdutoCard from '../../components/ProdutoCard';
interface pagina {numero: number};

function NavBar ({numero}:pagina) {
    return (
        <>
        <Container2>
                {numero === 1?(<Image1 source={require('../../../assets/NavBar/IconeCasaRosa.png')}/>):(<Image1 source={require('../../../assets/NavBar/IconeCasa.png')}/>)}
                {numero === 2?(<Image1 source={require('../../../assets/NavBar/IconeBuscaRosa.png')}/>):(<Image1 source={require('../../../assets/NavBar/IconeBusca.png')}/>)}
                {numero === 3?(<Image1 source={require('../../../assets/NavBar/IconeCarrinhoRosa.png')}/>):(<Image1 source={require('../../../assets/NavBar/IconeCarrinho.png')}/>)}
                {numero === 4?(<Image1 source={require('../../../assets/NavBar/IconeCoracaoRosa.png')}/>):(<Image1 source={require('../../../assets/NavBar/IconeCoracao.png')}/>)}
        </Container2>
        </>
        );

}
export default NavBar;