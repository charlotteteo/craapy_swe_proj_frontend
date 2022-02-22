import React, { useState } from "react";
import {
	Text,
	View,
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

import {faq} from "../../assets/faq";

function FAQScreen({ navigation }) {
	const [searchtext, setsearchtext] = useState("");
	const [wish, setWish] = useState("false");
	const searchResults = [];

	const searchFunction = (searchtext) => {
		//	for (locale in hawkerchoices) {
		//	if (locale.name.tolower() === searchtext.tolower()) {
		//		searchResults.push(locale);
		//	}
	};

	return (
		<View style={styles.container}>
			{/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
				<SearchBar
					onChangeText={(searchtext) => searchFunction(searchtext)}
					onClearText={(searchtext) => searchFunction("")}
					placeholder="where would you like to eat?"
					lightTheme
					containerStyle={{ width: "85%" }}
				/>
			</View> */}
			<ScrollView>
            <TouchableOpacity
					onPress={() => {
						console.log("fAQ0");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
				
							<Title>{faq[0].name}</Title>

							<Paragraph>{faq[0].shortDesc}</Paragraph>
						</Card.Content>
					
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						console.log("FAQ1");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
				
							<Title>{faq[1].name}</Title>

							<Paragraph>{faq[1].shortDesc}</Paragraph>
						</Card.Content>
					
					</Card>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}
const Stack = createStackNavigator();

export default function homestack() {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Home" component={FAQScreen} />
			
		</Stack.Navigator>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFB899",
	},
});
