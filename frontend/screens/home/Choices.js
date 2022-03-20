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
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default Choices;


const styles = StyleSheet.create({
    foodcontainer:{
    height:130, 
    width:130,
    marginLeft:15,
    borderWidth:0.5,
    borderRadius:10,
    borderColor:"#dddddd",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
    textAlign:"center"
    
  }
})