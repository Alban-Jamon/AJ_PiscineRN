import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import Skill from "./skill";

function Detail(props) {
    return (
        <View style ={{marginLeft:30, flex:1,}}>
            <Image style={styles.BigImage}  />
            <View style={styles.panel}>
                <Image style={styles.img}  />
                <Text style={styles.txt}></Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({

    panel:{
        flexDirection:"row",
        flex:1,
        backgroundColor:"white",
        padding:10,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        justifyContent:"center",
        maxHeight:100,
       
        
    },

    img:{
        width:60,
        height:60,
        margin:10,
        alignSelf:"center",
        backgroundColor: "grey",
        borderRadius: 15

    },
    
    txt:{
        alignSelf:"center",
        margin:10,
        fontWeight:"bold",
        backgroundColor:"grey",
        borderRadius:15,
        width:100

    },
    BigImage:{
        flex:1,
        width:300,
        // resizeMode:"center",
        // alignSelf:"center",
        backgroundColor:"grey",
        borderTopRightRadius:20,
        borderTopLeftRadius:15,
        
    }
});


export default Detail;