import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image} from  'react-native';




export default function Element(props) {
    const {name,price,url} = props
    return (
     <View style={styles.container}>
         <Image source={{uri:url}} style={styles.image}/>
         <Text style={styles.name}>{name}</Text>
         <Text style={styles.price}>rs.{price}</Text>
     </View>
        
        
        

  );
}

const styles = StyleSheet.create({
    container : {
    flex:1,
     alignItems: 'center',
     marginBottom : 20,
     marginTop : 20,
    },
    image : {
      height : 300,
      width : 300
  },
  name : {
      fontSize : 22,
  },
  price : {
      fontSize : 20
  }
});
