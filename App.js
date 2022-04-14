import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/home';
import PriceScreen from './screens/prices';
import LoginScreen from './screens/login';
import registrationScreen from './screens/registration';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const startupPageTabs = () =>{
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'login') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'registration') {
              iconName = focused ? 'ios-list-outline' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
      <Tab.Screen name="login" component={LoginScreen}/>
      <Tab.Screen name="registration" component={registrationScreen} />
    </Tab.Navigator>
  )
} 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="registration">
        
        <Stack.Screen name="loginFirst" component={startupPageTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}  />
        <Stack.Screen name="prices" component={PriceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
