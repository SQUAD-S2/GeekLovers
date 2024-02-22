import React from "react";
import { Input, InputLabel, Title, ForgotPasswordText, Button1, ButtonText1, Button2, ButtonText2, StyledView, Button3, ButtonText3, InputContainer } from "./style";

export default function Login () {
    return(
        <StyledView>

            <Title>GEEKLOVERS</Title>

            <InputContainer>
                <InputLabel>Nome</InputLabel>
                <Input placeholder="@gmail.com" />
            </InputContainer>

            <InputContainer>
                <InputLabel>Senha</InputLabel>
                <Input placeholder="••••••••••" />
            </InputContainer>

            <ForgotPasswordText>esqueci minha senha</ForgotPasswordText>

            <Button1>
                <ButtonText1>Entrar</ButtonText1>
            </Button1>

            <Button2>
                <ButtonText2>Criar Conta</ButtonText2>
            </Button2>

            <Button3>
                <ButtonText3>Entrar Como Visitante</ButtonText3>
            </Button3>

        </StyledView>
    );
}
