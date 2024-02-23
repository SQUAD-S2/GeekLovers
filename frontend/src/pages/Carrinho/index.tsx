import React from "react";
import { View, Container, TitleText, ImagemPerfil, Text, TextContainer, ProdutoContainer } from "./style";
import { StatusBar2} from "../../components/StatusBar";
import NavBar from "../../components/NavBar";
import ProdutoCart from "../../components/ProdutoCart";

export default function Carrinho() {
  const bancodedados = 
  [{ title: "Coleção Marvel ...", preço: 'R$ 299,00', imagem: require('../../../assets/Produtos/ProdutoFunkoPopRecrut.png') }]
  return (
    <View>

      <StatusBar2/>

      <Container>
        <TitleText>Carrinho</TitleText>
        <ImagemPerfil source={require("../../../assets/Ellipse.png")} />
      </Container>

      <TextContainer>
        <Text>1 item</Text>
      </TextContainer>
      <ProdutoContainer>
        {bancodedados.slice(0).map((data, index) => (<ProdutoCart key={index} title={data.title} preço={data.preço} imagem={data.imagem} />))}
      </ProdutoContainer>
      <NavBar numero = {3}/>
    </View>
  );
}
