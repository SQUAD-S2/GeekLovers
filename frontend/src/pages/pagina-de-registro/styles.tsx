import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";

export const Title = styled.Text`
    font-size: 1rem;
    font-weight: 600;
    padding: 0.9rem 2rem ;
    background-color: #F4D831;
    width: 100vw;
`

export const Container1 = styled.View`
    padding-top: 2rem;
    width: 100vw; 
    display: flex;
    align-items: center;
`

export const SubTitle = styled.Text`
    text-aling: center;
    font-size: 3.25rem;
`

export const Container2 = styled.View`
    position: relative;
    display: flex;
    align-items: flex-start;
`

export const InputLabel = styled.Text`
    position: absolute;
    left: 1rem;
    top: -0.1rem;
    background: #ffffff;
    padding: 0 0.2rem;
    text-aling: left;
    color: #988A3A;

`
export const Input = styled.TextInput`
    color: #03030380;
    font-size: 1rem;
    max-width:80vw;
    padding: 1rem 10.4375rem 1rem 1rem;
    margin: 0.5rem 0;
    border-radius: 0.3125rem;
    border-width: 0.13rem;
    border-style: solid;
    border-color: #F3C63C;
    border: 2px solid;
    border-image: linear-gradient(180deg, #F3C63C 0%, #E84E99 100%);
    border-image-slice: 1;
`

export const TextTerms = styled.Text`
    padding: 1rem;
    text-align: center;
    color: #03030380;
`

export const Button1 = styled.TouchableOpacity` 
    margin-top: 0.2rem;
    padding-top: 0.9125rem;
    align-items: center; 
    border-radius: 1rem;
    background: #EA618A; 
    width: 21.125rem;
    height: 3.8125rem;
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
    margin-right: 1rem; 
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


