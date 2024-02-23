import React from "react";
import { Input, InputLabel, Title, ForgotPasswordText, Button1, ButtonText1, Button2, ButtonText2, Tela, ButtonText3, InputContainer } from "./style";
import { StatusBar2 } from "../../components/StatusBar";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login () {
    const navigation = useNavigation ();
    return(
        <Tela>
            <StatusBar2></StatusBar2>
            <Title source={require('../../../assets/LogoInicio.svg')}/>
            <InputContainer>
                <InputLabel>Nome</InputLabel>
                <Input placeholder="@gmail.com" />
            </InputContainer>

            <InputContainer>
                <InputLabel>Senha</InputLabel>
                <Input placeholder="••••••••••" />
            </InputContainer>

            <ForgotPasswordText>esqueci minha senha</ForgotPasswordText>

            <Button1 onPress={()=>navigation.navigate('Home' as never)}>
                <ButtonText1>Entrar</ButtonText1>
            </Button1>

            <Button2 onPress={()=>navigation.navigate('Registro' as never)}>
                <ButtonText2>Criar Conta</ButtonText2>
            </Button2>

            <Pressable onPress={()=>navigation.navigate('Home' as never)}>
                <ButtonText3>Entrar Como Visitante</ButtonText3>
            </Pressable>

        </Tela>
    );
}