import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	Button,
	TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FAQScreen from "./FAQScreen";
import EmailScreen from "./EmailScreen";

function HelpScreen({ navigation }) {
	return (
		<View style={styles.container}>

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
		<Stack.Navigator mode="modal">
			<Stack.Screen name="Help" component={HelpScreen} />
			<Stack.Screen name="FAQ" component={FAQScreen} />
			<Stack.Screen name="Email" component={EmailScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'row',

		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FFB899",
	},

	button: {
		backgroundColor: "white",
		height: "38%",
		width: "78%",
		alignItems: "center",

		margin: 10,
		borderRadius: 20,
	},

	buttonText: {
		color: "black",
		fontWeight: "bold",
		paddingBottom: "10%",
		paddingTop: "10%",
		fontSize: 18,
	},
	image: {
		width: "45%",
		height: "45%",
	},
});