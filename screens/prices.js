import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import { db } from '../firebase-config';
import {collection,getDocs} from "firebase/firestore";
import Element from './element';


const PriceScreen = ({route})=> {
    const [data,setData] = useState([])
    const [search , setSearch] = useState("")
    const [search1 , setSearch1] = useState([])
    const userCollectionRef = collection(db,route.params.name)
    useEffect(()=>{
        const getData = async ()=> {
            const data = await getDocs(userCollectionRef) 
            setData(data.docs.map((doc)=> ({...doc.data(),id:doc.id})));
            
        }
        getData()
    },[])
    const handleSearch = async () =>{
        if (search.includes("lion")){
            setSearch1( "lion")
            
        }else{
            setSearch1("not")
        }console.log(search)
    }

    const searchInput = (e) => {
               setSearch(e)
               handleSearch()
    }
  return (
    <ScrollView>
        <View style={styles.header}>
        <TextInput style={styles.textbox} placeholder= {`search for ${route.params.name}` } onChangeText={(e)=> searchInput(e) } ></TextInput>
        <Text>{search1}</Text>
        </View>
    <View style={styles.container}>
        {data.map((beer)=> {

                if (search) {
                    try {
                        if (((beer.name).toLowerCase()).includes( search.toLowerCase())) {
                        console.log(beer.name)
                        return(<Element name={beer.name} price={beer.price} url={beer.url}/>)
                    } 
                    } catch (error) {
                        console.log(error)
                    }
                    
                }else{
                    return(
                                <Element name={beer.name} price={beer.price} url={beer.url}/>
                                 
                          )  
                }

            
                // if (beer.name===  "Wild Apple") {
                //     console.log(beer.name)
                //     return(<Element name={beer.name} price={beer.price} url={beer.url}/>)
                // }else{
                //     console.log(beer.name)
                //      return(
                //         <Element name={beer.name} price={beer.price} url={beer.url}/>
                         
                //     )   
                // }
           
            
            
                     
        })}
    </View>
    </ScrollView>
  );
}
export default PriceScreen;
const styles = StyleSheet.create({
    container : {
        borderColor : 'red',
        borderWidth : 1,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
   },
   textbox : {
    borderWidth : 1,
    borderColor : "black",
    height : 50,
     width : '70%',
     marginTop:10,
     borderRadius:10,
     paddingLeft:20,
     fontSize:20,
     
    
},
header:{
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
});