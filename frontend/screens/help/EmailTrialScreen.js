import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
  Platform,
  Alert
} from "react-native";
 
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
      "Enter body for the mail"
    );
  };
 
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, paddingVertical: 30, color: "red" }}
        >
          FAQ@hawkerpedia {"\n"}
						Contact us via Email for queries or feedback
        </Text>
        <TextInput
          value={this.state.bodayText}
          onChangeText={bodayText => this.setState({ bodayText })}
          placeholder={"Enter Query"}
          style={styles.input}
        />
        <View style={{ marginTop: 20 }}>
          <Button onPress={this.openEmail} title="Send Email" />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    backgroundColor: "#ffffff"
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: 255,
    height: 44,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 0.5,
    borderWidth: 0.5
  }
});