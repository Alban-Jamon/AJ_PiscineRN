import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";

function Skill(props){
    return(
        <View style= {styles.panel}>
            <Image style={styles.img}  />
            <Text style={styles.txt}></Text>
        </View>
    );
}
const styles = StyleSheet.create({
    panel:{
        flexDirection:"row",
        flex:1,
        backgroundColor:"white",
        padding:10,
        borderRadius:15,
        justifyContent:"center",
        marginLeft:20,
        width:150
    },

    img:{
        flex:1,
        width:60,
        height:60,
        margin:10,

    },
    
    txt:{
        alignSelf:"center",
        margin:10,
        fontWeight:"bold",

    },
});


export default Skill;