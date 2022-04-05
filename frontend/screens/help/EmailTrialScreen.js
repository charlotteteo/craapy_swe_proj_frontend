import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  ImageBackground,
  Linking,
  Platform,
  Alert
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";
 
import Communications from "react-native-communications";


export default class EmailTrialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodayText: ""
    };
  }
 
 
  /*Function to send the mail function(to, cc, bcc, subject, body)*/
  openEmail = () => {
    Communications.email(
      ["rovereign455@gmail.com"],
      null,
      null,
      "Query to CRAAPY",
      null
    );
  };
 
  render() {
    return (
      <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../../assets/Background.png')} resizeMode="cover">      
                    <Text style={styles.headerText}>Email</Text>
            </ImageBackground>
    <Card style={styles.card}>
      <Card.Content>
        <Title>Contact us via Email</Title>
        <TouchableOpacity style={styles.button} onPress={this.openEmail}>
          <Text>Send Email</Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: "#FFB899",
    flexDirection:"column",
    // justifyContent:"flex-start"
  },
  background:{
    width:"110%",
    height:100,
    position: "relative",
    //borderColor: "black",
    //borderWidth: 5,
    marginBottom: 30
},
headerText:{
    color:"white",
    fontSize: 28,
    fontWeight:"bold",
    flexDirection: "column",
    alignSelf:"center",
    marginTop: 45
},
 
headerText:{
  fontFamily: "OpenSansbold",
  //paddingVertical: 10,
  marginTop:45,
  paddingTop: 4,
  paddingBottom:5,
  fontSize: 24,
  alignSelf:"center"
},
  card:{
    margin:20
  },
  button:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20
  }
});