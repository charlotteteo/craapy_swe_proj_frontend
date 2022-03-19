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
import SplashScreen from "../SplashScreen";

function HelpScreen({ navigation }) {
	return (
		<View style={styles.container}>
           
      <View style={styles.headercontainer}>      
                <Text style={styles.headerText}>Help Page</Text>
            </View> 

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
            <TouchableOpacity onPress={() => navigation.navigate("Splash")}
			>Press</TouchableOpacity>
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
             <Stack.Screen name="Splash" component={SplashScreen} />
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
        backgroundColor: "white",
    },

    button: {
        backgroundColor: "white",
        height: "30%",
        width: "60%",
        alignItems: "center",
        borderColor:"black",
        borderWidth:5,
        marginTop: 40,
        marginBottom:15,
        borderRadius: 20,
    },

    buttonText: {
        color: "black",
        fontWeight: "bold",
        paddingBottom: "5%",
        paddingTop: "7%",
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
        marginBottom: 0,

    },
    headerText:{
        color:"black",
        fontSize: 24,
        fontWeight:"bold",
        flexDirection: "column",
        alignSelf:"center",
        marginTop: 45,
        marginBottom:10
    },
    headercontainer:{
        backgroundColor:"#ffdf52",
        width:"100%"
    }
});