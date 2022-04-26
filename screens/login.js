import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const backgroundImage = require("../assests/liqour.jpg");

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, name, password);
      console.log("succesfully");
      navigation.navigate("Home");
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
      alert(error.message);
      console.log(name, password);
    }
  };

  const goToSign = () => {
    navigation.navigate("registration");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
        <View style={styles.container}>
          <TextInput
            style={styles.textbox}
            placeholder="Enter Your Name"
            onChangeText={(value) => setName(value)}
          >
            {" "}
          </TextInput>
          <TextInput
            style={styles.textbox}
            placeholder="Enter Your Password"
            onChangeText={(value) => setPassword(value)}
          >
            {" "}
          </TextInput>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Log Now"
              onPress={handlelogin}
            />
          </View >
          <View style={styles.button}>
            <Button style={styles.button} title="Sign Up" onPress={goToSign} />
          </View>

          <View style={styles.button}>
            <Button style={styles.button} title="Proceed without  login" onPress={goToHome} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 120,
  },
  textbox: {
    borderWidth: 1,
    backgroundColor: "gray",
    borderRadius: 15,
    color: "white",
    fontSize: 20,
    paddingLeft: 20,
    height: 50,
    width: "70%",
    margin: 10,
  },
  text: {
    borderWidth: 1,
    borderColor: "black",
  },
  ImageBackground: {
    height: "100%",
    width: "100%",
  },
  button: {
    margin: 7,
  },
});
