import { Text, Button, TouchableOpacity, View } from 'react-native';
import *as React from "react";
import { Title, Container, Container1, Container2, Container3, Text1, Image, Image1 } from './style';
import ProdutoCard from '../../components/ProdutoCard';
import {StatusBar} from '../../components/StatusBar';
import NavBar from '../../components/NavBar';

function Busca() {
    const bancodedados = 
    [{ title: "Coleção Marvel ...", preço: 'R$ 299,00', imagem: require('../../../assets/Produtos/ProdutoFunkoPopRecrut.png') }, 
    { title: "Coleção Marvel ...", preço: 'R$ 299,00', imagem: require('../../../assets/Produtos/ProdutoPalword.png') }, 
    { title: "Fourth Wing - Vol 1 ...", preço: 'R$ 99,90', imagem: require('../../../assets/Produtos/ProdutoFourthWing.png') }, 
    { title: "The Last of Us 2 ...", preço: 'R$ 299,00', imagem: require('../../../assets/Produtos/ProdutoTheLast.png') }, 
    { title: "GTA 6", preço: 'R$ 399,00', imagem: require('../../../assets/Produtos/ProdutoGTA6.png') }, 
    { title: "Coleção HQ Capitã ...", preço: 'R$ 299,00', imagem: require('../../../assets/Produtos/ProdutoCapitaMarvel.png') }, 
    { title: "Box Senhor dos An...", preço: 'R$ 399,00', imagem: require('../../../assets/Produtos/ProdutoBoxSenhor.png') }]
    return (
        <>
            <StatusBar />
            <Container>
                <Container1>
                    <Text1>HQ</Text1>
                </Container1>
                <Container1>
                    <Text1>Jogos</Text1>
                </Container1>
                <Container1>
                    <Text1>Acessórios</Text1>
                </Container1>
                <Container1>
                    <Text1>Livros</Text1>
                </Container1>
            </Container>
            <Container3>
                {bancodedados.slice(3).map((data, index) => (<ProdutoCard key={index} title={data.title} preço={data.preço} imagem={data.imagem} />))}
            </Container3>
                <NavBar numero = {2}/>
        </>
    )
}

export default Busca;