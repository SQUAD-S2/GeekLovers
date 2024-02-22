import { StyleSheet, Text, Button, TouchableOpacity, View} from 'react-native';
import *as React from "react";
import { Container1, Container2, Title, SubTitle, Input, TextTerms, Button1, Button2, ButtonText1, ButtonText2, ButtonText3,  InputLabel } from './styles';

function Registro () {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
        <Title>9:41</Title>
        <Container1>
            <SubTitle>GeekLovers</SubTitle>
            <Container2>
                <InputLabel>Nome</InputLabel>
                <Input placeholder="Juvenal"></Input>
            </Container2>
            <Container2>
                <InputLabel>Email</InputLabel>
                <Input placeholder="@gmail.com"></Input>
            </Container2>
            <Container2>
                <InputLabel>Senha</InputLabel>
                <Input placeholder="••••••••••"></Input>
            </Container2>
            <Container2>
                <InputLabel>Confirmar senha</InputLabel>
                <Input placeholder="••••••••••"></Input>
            </Container2>
            <Container2>
                <InputLabel>Data de nascimento</InputLabel>
                <Input placeholder="dd/mm/aaaa"></Input>
            </Container2>
            <>  
                <TextTerms>Concordo com os Termos e Condições</TextTerms>
            </>
            <>
                <Button1>
                    <ButtonText1>Criar Conta</ButtonText1>
                </Button1> 
                <Button2>
                    <ButtonText2>Já possui conta? <ButtonText3>Entrar</ButtonText3></ButtonText2>
                </Button2>
            </>
        </Container1>
        </div>
        );

}
export default Registro;