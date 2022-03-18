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
            <ImageBackground style={styles.background} source={require('../../assets/yellowbackground.jpg')} resizeMode="cover">      
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
    <Text style={{alignSelf:"center"}}>Or call our hotline at 9737 7893. Thank you!</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection:"column",
    justifyContent:"flex-start"
  },
  background:{
    width:"110%",
    height:100,
    //top:50,
    //alignSelf: "flex-start",
    //justifyContent: "flex-start",
    position: "relative",
    //borderColor: "black",
    //borderWidth: 5,
    marginBottom: 30
  },
  headerText:{
      color:"black",
      fontSize: 28,
      fontWeight:"bold",
      flexDirection: "column",
      alignSelf:"center",
      marginTop: 40,
      marginRight:50
  },
  card:{
    margin:20,
    borderColor:"#FFC30B",
    borderWidth:1.5,

  },
  button:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20
  }
});