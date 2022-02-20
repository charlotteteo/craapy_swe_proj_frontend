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
import { StackActions } from "@react-navigation/native";
import HawkerScreen from "./HawkerScreen";
import RestaurantScreen from "./RestaurantScreen";

function FoodScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Hawker Food")}
			>
				<Text style={styles.buttonText}>Hawker Food</Text>

				<Image
					style={styles.image}
					source={{
						uri: "https://www.oursgheritage.gov.sg/wp-content/uploads/2020/12/XINLI2.png",
					}}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Restaurants")}
			>
				<Text style={styles.buttonText}>Restaurants</Text>
				<Image
					style={styles.image}
					source={{
						uri: "https://st2.depositphotos.com/1035649/7783/v/950/depositphotos_77833254-stock-illustration-restaurant-logo.jpg",
					}}
				/>
			</TouchableOpacity>
		</View>
	);
}

const Stack = createStackNavigator();

export default function contactstack() {
	return (
		<Stack.Navigator mode="modal">
			<Stack.Screen name="Singapore Food" component={FoodScreen} />
			<Stack.Screen name="Hawker Food" component={HawkerScreen} />
			<Stack.Screen name="Restaurants" component={RestaurantScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'row',

		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgb(210, 210, 205)",
	},

	button: {
		backgroundColor: "white",
		height: "45%",
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
		width: "100%",
		height: "65%",
	},
});
