import React, { useContext } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { CartContext } from '../CartContext';


//Carrito titulo
export function CartIcon({navigation}) {
  const {getItemsCount} = useContext(CartContext);
  return (
    <View style={styles.container}>
      

      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >Carrito ({getItemsCount()})</Text>
         
    </View>
  );
}

// Estilos carrito button en header
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#2fb842',
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});