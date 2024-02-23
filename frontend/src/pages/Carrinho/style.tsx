import styled from "styled-components/native"; 

export const View = styled.View` 
  justify-content: flex-start; 
  background: #F3F3F3; 
`

export const Container = styled.View`
  flex-direction: row; 
  margin-bottom: 5px; 
  align-items: flex-start; 
  margin-top: -5px; 
  padding: 20px; 
`

export const TitleText = styled.Text`
  width: 123px; 
  height: 42px; 
  font-family: Roboto; 
  font-size: 32px; 
  font-weight: 500; 
  line-height: 42px;
  letter-spacing: 0em; 
  text-align: center; 
  color: #000000; 
  margin-right: 210px; 
`

export const TextContainer = styled.View`
  flex: 1; 
  margin-top: -10px;
  padding: 0px 20px; 
`

export const Text = styled.Text`
  width: 72px; 
  height: 25px; 
  font-family: Roboto; 
  font-size: 24px;
  font-weight: 400; 
  line-height: 24px; 
  letter-spacing: 0em; 
  text-align: center; 
  color: #03030380; 
`

export const ImagemPerfil = styled.Image`
  width: 48px; 
  height: 48px; 
`

export const ProdutoContainer = styled.View`
  display: flex;
  justify-content: center;
`