import styled from 'styled-components/native';


export const Tela = styled.View`
    align-items: center;
`

export const Title = styled.Image`
    width: 374px;
    height: 50px;
    margin: 4rem 0 11rem 0; 
`

export const InputContainer = styled.View`  
    position: relative;
    margin-bottom: 10px;
`

export const ForgotPasswordText = styled.Text`
    font-size: 14px;
    color: #EA618A;
    align-self: flex-end;
    margin: 0 10vw 20vw 0; 
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const InputLabel = styled.Text`
    position: absolute;
    top: -0.6rem;
    left: 1rem;
    padding: 0 0.2rem;
    background: #F3F3F3;
    text-align: left;
    color: #988A3A;

`
export const Input = styled.TextInput`
    color: #03030380;
    width:80vw;
    padding: 1.125rem 14.4375rem 1.125rem 1rem;
    margin-bottom: 1rem;
    border-radius: 0.3125rem;
    border-width: 0.13rem;
    border-style: solid;
    border-color: #F3C63C;
`

export const TextTerms = styled.Text`
    text-align: center;
    color: red;
`

export const Button1 = styled.TouchableOpacity` 
    justify-content: center;
    align-items: center; 
    border-radius: 1rem;
    background: #EA618A; 
    margin-top: 1rem; 
    width: 80vw; 
    height: 3.5rem; 
    box-shadow: 0.1rem 0.2rem  rgba(0, 0, 0, 0.25); 
` 
export const ButtonText1 = styled.Text` 
    font-weight: 600;
    font-size: 20px;
    color: #F3F3F3; 
` 

export const Button2 = styled.TouchableOpacity`
    justify-content: center;
    align-items: center; 
    border-radius: 1rem;
    background: transparent; 
    margin-top: 1rem; 
    width: 80vw; 
    height: 3.5rem; 
    box-shadow: 0.1rem 0.2rem  rgba(0, 0, 0, 0.25); 
` 

export const ButtonText2 = styled.Text`
    font-size: 18px;
    color: #EA618A; 
    font-weight: 600;
    text-align: left; 
`

export const ButtonText3 = styled.Text`
    font-size: 20px;
    color: #EA618A; 
    font-weight: 600;
    margin-top: 1.8rem;
`