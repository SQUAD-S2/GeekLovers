import *as React from "react";
import { Text, Container, Container1, Title, SubTitle, Image, Image1 } from './style';

function StatusBar () {
    return (
        <Container>
            <Text>9:14</Text>
            <Container1>
                <Image source={require('../../../assets/Categorias/IconeMenu.png')}/>
                <Title source={require('../../../assets/Logo.png')}/>
                <Image1 source={require('../../../assets/ImagemPerfil.png')}/>
            </Container1>
        </Container>
    )
}

export default StatusBar ;