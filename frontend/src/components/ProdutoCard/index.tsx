import *as React from "react";
import { Container, Container1, Title, SubTitle, Image } from './style';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

interface Produto { title: string; preço: string; imagem: string; } 

function ProdutoCard ({title, preço, imagem}:Produto) {
    const navigation = useNavigation ();
    return (
    <div>
        <TouchableOpacity onPress={()=> navigation.navigate('ProdutoDetalhes' as never)}>
        <Container>
        <Image source={imagem}/>
        <Container1>
                <Title numberOfLines={1} ellipsizeMode="tail">{title}</Title>
                <SubTitle>{preço}</SubTitle>
            </Container1>
        </Container>
        </TouchableOpacity>
    </div>
    );
}

export default ProdutoCard ;