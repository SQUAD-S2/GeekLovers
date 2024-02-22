import { Text, Button, TouchableOpacity, View} from 'react-native';
import *as React from "react";
import { Title, Container, Container1, Container2, SubTitle, Image , Image1 } from './style';
import ProdutoCard from '../../components/ProdutoCard';

function Favoritos () {
    return (
        <>
        <Container>
            <Title>9:41</Title>
            <Container1>
            <SubTitle>Favoritos</SubTitle>
            <Image source={require('../../../assets/ImgPerfil.png')}/>
            </Container1>
            <ProdutoCard/>
        </Container>
        <Container2>
                <Image1 source={require('../../../assets/IconeCasa.png')}/>
                <Image1 source={require('../../../assets/IconeBusca.png')}/>
                <Image1 source={require('../../../assets/IconeCarrinho.png')}/>
                <Image1 source={require('../../../assets/IconeCoracaoRosa.png')}/>
        </Container2>
        </>
        );

}
export default Favoritos;