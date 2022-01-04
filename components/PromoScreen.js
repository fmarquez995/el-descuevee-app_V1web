import React, { Component } from 'react'
import { Button } from 'react-native'
import { StyleSheet,Text,View,ScrollView,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



export default class PromoScreen extends Component {
  render() {
    return (

      <ScrollView>
       
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top',backgroundColor:'#174da0' }}> 
            <Text style={{color:'white',size:''}}>Revisa nuestras promociones</Text>

             <Button 
  
                // Some properties given to Button
                title="COTIZAR"
                onPress={() => Alert.alert(
                    'Its GeeksforGeeks !')}
             />        
      </View>

      <View>
       <Image
          style={{width: 300, height: 320 ,marginLeft:'40px'}}
           source={require('../assets/imgs/promo1.png')}
        />
      </View>

      <View>
       <Image
          style={{width: 300, height: 320,marginTop:'30px',marginLeft:'40px'}}
           source={require('../assets/imgs/promo2.png')}
        />
      </View>

      <View>
       <Image
          style={{width: 300, height: 320,marginTop:'30px',marginLeft:'40px'}}
           source={require('../assets/imgs/promo3.png')}
        />
      </View>

      <View>
       <Image
          style={{width: 300, height: 320,marginTop:'30px',marginLeft:'40px'}}
           source={require('../assets/imgs/promo4.png')}
        />
      </View>

      <View>
       <Image
          style={{width: 300, height: 320,marginTop:'30px',marginLeft:'40px'}}
           source={require('../assets/imgs/promo5.png')}
        />
      </View>

      
     

      </ScrollView>

    )
  }
}

// Some styles given to button
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});