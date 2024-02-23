import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";
import Busca from "../pages/Busca";
import Carrinho from "../pages/Carrinho";
import Registro from "../pages/Registro";
import ProdutoDetalhes from "../pages/ProdutoDetalhes";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Favoritos"
          component={Favoritos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Busca"
          component={Busca}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProdutoDetalhes"
          component={ProdutoDetalhes}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
