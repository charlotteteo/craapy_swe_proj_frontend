import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

class Choices extends Component{
  render(){
    return(
      <View>
        <ImageBackground source={this.props.imageUri} imageStyle={{borderRadius:8,    height:170, 
    width:200, }} style={styles.foodcontainer}>
   <View style={styles.foodtext}>
     <Text ellipsizeMode='tail' numberOfLines={1} style={styles.text}>{this.props.name}</Text>
   </View>
</ImageBackground>
      </View>
    );
  }
}

export default Choices;


const styles = StyleSheet.create({
    foodcontainer:{
    height:180, 
    width:180,
    marginLeft:15,
    marginRight:20,
    //borderWidth:5,
    borderRadius:8,
   // borderColor:"red",
    justifyContent:"flex-end",
  },
  foodimage:{
    flex:1,
    height:180, 
    width:180,
    resizeMode:"cover"
  },
  foodtext:{
    //borderColor:"red",
    //borderWidth:5,
    height:"40%",
    width:"95%",
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: "column",
    alignSelf: "flex-start",
    padding:5
  },
  text:{
    fontSize:20,
    fontFamily:"SFBlack",
    color:"white"
  }
})