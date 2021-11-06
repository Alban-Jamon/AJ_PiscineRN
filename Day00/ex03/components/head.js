import React from "react";
import { render } from "react-dom";
import { Text, View, Image, StyleSheet  } from "react-native";


function Head(props){
    return (
        <View style={styles.head}>
            <View style={styles.columns}>
                <Image style={styles.img} />
            </View>
            <View style={styles.columns}>
                <Text style={styles.txt}> </Text>
                <Text style={styles.txt}> </Text>
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
        backgroundColor:"white"   
    },
    txt:{
        textAlign:"center",
        backgroundColor:"grey",
        borderRadius: 15,
        width:100,
        margin:2
    },


})

export default Head;
