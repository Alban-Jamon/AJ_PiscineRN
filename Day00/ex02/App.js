import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View, TextInput, Text } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:"90%"}}>
        <Image style={{ resizeMode: 'center', alignSelf:'center', width:230, height:220, marginVertical:"25%"}} source={require("./assets/ItKakademy.png")} />
      
      <View style={styles.inputPanel}>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <Image style={styles.inputImage} source={require("./assets/mail.png")} />
      </View>
      <View style={styles.inputPanel}>
        <TextInput
          style={styles.input}
          placeholder="Password"
        />
        <Image style={styles.inputImage} source={require("./assets/lock.png")} />
      </View>
      <View >
        <Text style={styles.loginButton}>Login</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    flex:3,
    margin: 1,
    padding: 10,
  },
  inputPanel:{
    flexDirection:'row',
     alignItems:'center',
     borderWidth: 1,
     marginBottom:20
  },
  inputImage:{
    flex:1,
    width:40,
    height:30,
    opacity:0.4,
    resizeMode: "center",

  },

  loginButton:{
    backgroundColor:"#E84710",
    color:"white",
    fontSize:20,
    padding:15,
    textAlign :'center',
    borderRadius:10,
  }
});
