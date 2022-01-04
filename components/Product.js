import React, { Component } from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';


export function Product({name, price, image, onPress}) {
  return (

     


    <TouchableOpacity style={styles.card} onPress={onPress}>
     
     
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
}

//Estilos card productos
const styles = StyleSheet.create({
  card: {
    width:'70%',
    marginLeft:'10%',
    backgroundColor: '#174da0',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 30,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'white'
  },
  price: {
    color:'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

   heroHeaderImage: {
    height: 80
  }
});