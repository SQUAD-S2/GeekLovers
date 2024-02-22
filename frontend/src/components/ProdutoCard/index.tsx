import *as React from "react";
import { Container, Container1, Title, SubTitle, Image } from './style';

function ProdutoCard () {
    return (
    <div>
        <Container>
            <Image source={require('../../../assets/BabyGroot.png')}/>
            <Container1>
                <Title>Coleção Marvel ...</Title>
                <SubTitle>R$ 299,00</SubTitle>
            </Container1>
        </Container>
    </div>
    );
}

export default ProdutoCard ;