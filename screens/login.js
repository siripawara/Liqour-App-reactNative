import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,Button,TextInput} from  'react-native';
import { auth } from '../firebase-config';
import {signInWithEmailAndPassword} from "firebase/auth";



export default function LoginScreen({navigation}) {
   const [name,setName] = useState("")
   const [password,setPassword] = useState("")
  
  
   const handlelogin = async () => {
     try {
       const user = await signInWithEmailAndPassword(auth,name,password)
       console.log("succesfully")
       navigation.navigate('Home')
      } catch (error) {
       console.log(error.message)
       console.log(error.code)
       alert(error.message)
       console.log(name,password)
     }
    
  }  
  
  const goToSign = () =>{
    navigation.navigate('registration')
  }
  const goToHome = () =>{
    navigation.navigate('Home')
  }
    return (
     <View style={styles.container}>
         <TextInput style={styles.textbox} placeholder='Enter Your Name' onChangeText={(value)=> setName(value)}> </TextInput>
         <TextInput style={styles.textbox} placeholder='Enter Your Password' onChangeText={(value)=> setPassword(value)}> </TextInput>
         <Button title='Log Now' onPress={handlelogin} />
        
         <Button title='Sign Up' onPress={goToSign} />
         <Button title='Gov' onPress={goToHome} />
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
   },
   text: {
    borderWidth : 1,
    borderColor : "black",
    
}
});
