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
/**
 * Email Screen containing information of email to contact for technical support
 * @Class EmailScreen
 */

export default class EmailTrialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodayText: ""
    };
  }
 
 
  /*Function to send the mail function(to, cc, bcc, subject, body)*/
  /**
   * Function to send the mail function(to, cc, bcc, subject, body)
 * links to email application
 * @method openEmail 
 */

  openEmail = () => {
    Communications.email(
      ["rovereign455@gmail.com"],
      null,
      null,
      "Query to Hawkerpedia",
      null
    );
  };
 
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.background}>      
                    <Text style={styles.headerText}>Email</Text>
            </View>
            <View
  style={{
    borderBottomColor: 'rgba(242, 242, 247,1)',
    borderBottomWidth: 2,
    marginTop:0,
    width:"100%"
  }}
/>
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
    backgroundColor: "white",
    flexDirection:"column",
    justifyContent:"flex-start"
  },
  background:{
    width:"110%",
    height:95,
    //top:50,
    //alignSelf: "flex-start",
    //justifyContent: "flex-start",
    position: "relative",
    //borderColor: "black",
    //borderWidth: 5,
    marginBottom: 5,
    backgroundColor:"white",

},
  headerText:{
    fontFamily: "OpenSansbold",
    //paddingVertical: 10,
    marginTop:45,
    paddingTop: 6,
    paddingBottom:0,
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
    borderRadius:5
  }
});