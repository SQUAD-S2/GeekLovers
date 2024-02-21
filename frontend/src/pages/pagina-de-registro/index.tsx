import { View } from 'react-native';
import *as React from "react";
import { Title, Input, TextTerms, Button1, Button2, ButtonText1, ButtonText2, ButtonText3, InputLabel, StyledView, InputContainer, BoxTerms, ContainerTerms } from './style';

function Registro() {
    return (
        <StyledView>
            <Title source={require("../../assets/Logo-Vector.svg")} />
            <InputContainer>
                <InputLabel>Nome</InputLabel>
                <Input placeholder="Seu nome" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Email</InputLabel>
                <Input placeholder="@gmail.com" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Senha</InputLabel>
                <Input placeholder="••••••••••" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Confirmar Senha</InputLabel>
                <Input placeholder="••••••••••" />
            </InputContainer>

            <InputContainer>
                <InputLabel>Data de Nascimento</InputLabel>
                <Input placeholder="dd/mm/aaaa" />
            </InputContainer>
            
            <ContainerTerms> 
                <BoxTerms></BoxTerms>
                <TextTerms>Concordo com os Termos e Condições</TextTerms>
            </ContainerTerms>


            <Button1>
                <ButtonText1>Criar Conta</ButtonText1>
            </Button1>
            <Button2>
                <ButtonText2>Já possui conta? <ButtonText3>Entrar</ButtonText3></ButtonText2>
            </Button2>

        </StyledView>
    );

}
export default Registro;