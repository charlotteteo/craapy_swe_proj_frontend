
import React, { useState } from "react";
import {
	Text,
  View,
  Image,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";

import FilterScreen from "../filter/FilterScreen";

function SearchScreen({ navigation }) {

	return (
		<View style={styles.container}>
			<TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Filter")}       // doesnt work, must rmb to delete
      >
        <Image 
          resizeMode="contain"
          style={styles.image}
          source={require("../../../assets/filterIcon.png")}/>
        
        

      </TouchableOpacity>
		</View>
	);
}
const Stack = createStackNavigator();

export default function homestack() {
	return (
		<Stack.Navigator headerMode="screen">
			<Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
		</Stack.Navigator>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: "#FFB899",
    justifyContent: "center",
		alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    height: "6%",
    width: "10%",
    alignItems: "center",
    justifyContent:"center",
    position: "absolute",
    top: 50,
    right: 50,

    margin: 10,
    borderRadius: 20,
  },

  image: {
		width: "60%",
    height: "60%",
    paddingBottom: "20%",
    paddingTop: "20%",
	},
});



/*import React from 'react';
import {StyleSheet, View} from 'react-native';

function SearchScreen(props) {
    return (
        <View style={styles.container}>
            

        </View>
    );
}

export default SearchScreen;

// blank screen!!

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#gold',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });*/
  




