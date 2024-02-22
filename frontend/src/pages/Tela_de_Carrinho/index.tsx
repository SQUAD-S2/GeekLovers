import React from "react";
import { View, Container, TitleText, ImagemPerfil, Text } from "./style";

export default function Carrinho() {
  return (
    <View>
      <Container>
        <TitleText>Carrinho</TitleText>
        <ImagemPerfil source={require("../../../assets/Ellipse.png")} />
      </Container>
      <Text>3 itens</Text>
    </View>
  );
}
