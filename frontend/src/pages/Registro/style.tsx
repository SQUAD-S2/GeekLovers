import styled from 'styled-components/native';


export const Tela = styled.View`
    align-items: center;
`

export const Title = styled.Image`
    width: 374px;
    height: 50px;
    margin: 3rem 0; 
`

export const InputContainer = styled.View`  
    position: relative;
    margin-bottom: 10px;
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
    color: #03030380;
`

export const Button1 = styled.TouchableOpacity` 
    padding: 1.4rem;
    align-items: center; 
    gap: 1rem; 
    border-radius: 1rem;
    background: #EA618A; 
    margin-top: 1rem; 
    width: 80vw; 
    height: 4.5rem; 
    box-shadow: 0.1rem 0.2rem  rgba(0, 0, 0, 0.25); 
` 
export const ButtonText1 = styled.Text` 
    font-size: 1.25rem;
    color: #F3F3F3; 
` 

export const Button2 = styled.TouchableOpacity`
    padding: 1.6rem;
    align-items: center; 
    gap: 1rem; 
    margin-top: 1rem; 
    width: 27rem; 
    height: 4.5rem; 
` 

export const ButtonText2 = styled.Text`
    color: black; 
    text-align: left; 
`

export const ButtonText3 = styled.Text`
    color: #EA618A; 
    text-align: left; 
`