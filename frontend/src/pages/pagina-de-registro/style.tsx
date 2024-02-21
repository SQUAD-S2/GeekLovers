import styled from 'styled-components/native';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

export const StyledView = styled.View`
    flex: 1;
    align-items: center;
    padding: 20px;
    background: #F3F3F3;
`
export const Title = styled.Image`
    width: 366px;
    height: 50px;
    margin: 80px 0px 80px 0px;
`

export const InputContainer = styled.View`
position: relative;
margin-top: 15px;
width: 100%;
`

export const Input = styled.TextInput`
    width: 100%;
    height: 57px;
    padding: 18px;
    border-radius: 5px;
    border: 2px solid #F3C63C;
    color: #0303034D;
    margin-right: 180px;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;
`

export const InputLabel = styled.Text`
position: absolute;
top: -10;
left: 10;
padding: 0px 5px 0px 5px;
background: #F3F3F3;
color: #988A3A;
font-family: 'Roboto';
font-size: 20px;
font-weight: 500;
`
;

export const ContainerTerms = styled.View`
    align-items: center;
    margin-top: 20px;
    justify-content: center;
    flex-direction: row;
`
export const TextTerms = styled.Text`
    text-align: center;
    color: #030303;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
`
export const BoxTerms = styled.View`
    margin-right: 10px;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1.5px solid #EA618A;
`
export const CheckBoxTerms = styled.View`
    margin-right: 10px;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: #fca9c2;
    border: 1.5px solid #EA618A;
`
export const Button1 = styled.TouchableOpacity` 
    padding: 1.4rem;
    align-items: center; 
    justify-content: center;
    gap: 1rem; 
    border-radius: 1rem;
    background: #EA618A; 
    margin-top: 1rem; 
    width: 80vw; 
    height: 3.5rem; 
    box-shadow: 0.1rem 0.2rem  rgba(0, 0, 0, 0.25); 
` 
export const ButtonText1 = styled.Text` 
    font-size: 1.25rem;
    color: #F3F3F3; 
    font-family: 'Roboto';
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
    font-family: 'Roboto';
    font-weight: 300;
`

export const ButtonText3 = styled.Text`
    color: #EA618A; 
    text-align: left; 
    font-family: 'Roboto';
    font-weight: 600;
`