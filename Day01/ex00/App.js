import * as React from 'react';
import { Text, StatusBar, StyleSheet, ImageBackground, View, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SafeAreaView from 'react-native-safe-area-view';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});


function Model3({ navigation }) {
  return (
        <SafeAreaView style={[styles.container,]}>
          
          <ImageBackground
            source={require('./assets/images/ModelS.jpeg')} 
            style= {[{flex:1, width:400}, styles.container]}
            resizeMethod="resize">
          <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
          <View style={{flex:1, paddingTop:100}}>
            <Text style={{opacity:0.9, fontSize:30, color:"#3F3E3E", alignSelf:'center'}}>Model Y</Text>
            <Text style={{opacity:0.9}}>Order Online for <Text style={{textDecorationLine:"underline"}}>Toucheless Delivery</Text></Text>
          </View>
          <Pressable
            style={{backgroundColor:"#3F3E3E", width:"70%", height:"6%", opacity:0.8, borderRadius:25, justifyContent:"center", alignItems:'center',marginBottom:100}}
            onPress={() => navigation.navigate('ModelS')}
          >
            <Text style={{color:"white", fontSize:15, fontWeight:"bold"}}>Custom Order</Text>
          </Pressable>
    
          </ImageBackground>
        </SafeAreaView>
      );
}

// function ModelS({ navigation }) {
//   return (
//     <SafeAreaView style={[styles.container, {flex:1, }]}>
      
//       <ImageBackground
//         source={require('./assets/images/ModelS.jpeg')} 
//         style= {[{flex:1, width:400}, styles.container]}
//         resizeMethod="resize">
//       <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
//       <Text>Dark Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Model3')}
//       />

//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// function ModelX({ navigation }) {
//   return (
//     <SafeAreaView style={[styles.container, {flex:1, }]}>
      
//       <ImageBackground
//         source={require('./assets/images/ModelS.jpeg')} 
//         style= {[{flex:1, width:400}, styles.container]}
//         resizeMethod="resize">
//       <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
//       <Text>Dark Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Model3')}
//       />

//       </ImageBackground>
//     </SafeAreaView>
//   );
// }
// function ModelY({ navigation }) {
//   return (
//     <SafeAreaView style={[styles.container, {flex:1, }]}>
      
//       <ImageBackground
//         source={require('./assets/images/ModelS.jpeg')} 
//         style= {[{flex:1, width:400}, styles.container]}
//         resizeMethod="resize">
//       <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
//       <Text>Dark Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Model3')}
//       />

//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Model3">
        <Stack.Screen name="Model3" component={Model3} />
        {/* <Stack.Screen name="ModelS" component={ModelS} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
