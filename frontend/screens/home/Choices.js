import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

class Choices extends Component{
  render(){
    return(
      <View style={styles.foodcontainer}>
        <View style={{flex:2}}>
          <Image style={styles.foodimage} source={this.props.imageUri} />
        </View>
        <View style={styles.foodtext}>
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default Choices;


const styles = StyleSheet.create({
    foodcontainer:{
    height:130, 
    width:140,
    marginLeft:20,
    borderWidth:0.5,
    borderColor:"#dddddd",
  },
  foodimage:{
    flex:1,
    width:null,
    height:null,
    resizeMode:"cover"
  },
  foodtext:{
    flex:1,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:5,
    alignItems:"center"
  },
  text:{
    fontSize:16,
    paddingBottom:5,
    alignSelf:"flex-start"
  }
})