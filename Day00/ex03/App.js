import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, Image, View,} from 'react-native';
import Detail from './components/detail';
import Head from './components/head';
import SkillScroll from './components/skillScroll';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Head nameUser="Ismael" imageURL="favicon.png" />
      <SkillScroll />
      <View style={{flex:1, height:310}}>
        <Text style={styles.titleShadow}>CONTINUE LEARNING</Text>
        <ScrollView style={{height:500}} horizontal={true}>
          <Detail
            nameSkill="javascripts"
            imageSkill={require("./assets/javascript.png")}
          />
          <Detail
            nameSkill="javascripts"
            imageSkill={require("./assets/javascript.png")}
          />
          <Detail
            nameSkill="javascripts"
            imageSkill={require("./assets/javascript.png")}
          />
        </ScrollView>
      </View>
      <Image style={{width:350, height:300, borderRadius:15, margin:20, alignSelf:'center', backgroundColor:"grey" }}  /> 
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    // alignItems: 'center',
    // justifyContent:"space-evenly",
  },
  titleShadow:{
    marginLeft:30,
    alignSelf:"flex-start",
     color:"grey", 
     fontWeight:'bold', 
     opacity:0.5,
    marginBottom:10,
    marginTop:10
  },

  scroll:{
  },
});
