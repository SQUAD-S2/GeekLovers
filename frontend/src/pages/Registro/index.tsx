import { StyleSheet, Text, Button, TouchableOpacity, View} from 'react-native';
import *as React from "react";
import { Title, Input, TextTerms, Button1, Button2, ButtonText1, ButtonText2, ButtonText3,  InputLabel, InputContainer, Tela } from './style';
import { StatusBar2 } from '../../components/StatusBar';
import { useNavigation } from "@react-navigation/native";


function Registro () {
    const navigation = useNavigation ();
    return (
        <Tela>
            <StatusBar2></StatusBar2>
            <Title source={require('../../../assets/LogoInicio.svg')}/>
            <InputContainer>
                <InputLabel>Nome</InputLabel> 
                <Input placeholder="Juvenal"></Input>
            </InputContainer>
            <InputContainer>
                <InputLabel>Email</InputLabel>
                <Input placeholder="@gmail.com"></Input>
            </InputContainer>
            <InputContainer>
                <InputLabel>Senha</InputLabel>
                <Input placeholder="••••••••••"></Input>
            </InputContainer>
            <InputContainer>
                <InputLabel>Confirmar senha</InputLabel>
                <Input placeholder="••••••••••"></Input>
            </InputContainer>
            <InputContainer>
                <InputLabel>Data de nascimento</InputLabel>
                <Input placeholder="dd/mm/aaaa"></Input>
            </InputContainer>
            <>  
                <TextTerms>Concordo com os Termos e Condições</TextTerms>
            </>
            <>
                <Button1 onPress={()=>navigation.navigate('Login' as never)}>
                    <ButtonText1>Criar Conta</ButtonText1>
                </Button1> 
                <Button2 onPress={()=>navigation.navigate('Login' as never)}>
                    <ButtonText2>Já possui conta? <ButtonText3>Entrar</ButtonText3></ButtonText2>
                </Button2>
            </>
        </Tela>
        );

}
export default Registro;