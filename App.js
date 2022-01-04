import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

//otras pantallas
import HomeScreen from './components/HomeScreen.js';
import PromoScreen from './components/PromoScreen.js';
import InfoScreen from './components/InfoScreen.js';

export default class App extends React.Component {
  render() { 
    return <AppContainer/>;
  }
}


//navegador entre pantallas 
const AppNavigator = createBottomTabNavigator({
  Inicio:{
    screen:HomeScreen
  },
  Promociones:{
    screen:PromoScreen
  },
   Información:{
    screen:InfoScreen
  }
}, {
  initialRouteName: "Inicio"
});
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});