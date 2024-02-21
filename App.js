import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import ProductScreen from "./screens/ProductScreen";
import AuthScreen from "./screens/AuthScreen";
import CartScreen from "./screens/CartScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Produits" component={ProductScreen} />
        <Tab.Screen name="Mon Panier" component={CartScreen} />
        <Tab.Screen name="Se Connecter/Mon Profil" component={AuthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
