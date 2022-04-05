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
import { AntDesign } from '@expo/vector-icons'; 

function HelpScreen({ navigation }) {
	return (
		<View style={styles.container}>
           
      <View style={styles.background}>      
                <Text style={styles.headerText}>Help Page</Text>
            </View>     

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("FAQ")}
			>
				<Text style={styles.buttonText2}>Help</Text>

				<AntDesign name="questioncircleo" size={80} color="black" />
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
                headerTintColor:'black'
            }}/>
			<Stack.Screen name="Email" component={EmailScreen}                                options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'black'
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
        backgroundColor: "#ececec",
    },

    button: {
        backgroundColor: "white",
        height: "25%",
        width: "60%",
        alignItems: "center",
        borderColor:"black",
        borderWidth:5,
        marginTop: 60,
        marginBottom:20,
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },

    buttonText: {
        fontFamily:"NunitoBold",
        paddingBottom: 0,
        paddingTop: 20,
        fontSize: 24,
        color:"black"
    },
    buttonText2: {
        fontFamily:"NunitoBold",
        paddingBottom: 0,
        paddingTop: 20,
        marginBottom:12,
        fontSize: 24,
    },
    image: {
        width: "50%",
        height: "60%",
        bottom:7
    },
    image2:{
        marginTop:5,
        width: "46%",
        height: "50%",
        marginBottom:5
    },
    background:{
        width:"110%",
        height:100,
        //top:50,
        //alignSelf: "flex-start",
        //justifyContent: "flex-start",
        bottom:5,
        position: "relative",
        borderColor: "black",
        borderWidth: 5,
        marginBottom: 0,
        backgroundColor:"#fec241"

    },
    headerText:{
        fontFamily: "OpenSansbold",
        //paddingVertical: 10,
        marginTop:40,
        paddingTop: 4,
        paddingBottom:5,
        fontSize: 24,
        alignSelf:"center"
    }
});