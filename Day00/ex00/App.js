
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :"grey",
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCenter: {
    width: "80%" ,
    height: "20%" ,    
    marginTop: "10%",
    marginBottom: 20,
  },

  txtBeautifull: {
    flex:1,
    width: "100%", 
    fontFamily: "Arial",  
    backgroundColor: "white",
    borderRadius:10,
    padding:10 ,  
  },
  
  label : {
    fontSize: 18,
    color: "grey",
  },

  title : {
    fontSize: 23,
  },

  panel : {
    flexDirection:'row',

    alignSelf:'center',
    justifyContent: 'center',
    borderWidth:1,
    borderRadius:10,
  }
});

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgCenter}
        source={require('./assets/shoes.png')}
      />
      {/* Text here  */}
      <View style={styles.txtBeautifull} >
        <Text style={styles.label}> Adidas </Text>
        <Text style={styles.title}> The Yeezy 350 Boost V2 Black Red </Text>
        <View style={styles.panel}>
          <Text style = {{flex:1, alignSelf:'center'}}>42</Text>
          <Text style = {{flex:1,alignSelf:'center'}}>340€</Text>
          <TouchableOpacity style= {{flexDirection:'row', backgroundColor:"black", padding:10, width:"50%", justifyContent:'center'}}> 
            <Image style={{width:30, height:30}} source= {require("./assets/favicon.png")}/>
            <Text style ={{color:"white", fontSize:20, justifyContent:'center'}}>Buy Me</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop:25}}>
        The <Text style={{fontWeight:'bold'}} >Yeezy 350 Boost V2 Bred</Text>
        stands out for its sobriety and simplicity. Unlike most V2 shoes that feature a patterned print,
         this shoe has a monochrome black upper with <Text style={{fontWeight:'bold'}} >red stitching</Text>.
          Yeezy has a monochrome black upper with red stitching that reads SPLY-350. The silhouette is set on a black boost sole semi-translucent. 
        </Text>
        <Text style={{marginTop:25, fontWeight: 'bold', fontSize:18, lineHeight:55}}>
          SKU: CP9652{"\n"}
          Release date: February 2017{"\n"}
          Colorway: CORE BLACK/CORE BLACK/RED{"\n"}
        </Text>
      </View>
        
      
    </View>
  );
}
export default App;
