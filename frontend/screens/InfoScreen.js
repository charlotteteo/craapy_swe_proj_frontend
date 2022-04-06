import React, {useState,useRef, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
 Button,
 Image,
 SafeAreaView,
 ScrollView,
 TouchableOpacity,
 Pressable,
 ImageBackground,
} from 'react-native';
import {
	Avatar,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import { FontAwesome5 } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from '@expo/vector-icons';


const InfoScreen = () => {
  
  return (
     <View style={styles.container}>
       <ScrollView>
 <ImageBackground
  // resizeMethod={'auto'}
  style={{
    width: "100%",
    height: 400,
    margin:0,
   
  top:-10,
  left:0,
  right:0,
  }}
  
  source={require("../assets/Beehoon.png")}
  
/>    


<Card style = {{top:-50, borderTopLeftRadius:20, borderTopRightRadius:20,width:"100%"}}>
<View style={{flexDirection:"row", justifyContent:"space-around",marginTop:10}}>
<Text style={styles.headerTitle}>  Lin Da Ma Lei Cha  </Text>
<View style = {styles.bordon}> 
<View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-evenly",paddingLeft:15}} >
<FontAwesome name="star" size={24} color="white" />
<Text style={styles.buttontext} > 73% </Text> 
</View>
</View>
</View>


<View style = {{padding:20,alignItems:"center", flexDirection:"column",height:"50%"}}>

          <View style={{flexDirection:"column"}}>
            <View style={{flexDirection:"row"}}>
              <View  style={{backgroundColor:"#FFBE30", borderRadius:25, alignItems:"center",justifyContent:"center",padding:13,height:"58%"}}>
          <FontAwesome5 name="map-marker-alt" size={22} color="white" />
          </View>
            <View style={{width:"90%"}}>
                <Text style={styles.infotext} > ABC Brickworks Market & Food Centre </Text> 
                </View>
                </View>
              <View style={{flexDirection:"row", marginBottom:10,marginTop:10}}>
                <View style={{backgroundColor:"#FFBE30", borderRadius:20, alignItems:"center",justifyContent:"center",padding:11,height:"64%"}}>
                  <FontAwesome5 name="clock" size={24} color="white" /> 
                </View>
                <View style={{width:"85%"}}>
                <Text style={styles.infotext} >  Mon - Sat: 7.30am-8pm, Closed on Sun </Text>
                </View>
                </View>
          </View>
<View>
<View
  style={{
    borderBottomColor: 'rgba(242, 242, 247,1)',
    borderBottomWidth: 2,
    marginBottom:10
  }}
/>

 <Text style={styles.text} >Directions</Text> 


          <View style={{ flexDirection:"row", alignItems: "center",justifyContent:"center"}}>
          <TouchableOpacity 
          style={styles.button}>
            <View style={{backgroundColor:'white',padding:11, borderRadius:23, marginTop:5}}>
          <FontAwesome5 name="bus" size={30} color="black" />
          </View>
          <View>
            <Text style={{fontFamily:"NunitoBlack",marginTop:12,fontSize:20,color:"white"}}>Bus</Text>
          </View>
           </TouchableOpacity >
           
          <TouchableOpacity 
          style={styles.button}>
          <View style={{backgroundColor:'white',padding:11, borderRadius:23, marginTop:5}}>
          <FontAwesome name="car" size={30} color="black" />
          </View>
          <View>
            <Text style={{fontFamily:"NunitoBlack",marginTop:12,fontSize:20,color:"white"}}>Car</Text>
          </View>
          
          </TouchableOpacity >
          <TouchableOpacity
          style={styles.button}>
          <View style={{backgroundColor:'white',padding:11, borderRadius:23, marginTop:5,paddingLeft:15,paddingRight:15}}>
          <FontAwesome5 name="walking" size={30} color="black" />
          </View>
          <View>
            <Text style={{fontFamily:"NunitoBlack",marginTop:12,fontSize:20,color:"white"}}>Walk</Text>
          </View>
          </TouchableOpacity>
          </View> 
          </View>

          </View> 
</Card> 
</ScrollView>
</View>
  );
} 

const Stack = createStackNavigator();
export default function stacker() {
  return (
    <Stack.Navigator headerMode="float">

      <Stack.Screen name="ResultsScreen" component={ResultsScreen} /> 
      <Stack.Screen name="Info" component={InfoScreen} 
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
       <Stack.Screen name="NearbyCarparkMapsScreen" component={NearbyCarparkMapsScreen} 
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  headerTitle: {
    color: "black",
     marginLeft:20,
     fontFamily: "SFBlack",
     right:12,
     fontSize: 25,
     fontStyle: 'normal',
     fontWeight: 'bold',
     paddingTop: 10,
     lineHeight: 43,
     letterSpacing: 0,
     
   },
    infotext:{
     color: "black",
     fontFamily: 'SF',
     fontSize: 21,
     marginTop:2,
     marginLeft:10


   },
   text:{
      color: "black",
     fontWeight: 'bold',
     //textAlign: 'center',
     fontSize: 23,
     marginBottom:0,
     marginLeft:8
   },
   buttontext: {
     color: "white",
     fontFamily:"SFBlack",
     fontWeight: 'bold',
     textAlign: 'center',
     fontSize: 20,
     marginRight:15,
   },
   med:{
     height: 30,
     width: 30,
   },
   small: {
     height: 20, 
     width: 20,
   },
    button: {         
     backgroundColor: "#FFBE30", 
     height: 130,
     width: 80,
     alignItems: "center",
     justifyContent:"center",
     padding: 10,
     margin : 21,
     borderRadius: 100,
     justifyContent:"flex-start"
   },
    bordon: {         
     backgroundColor: "#FFBE30", 
     height: 40,
     width: 100,
     alignItems: "center",
     justifyContent:"center",
     margin : 12,
     borderRadius: 20,
 
   },
   but:{         
     backgroundColor: "#FFBE30", 
     height: 30,
     width: 30,
     alignItems: "center",
     justifyContent:"center",
     borderRadius: 10,
   },
 
   big: {
    height:25,
     width:25,
    marginRight: 10,
     marginTop: 9,
   },
   stt: {
     height: 34,
     width : 34
   },
   container:{
     backgroundColor:"white"
   }
});

module.exports=InfoScreen;

