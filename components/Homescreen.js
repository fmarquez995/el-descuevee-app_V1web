// Homescreen.js
import React, { Component,Fragment } from 'react';
import { Image,StyleSheet,Text,View} from 'react-native';
import {  createAppContainer,SafeAreaView  } from 'react-navigation';
import { ProductsList } from '../screens/ProductsList.js';
import { ProductDetails } from '../screens/ProductDetails.js';
import { Cart } from '../screens/Cart.js';
import { CartIcon } from '../components/CartIcon.js';
import { CartProvider } from '../CartContext.js';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Otras pantallas 
/*
 <Stack.Screen name="Slider" component={Slider} 
   options={({ navigation }) => ({
   headerRight: () => <CartIcon navigation={navigation}/>
   })}/>
*/
export default class Homescreen extends Component {
 
 render() {
    return (      
        
     <CartProvider>       
      <NavigationContainer>          
        <Stack.Navigator>
               
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: '',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/> 

      

      <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />   

         
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'Cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />       


        </Stack.Navigator>  
      </NavigationContainer> 
    </CartProvider>     

    
    
    )
  }
  
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }, 
 
});