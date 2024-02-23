import { Text, Button, TouchableOpacity, View} from 'react-native';
import *as React from "react";
import { Title, Container, Container1, Container2, SubTitle, Image , Image1 } from './style';
import ProdutoCard from '../../components/ProdutoCard';
import NavBar from '../../components/NavBar';

function Favoritos () {
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
        <Container>
            <Title>9:41</Title>
            <Container1>
            <SubTitle>Favoritos</SubTitle>
            <Image source={require('../../../assets/ImgPerfil.png')}/>
            </Container1>
            <Container2>
            {bancodedados.slice(0, 2).map((data, index) => (<ProdutoCard key={index} title={data.title} preço={data.preço} imagem={data.imagem} />))}
            </Container2>
        </Container>
        <NavBar numero = {4}/>
        </>
        );

}
export default Favoritos;