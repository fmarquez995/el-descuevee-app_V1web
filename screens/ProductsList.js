import React, {useEffect, useState} from 'react';
import { ScrollView,View, Text, FlatList, StyleSheet } from 'react-native';
import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';
import Slider from '../components/Slider/Slider';

export function ProductsList ({navigation}) {
function renderProduct({item: product}) {
    return (
        
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });


//lista de productos
  return (
    <ScrollView>
    <View>
    
    <Slider></Slider>
   
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
      
    />
    
     </View>
     </ScrollView>
  );
}

 //Estilo sección de fondo en home
const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#ecf0f1',
  },



  productsListContainer: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});