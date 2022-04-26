import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,Button,TextInput,ImageBackground} from  'react-native';
import { auth } from '../firebase-config';
import {createUserWithEmailAndPassword} from "firebase/auth";
const backgroundImage = require("../assests/liqour.jpg");


export default function registrationScreen({navigation}) {
   const [name, setName] = useState("")
   const [password, setPassword] = useState("")
  
  
   const handleSignup = async () => {
     try {
       const user = await createUserWithEmailAndPassword(auth,name,password)
       console.log("succesfully")
       navigation.navigate('Home')
      } catch (error) {
       console.log(error.message)
       console.log(name,password)
       alert(error.message)
     }
    
  }  
  
  const goToLogin = () =>{
    navigation.navigate('login')
  }
  
    return (
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
     <View style={styles.container}>
         <TextInput style={styles.textbox} placeholder='Enter Your Name' onChangeText={(value)=> setName(value)}> </TextInput>
         <TextInput style={styles.textbox} placeholder='Enter Your Password' onChangeText={(value)=> setPassword(value)}> </TextInput>
         <View style={styles.button}><Button title='Sign up' onPress={handleSignup} /></View>
         <View style={styles.button}><Button title='Go To Login' onPress={goToLogin} /></View>
     </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container : {
    flex:1,
     alignItems: 'center',
     paddingTop : 120
    },
   textbox : {
    borderWidth: 1,
    backgroundColor:'gray',
    borderRadius:15,
    color:"white",
    fontSize :20,
    paddingLeft:20,
    height: 50,
    width: "70%",
    margin:10
   },
   ImageBackground: {
    height: "100%",
    width: "100%"
  },
  button: {
    margin: 7,
  },
});
