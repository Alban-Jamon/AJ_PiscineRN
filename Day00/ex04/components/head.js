import React from "react";
import { render } from "react-dom";
import { Text, View, Image, StyleSheet  } from "react-native";


function Head(props){
    return (
        <View style={styles.head}>
            <View style={styles.columns}>
                <Image style={styles.img} source={require("./../assets/Ismael.jpg")}/>
            </View>
            <View style={styles.columns}>
                <Text style={styles.txt}>Welcome back, </Text>
                <Text style={styles.txt}>{props.nameUser} </Text>
            </View>
            <View style={styles.columns}>
                <Image style={{width:40, height:40}} source={require("./../assets/calendar.png")} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    head:{
        flexDirection:"row",
        flex:1,
        height:200

    },
    columns:{
        margin:20,
        flexDirection:"column",
        justifyContent:"center",
    },
    img:{
        borderRadius:100,
        width:100,
        height:100,        
    },
    txt:{
        textAlign:"center"
    },


})

export default Head;
