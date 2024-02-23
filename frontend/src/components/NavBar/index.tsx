import { Text, Button, TouchableOpacity, View, Pressable} from 'react-native';
import *as React from "react";
import { Container2, Image1 } from './style';
import { useNavigation } from '@react-navigation/native';
interface pagina {numero: number};

function NavBar ({numero}:pagina) {
        const navigation = useNavigation ();
    return (
        <>
        <Container2>
                {numero === 1?(<TouchableOpacity onPress={()=>navigation.navigate('Home' as never)}>
                <Image1 source={require('../../../assets/NavBar/IconeCasaRosa.png')}/>
                </TouchableOpacity>):(<TouchableOpacity onPress={()=>navigation.navigate('Home' as never)}>
                <Image1 source={require('../../../assets/NavBar/IconeCasa.png')}/></TouchableOpacity>)} 
                
                {numero === 2?(<TouchableOpacity onPress={()=>navigation.navigate('Busca' as never)}>
                <Image1 source={require('../../../assets/NavBar/IconeBuscaRosa.png')}/>
                </TouchableOpacity>):(<TouchableOpacity onPress={()=>navigation.navigate('Busca' as never)}>
                <Image1 source={require('../../../assets/NavBar/IconeBusca.png')}/></TouchableOpacity>)} 

                {numero === 3?(<TouchableOpacity onPress={()=>navigation.navigate('Carrinho' as never)}>
                <Image1 source={require('../../../assets/NavBar/IconeCarrinhoRosa.png')}/>
                </TouchableOpacity>):(<TouchableOpacity onPress={()=>navigation.navigate('Carrinho' as never)}>
                <Image1 source={require('../../../assets/NavBar/IconeCarrinho.png')}/></TouchableOpacity>)} 

                {numero === 4?(<TouchableOpacity onPress={()=>navigation.navigate('Favoritos' as never)}>
                <Image1 source={require('../../../assets/NavBar/IconeCoracaoRosa.png')}/>
                </TouchableOpacity>):(<TouchableOpacity onPress={()=>navigation.navigate('Favoritos' as never)}>
                <Image1 source={require('../../../assets/NavBar/IconeCoracao.png')}/></TouchableOpacity>)} 

        </Container2>
        </>
        );

}
export default NavBar;