import React, { useState } from "react";
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
	Image,
	Icon,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import { SearchBar } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-ratings";
import { locations } from "../assets/locations";
import { restaurants } from "../assets/restaurant";
import { hawkerchoices } from "../assets/hawker";
import { wishlist } from "../assets/wishlist";
import Constants from "expo-constants";
import Pink from "./restaurants/PinkScreen";
import Tee from "./hawkers/tee";
import Kranji from "./kranjifarm";
import App from "./SearchScreen";

function HomeScreen({ navigation }) {
	const [wish, setWish] = useState(false);

	return (
		<ScrollView>
			<View style={styles.container}>
				<SafeAreaView style={styles.header}>
					<View style={styles.headerwrap}>
						<View style={styles.headerDetails}>
							<Text style={styles.headerTitle}>Welcome back Jane!</Text>
							<Text style={styles.headerSubtitle}>
								Remember to be sociably responsible when having fun!
							</Text>
						</View>
						<View>
							<Image
								source={require("../assets/profpic.png")} //Change to nice profile picture
								style={styles.headerImage}
							/>
						</View>
					</View>
					<View style={styles.searchButton}>
						<IconButton
							icon="map-search-outline"
							color={"white"}
							size={20}
							onPress={() => navigation.navigate("Search")}
						/>
					</View>
				</SafeAreaView>
				{/* <View style={styles.search}>
					<View style={styles.searchWrapper}>
						<AntDesign
							name="search1"
							size={24}
							color="black"
							style={styles.searchIcon}
						/>
						<TextInput
							placeholder="Search for anything"
							style={styles.searchInput}
						/>
					</View>
				</View> */}

				<View style={{ alignItems: "center" }}>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Gallop Kranji Farm Resort");
						}}
					>
						<Card style={styles.cardStyle}>
							<Card.Title title="Attraction of the Day" />
							<Card.Content>
								<Title>{locations[0].name}</Title>

								<Paragraph>{locations[0].shortDesc}</Paragraph>
							</Card.Content>
							<Card.Cover source={{ uri: locations[0].imageUri }} />
							<Card.Actions>
								<IconButton
									icon={wish ? "star" : "star-outline"}
									animated={true}
									color={"rgba(255, 190, 6, 0.83)"}
									size={20}
									onPress={() => {
										setWish(!locations[0].wishlist);
										locations[0].wishlist = wish;
										wishlist.push(locations[0]);
									}}
								/>
							</Card.Actions>
						</Card>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Ah Tee Ko Ko Mee");
						}}
					>
						<Card style={styles.cardStyle}>
							<Card.Title title="Hawker food of the Day" />
							<Card.Content>
								<Title>{hawkerchoices[1].name}</Title>
								<Paragraph>{hawkerchoices[1].shortDesc}</Paragraph>
							</Card.Content>
							<Card.Cover source={{ uri: hawkerchoices[1].imageUri }} />
							<Card.Actions>
								<IconButton
									icon={hawkerchoices[1].wishlist ? "star" : "star-outline"}
									animated={true}
									color={"rgba(255, 190, 6, 0.83)"}
									size={25}
									onPress={() => {
										setWish(!hawkerchoices[1].wishlist);
										hawkerchoices[1].wishlist = wish;
										wishlist.push(hawkerchoices[1]);
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
						<Card style={styles.cardStyle}>
							<Card.Title title="Restaurant of the Day" />
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
										if (restaurants[1].wishlist === true) {
											restaurants[1].wishlist = wish;
											wishlist.push(restaurants[1]);
										} else {
											wishlist = wishlist.filter(
												(item) => item !== restaurants[1]
											);
										}
									}}
								/>
							</Card.Actions>
						</Card>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

const Stack = createStackNavigator();

export default function homestack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Search"
				component={App}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Ah Tee Ko Ko Mee" component={Tee} />
			<Stack.Screen name="Pink Cafe" component={Pink} />
			<Stack.Screen name="Gallop Kranji Farm Resort" component={Kranji} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: "100%",
		height: "30%",
	},
	header: {
		backgroundColor: "rgba(255, 190, 6, 0.83)",
		borderBottomLeftRadius: 35,
		borderBottomRightRadius: 35,
	},
	headerwrap: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		paddingBottom: 0,
		padding: 20,
		paddingHorizontal: 40,
	},
	headerImage: {
		height: 80,
		width: 80,
		borderRadius: 80,
		borderWidth: 2,
		borderColor: "white",
		marginTop: 20,
	},
	headerDetails: {
		flexDirection: "column",
		justifyContent: "space-between",
		padding: 20,
		// width:
	},
	headerTitle: {
		color: "#fff",
		fontFamily: "sans-serif-medium",
		fontSize: 25,
		// paddingVertical: 10,
		paddingTop: 10,
	},
	headerSubtitle: {
		fontFamily: "sans-serif",
		color: "#fff",
		fontSize: 15,
	},
	searchInput: {
		color: "#b4b4b4",
		fontFamily: "sans-serif",
	},
	searchIcon: {
		color: "#b0b0b0",
		marginRight: 10,
	},
	search: {
		marginHorizontal: 20,
		backgroundColor: "#fff",
		borderRadius: 20,
		padding: 10,
		marginTop: -25,
		// width:"90%"
	},
	searchWrapper: {
		flexDirection: "row",
	},
	cardStyle: {
		marginHorizontal: 8,
		marginBottom: 5,
		width: 350,
		marginTop: 5,
	},
	searchButton: {
		alignItems: "flex-end",
		marginRight: 20,
	},
});
