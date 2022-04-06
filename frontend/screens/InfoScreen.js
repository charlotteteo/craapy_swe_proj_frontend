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

const InfoScreen = () => {

  const viewRef = useRef();

  const sharescreenshot = async () => {
    try {
      const uri = await captureRef(viewRef,{
        format : 'png',
        quality: 0.7
      });
    await Share.shareAsync(uri)
    } catch(err){
    console.error(err);}
  };
  
  return (
     <SafeAreaView>
       <ScrollView>
     <View ref = {viewRef} style={{borderColor:"green",borderWidth:5}}>
 <ImageBackground
  // resizeMethod={'auto'}
  style={{
    width: "100%",
    height: 400,
    margin:0,
  top:20,
  left:0,
  right:0,
  borderColor:"red",
  borderWidth:10
  }}
  source={require("../assets/Beehoon.png")}
/>    


<Card style = {{top:-95, borderTopLeftRadius:20, borderTopRightRadius:20,left:-10,width:430}}>
<View style = {styles.bordon}> 
<View style={{flexDirection:"row"}} >
<Text style={styles.buttontext} > 73% </Text> 
<ImageBackground style={styles.big} source={require('../assets/star.png')} /> 
</View>
</View>
               <Text style={styles.headerTitle}>  Lin Da Ma Lei Cha  </Text>

<View style = {{margin:10 }}>
                <Text > 

                <ImageBackground style={styles.small} source={require('../assets/location.png')} /> {" "} <Text style={styles.infotext} > ABC Brickworks Market & Food Centre </Text> {"\n"} 
                <View style={{backgroundColor:"#FFBE30", padding:2, borderRadius:12, alignItems:"center",justifyContent:"center"}}>
                  <FontAwesome5 name="clock" size={24} color="white" /> 
                </View>
                 <Text style={styles.infotext} >  Mon - Sat: 7.30am-8pm, Closed on Sun </Text> {"\n"}
  
                </Text>
         
<Text style={{marginTop:25,marginLeft:10,flexDirection:"row"}}> <ImageBackground style={styles.logo} source={require('../assets/direction.png')}/> <Text style={styles.text} > Directions:</Text> 
</Text>

          <View style={{ flexDirection:"row", alignItems: "center", marginLeft:25,marginTop:-25 }}>
          <TouchableOpacity 
          style={styles.button}>
          <Image style={styles.med} source={require('../assets/bus.png')} />
           
           </TouchableOpacity >
          <TouchableOpacity 
          style={styles.button}>
          <Image style={styles.med} source={require('../assets/car.png')} />
          
          </TouchableOpacity >
          <TouchableOpacity
          style={styles.button}>
          <Image style={styles.med} source={require('../assets/walking.png')} />

          </TouchableOpacity>
          </View> 

          </View> 
</Card> 
</View>
    
</ScrollView>
</SafeAreaView>
  );
} 


const styles = StyleSheet.create({
  container:{
    flex: 1,
    //alignItems: "center",
    backgroundColor: "white",
  },
  headerTitle: {
   color: "black",
    marginLeft:8,
    fontFamily: "serif",
    
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: 'bold',
    paddingTop: 10,
    lineHeight: 43,
    letterSpacing: 0,
    textAlign: 'center',
    paddingBottom:50
    
  },
   infotext:{
    color: "black",
    textAlign: 'center',
    fontFamily: 'arial',
		fontSize: 23,
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom:30,

  
  },
  text:{
   color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
		fontSize: 23,
    paddingTop: 10,
    paddingBottom:30,
  },
  buttontext: {
		color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
		fontSize: 23,
    margin: 7,
	},
  med:{
    height: 50,
    width: 50,
  },
  small: {
    height: 20, 
    width: 20,
    marginRight: 10,
    marginBottom:-1,
  },
  logo:{
    height:20,
    width:20,
  },
   button: {         
    backgroundColor: "#FFBE30", 
    height: "42%",
    width: "25%",
    alignItems: "center",
    justifyContent:"center",
    margin : 12,
    borderRadius: 20,

  },
   bordon: {         
    backgroundColor: "#FFBE30", 
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent:"center",
    margin : 12,
    borderRadius: 20,

  },
  big: {
   height:28,
    width:28,
   marginRight: 10,
    marginTop: 9,
  },
});

export default InfoScreen;

