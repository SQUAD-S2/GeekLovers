import React from "react";
import { Input, InputLabel, Title, ForgotPasswordText, Button1, ButtonText1, Button2, ButtonText2, StyledView, Button3, ButtonText3, InputContainer } from "./style";
import { useForm, Controller } from 'react-hook-form';

export default function Login() {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();
    return (
        <StyledView>

            <Title source={require("../../assets/Logo-Vector.svg")} />

            <InputContainer>
                <InputLabel>Nome</InputLabel>
                <Input placeholder="@gmail.com" />
            </InputContainer>

            <InputContainer>
                <InputLabel>Senha</InputLabel>
                <Controller
                    control={control}
                    render={({ field }) => (
                        <Input placeholder="••••••••••" onChangeText={(text) => setValue('password', text)}
                            secureTextEntry />
                    )}
                    name="password"
                    rules={{ required: 'Senha é obrigatória' }}
                />

            </InputContainer>

            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>

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