import { Text, Button, TouchableOpacity, View, Pressable} from 'react-native';
import *as React from "react";
import { Tela, Text1, CardAnuncio, Container1, Container2, Container3, Container5, Image, Image1, Image2, Container4, Title, ButtonComprar, Image3, Image4, Container6, Container7, PerguntaResposta, Title2, Input, DescricaoPerfil, DescricaoProduto, Descricao, TextPrecoPromocao, TextPreco, TextDescricao, Image5, TitleVendedor, Image6, Image7 } from './style';
import { StatusBar2 } from '../../components/StatusBar';
{/*import { useNavigation } from */}

function ProdutoDetalhes () {
    return (
        <Tela>
        <CardAnuncio>
            <StatusBar2></StatusBar2>
            <Container1>
                <Pressable>
                    <Image source={require('../../../assets/IconeVoltar.png')}/>
                </Pressable>
            <Image source={require('../../../assets/IconeCarrinho.png')}/>
            </Container1>
        </CardAnuncio>
        <Container2>
            <Image1 source={require('../../../assets/ImagemProduto.png')}/>
        </Container2>
        <Container3>
            <Container4>
                <Image2 source={require('../../../assets/ImagemFiltro.png')}/>
                <Image2 source={require('../../../assets/ImagemFiltro1.png')}/>
            </Container4>
            <Container5>
                <Container6>
                    <Title>Coleção Marvel Comics (Groot)</Title>
                </Container6>
                <Container7>
                    <Image3 source={require('../../../assets/IconeAddCarrinho.png')}/>
                    <Image4 source={require('../../../assets/IconeFavorito.png')}/>
                </Container7>
            </Container5>
            <Descricao>
                <DescricaoProduto>
                    <TextPrecoPromocao>R$ 499,00</TextPrecoPromocao>
                    <TextPreco>R$ 299,90</TextPreco>
                    <TextDescricao>Tamanho: 15x10x7 cm</TextDescricao>                    <TextDescricao>Estado: semi-novo</TextDescricao>
                </DescricaoProduto>
                <DescricaoPerfil>
                    <Image5 source={require('../../../assets/ImagemPerfilVendedor.png')}/>
                    <TitleVendedor>Status do Vendedor</TitleVendedor>
                    <Image6 source={require('../../../assets/ImagemStatus.png')}/>
                </DescricaoPerfil>
            </Descricao>
        </Container3>
        <PerguntaResposta>
            <Title2>Perguntas e Respostas</Title2>
            <Input placeholder="Adiciona aqui sua pergunta ..." />
            <Image7 source={require('../../../assets/ImagemUltimasPerguntas.png')}/>
        </PerguntaResposta>
        <ButtonComprar>
            <Text1>Comprar</Text1>
        </ButtonComprar>
        </Tela>
        );

}
export default ProdutoDetalhes;