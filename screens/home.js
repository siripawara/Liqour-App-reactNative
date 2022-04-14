import { StatusBar } from 'expo-status-bar';
import React, { useState, } from 'react';

import { auth } from '../firebase-config';
import {onAuthStateChanged,signOut} from "firebase/auth";

import { StyleSheet,Button, Text, View,Pressable,ImageBackground,ScrollView, } from  'react-native';
const backgroundImage = require('../assests/123.jpg')




export default function HomeScreen({navigation}) {
  const [name, setName] = useState("")
  onAuthStateChanged(auth,(currentUser)=>{
      setName(currentUser)
  })
  const HandleSignOut = async() =>{
    await signOut(auth)
    navigation.navigate("loginFirst")
  }
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
        <ScrollView style={{ width:'100%',flex: 1,height:'50%',marginTop:'35 %'}}>
            <View style={styles.container}>
        
            <Pressable onPress={() => navigation.navigate('prices',{name:'arrack'})}  style={styles.label}>
                <Text style={styles.labelFont}>arrack</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('prices',{name:'beer'})} style={styles.label}>
                <Text style={styles.labelFont}>Beer</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('prices',{name:'brandy'})} style={styles.label}>
                <Text style={styles.labelFont}>Brandy</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('prices',{name:'vodka'})} style={styles.label}>
                <Text style={styles.labelFont}>Vodka</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('prices',{name:'whiskey'})} style={styles.label}>
                <Text style={styles.labelFont}>Whiskey</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('prices',{name:'wine'})} style={styles.label}>
                <Text style={styles.labelFont}>Wine</Text>
            </Pressable>
            
            <Pressable style={styles.label}>
                <Text style={styles.labelFont}>Wine{name?.email}</Text>
            </Pressable>

            <Button title='Logout' onPress={HandleSignOut} />

        </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    ImageBackground: {
        height: '100%',
        width : '100%'
      },
      container : {
        marginTop : 0,
        flex : 1, 
        flexDirection: 'column',
        alignItems: 'center'
      },
      label : {
        margin:30,
        backgroundColor: 'rgba(255,255,255,0.7)',
        height : 50,
        width: '70%',
        flex : 1, 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 10,
        
      },
      labelFont : {
          fontSize : 20,
          opacity : 1
      }
});
