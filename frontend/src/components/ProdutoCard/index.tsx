import *as React from "react";
import { Container, Container1, Title, SubTitle, Image } from './style';

interface Produto { title: string; preço: string; imagem: string; } 

function ProdutoCard ({title, preço, imagem}:Produto) {
    return (
    <div>
        <Container>
        <Image source={imagem}/>
        <Container1>
                <Title numberOfLines={1} ellipsizeMode="tail">{title}</Title>
                <SubTitle>{preço}</SubTitle>
            </Container1>
        </Container>
    </div>
    );
}

export default ProdutoCard ;