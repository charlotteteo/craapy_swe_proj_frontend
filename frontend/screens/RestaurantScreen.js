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
import { SearchBar } from "react-native-elements";
import { restaurants } from "../assets/restaurant";
import { wishlist } from "../assets/wishlist";
import Harry from "./restaurants/HarryScreen";
import Pink from "./restaurants/PinkScreen";
import Superhero from "./restaurants/SuperheroScreen";

function RestaurantScreen({ navigation }) {
	const [searchtext, setsearchtext] = useState("");
	const [wish, setWish] = useState("false");
	const searchResults = [];

	const searchFunction = (searchtext) => {
		//	for (locale in restaurants) {
		//	if (locale.name.tolower() === searchtext.tolower()) {
		//		searchResults.push(locale);
		//	}
	};
	return (
		<View style={styles.container}>
			<ScrollView>
				{/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
					<SearchBar
						onChangeText={(searchtext) => searchFunction(searchtext)}
						onClearText={(searchtext) => searchFunction("")}
						placeholder="where would you like to eat?"
						lightTheme
						containerStyle={{ width: "85%" }}
					/>
				</View> */}
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Superhero Cafe");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
							{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
							<Title>{restaurants[0].name}</Title>

							<Paragraph>{restaurants[0].shortDesc}</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: restaurants[0].imageUri }} />
						<Card.Actions>
							{/* <Button>Cancel</Button> */}
							{/* <Button>Ok</Button> */}
							<IconButton
								icon={restaurants[0].wishlist ? "star" : "star-outline"}
								animated={true}
								color={"rgba(255, 190, 6, 0.83)"}
								size={20}
								onPress={() => {
									setWish(!restaurants[0].wishlist);
									restaurants[0].wishlist = wish;
									wishlist.push(restaurants[0]);
								}}
							/>
						</Card.Actions>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Pink Cafe");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
							<Title>{restaurants[1].name}</Title>
							<Paragraph>{restaurants[1].shortDesc}</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: restaurants[1].imageUri }} />
						<Card.Actions>
							<IconButton
								icon={restaurants[1].wishlist ? "star" : "star-outline"}
								animated={true}
								color={"rgba(255, 190, 6, 0.83)"}
								size={20}
								onPress={() => {
									setWish(!restaurants[1].wishlist);
									restaurants[1].wishlist = wish;
									wishlist.push(restaurants[1]);
									//TODO: use useEffect to check and re-render star button
								}}
							/>
						</Card.Actions>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Harry Potter Cafe");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
							<Title>{restaurants[2].name}</Title>
							<Paragraph>{restaurants[2].shortDesc}</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: restaurants[2].imageUri }} />
						<Card.Actions>
							<IconButton
								icon={restaurants[2].wishlist ? "star" : "star-outline"}
								animated={true}
								color={"rgba(255, 190, 6, 0.83)"}
								size={20}
								onPress={() => {
									setWish(!restaurants[2].wishlist);
									restaurants[2].wishlist = wish;
									wishlist.push(restaurants[2]);
									//TODO: use useEffect to check and re-render star button
								}}
							/>
						</Card.Actions>
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
			<Stack.Screen name="Home" component={RestaurantScreen} />
			<Stack.Screen name="Superhero Cafe" component={Superhero} />
			<Stack.Screen name="Pink Cafe" component={Pink} />
			<Stack.Screen name="Harry Potter Cafe" component={Harry} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	//textInput: {
	//	borderColor: "black",
	//	borderWidth: 0.5,
	//	padding: 5,
	//	backgroundColor: "lightyellow",
	//	width: "80%",
	//	marginTop: 40,
	//	height: 30,
	//},
	container: {
		flex: 1,

		backgroundColor: "rgb(225, 232, 238)",
	},
});
