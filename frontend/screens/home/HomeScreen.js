import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Button} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./search/SearchScreen";

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Search")}       
            >
              <Text style={styles.buttonText}>Search Bar</Text>

            </TouchableOpacity>

        </View>
    );
}
const Stack = createStackNavigator();

export default function contactstack() {
	return (
		<Stack.Navigator headerMode = "none">
			<Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
		</Stack.Navigator>
	);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFB899',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      backgroundColor: "white",
      height: "6%",
      width: "78%",
      alignItems: "center",
      position: "absolute",
      top: 100,
  
      margin: 10,
      borderRadius: 20,
    },


    buttonText: {
      color: "black",
      fontWeight: "bold",
      paddingBottom: "4%",
      paddingTop: "4%",
      fontSize: 16,
    },
    image: {
      width: "45%",
      height: "45%",
    },

  });

