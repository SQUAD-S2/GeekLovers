import *as React from "react";
import { Text, Container, Container1, Title, Image, Image1 } from './style';



export function StatusBar () {
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

export function StatusBar2 () {
    return (
        <Container>
            <Text>9:14</Text>
        </Container>
    )
}
