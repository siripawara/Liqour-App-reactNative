import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,Button,TextInput} from  'react-native';
import { auth } from '../firebase-config';
import {createUserWithEmailAndPassword} from "firebase/auth";



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
     <View style={styles.container}>
         <TextInput style={styles.textbox} placeholder='Enter Your Name' onChangeText={(value)=> setName(value)}> </TextInput>
         <TextInput style={styles.textbox} placeholder='Enter Your Password' onChangeText={(value)=> setPassword(value)}> </TextInput>
         <Button title='Sign up' onPress={handleSignup} />
         <Button title='Go To Login' onPress={goToLogin} />
     </View>
  );
}

const styles = StyleSheet.create({
    container : {
    flex:1,
     alignItems: 'center',
     marginBottom : 20,
     marginTop : 60,
    },
   textbox : {
       borderWidth : 1,
       borderColor : "black",
       height : 50,
        width : '70%'
   }
});
