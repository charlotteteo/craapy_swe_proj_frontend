import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	Button,
	TouchableOpacity,
	ImageBackground
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FAQScreen from "./FAQScreen";
import EmailScreen from "./EmailScreen";

function HelpScreen({ navigation }) {
	return (
		<View style={styles.container}>
      <ImageBackground style={styles.background} source={require('../../assets/Background.png')} resizeMode="cover">      
                <Text style={styles.headerText}>Help Page</Text>
            </ImageBackground>     
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("FAQ")}
			>
				<Text style={styles.buttonText}>Help</Text>

				<Image style={styles.image} source={require("../../assets/questionmark.png")}/>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Email")}
			>
				<Text style={styles.buttonText}>Contact Us</Text>
				<Image style={styles.image} source={require("../../assets/mail.png")}/>
			</TouchableOpacity>
		</View>
	);
}

const Stack = createStackNavigator();

export default function contactstack() {
	return (
		<Stack.Navigator mode="card">
			<Stack.Screen name="Help" component={HelpScreen}             
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
			<Stack.Screen name="FAQ" component={FAQScreen}            
       options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
			<Stack.Screen name="Email" component={EmailScreen}                                options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //borderColor: "blue",
        //borderWidth: 5,

        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFB899",
    },

    button: {
        backgroundColor: "white",
        height: "30%",
        width: "60%",
        alignItems: "center",

        marginTop: 20,
        marginBottom:15,
        borderRadius: 20,
    },

    buttonText: {
        color: "black",
        fontWeight: "bold",
        paddingBottom: "5%",
        paddingTop: "10%",
        fontSize: 18,
    },
    image: {
        width: "40%",
        height: "45%",
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
        marginBottom: 0
    },
    headerText:{
        color:"white",
        fontSize: 28,
        fontWeight:"bold",
        flexDirection: "column",
        alignSelf:"center",
        marginTop: 45
    }
});