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
            <View style={styles.background}>      
                    <Text style={styles.headerText}>Email</Text>
            </View>
    <Card style={styles.card}>
      <Card.Content>
        <Title style={{fontFamily:"NunitoBold"}}>Contact us via Email</Title>
        <TouchableOpacity style={styles.button} onPress={this.openEmail}>
          <Text style={{fontFamily:"NunitoBold"}}>Send Email</Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
    <Text style={{alignSelf:"center", fontFamily:"Nunito"}}>Or call our hotline at 9737 7893. Thank you!</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ececec",
    flexDirection:"column",
    justifyContent:"flex-start"
  },
  background:{
    width:"110%",
    height:110,
    position: "relative",
    backgroundColor:"#fec241",
    borderColor: "black",
    borderWidth: 5,
    marginBottom: 15,
    bottom:5,
    right:5
},
  headerText:{
    fontFamily: "OpenSansbold",
    //paddingVertical: 10,
    marginTop:45,
    paddingTop: 6,
    paddingBottom:5,
    fontSize: 24,
    alignSelf:"center",
    right:12,
},
  card:{
    margin:20,
    borderColor:"#FFC30B",
    borderWidth:1.5,
    borderRadius:5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  button:{
    alignItems: "center",
    backgroundColor: "#fec241",
    padding: 10,
    marginTop: 20,
    borderRadius:5,
    borderColor:"black",
    borderWidth:1,
    width:"95%",
    alignSelf:"center"
  }
});