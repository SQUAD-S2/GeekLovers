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

export const Title = styled.Text`
    font-size: 30px;
    color: #0303034D;
    margin: 80px 0px 80px 0px;
`


export const InputContainer = styled.View`
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
padding: 0px 5px 0px 5px;
background: #F3F3F3;
color: #988A3A;
font-family: Roboto;
font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;

`
export const ForgotPasswordText = styled.Text`
align-self: flex-end;
color: #EA618A;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Roboto;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin:10px 0px 120px 0px;
font-family: 'Roboto';
`

export const Button1 = styled.TouchableOpacity`
    padding: 16px;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    background: #EA618A;
    width: 100%;
    height: 3.5rem; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ButtonText1 = styled.Text`
    color: #F3F3F3;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    margin-top: -4px;
`
export const Button2 = styled.TouchableOpacity`
    margin-top: 20px;
    padding: 16px;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    background: #F3F3F3;
    width: 100%;
    height: 3.5rem; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ButtonText2 = styled.Text`
    color: #EA618A;
    margin-left: 10px;
    margin-top: -4px;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 600;
    text-align: left;
`

export const Button3 = styled.TouchableOpacity`
    margin-top: 30px;
    background: transparent;
   
`

export const ButtonText3 = styled.Text`
    color: #EA618A;
    font-size: 24px;
    font-weight: 600;
    font-family: 'Roboto';

`