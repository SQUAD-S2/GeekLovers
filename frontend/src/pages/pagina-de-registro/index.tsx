import { StyleSheet, Text, Button, TouchableOpacity, View} from 'react-native';
import *as React from "react";
import { Title, Input, TextTerms, Button1, Button2, ButtonText1, ButtonText2, ButtonText3,  InputLabel } from './styles';

function Registro () {
    return (
        <View>
            <Title>GeekLovers</Title>
            <InputLabel>Nome</InputLabel> 
            <Input placeholder="Juvenal"></Input>
            <InputLabel>Email</InputLabel>
            <Input placeholder="@gmail.com"></Input>
            <InputLabel>Senha</InputLabel>
            <Input placeholder="••••••••••"></Input>
            <InputLabel>Confirmar senha</InputLabel>
            <Input placeholder="••••••••••"></Input>
            <InputLabel>Data de nascimento</InputLabel>
            <Input placeholder="dd/mm/aaaa"></Input>
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
        </View>
        );

}
export default Registro;