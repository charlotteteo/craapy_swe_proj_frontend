import React, { useState } from "react";
import {
	Button,
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	NavigationHelpersContext,
	StackActions,
} from "@react-navigation/native";
import { Avatar, Card, Title, Paragraph, IconButton } from "react-native-paper";
import Constants from "expo-constants";
import { attractions } from "../assets/attraction";
import pinball from "./attractions/pinballwizard";
import camera from "./attractions/camera";
import Sungei from "./attractions/sungei";
import Fragment from "./attractions/fragment";

function AttractionScreen({ navigation }) {
	const [wish, setWish] = useState("false");
	return (
		<View style={styles.container}>
			<ScrollView>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Sungei Buloh Wetland Reserve");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
							{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
							<Title>{attractions[0].name}</Title>

							<Paragraph>{attractions[0].shortDesc}</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: attractions[0].imageUri }} />
						<Card.Actions>
							{/* <Button>Cancel</Button> */}
							{/* <Button>Ok</Button> */}
							<IconButton
								icon={attractions[0].wishlist ? "star" : "star-outline"}
								animated={true}
								color={"rgba(255, 190, 6, 0.83)"}
								size={20}
								onPress={() => {
									setWish(!attractions[0].wishlist);
									attractions[0].wishlist = wish;
									wishlist.push(attractions[0]);
								}}
							/>
						</Card.Actions>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Vintage Camera Musuem");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
							<Title>{attractions[1].name}</Title>
							<Paragraph>{attractions[1].shortDesc}</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: attractions[1].imageUri }} />
						<Card.Actions>
							<IconButton
								icon={attractions[1].wishlist ? "star" : "star-outline"}
								animated={true}
								color={"rgba(255, 190, 6, 0.83)"}
								size={20}
								onPress={() => {
									setWish(!attractions[1].wishlist);
									attractions[1].wishlist = wish;
									wishlist.push(attractions[1]);
								}}
							/>
						</Card.Actions>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						navigation.navigate("The Fragment Room");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
							<Title>{attractions[2].name}</Title>
							<Paragraph>{attractions[2].shortDesc}</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: attractions[2].imageUri }} />
						<Card.Actions>
							<IconButton
								icon={attractions[2].wishlist ? "star" : "star-outline"}
								animated={true}
								color={"rgba(255, 190, 6, 0.83)"}
								size={20}
								onPress={() => {
									setWish(!attractions[2].wishlist);
									attractions[2].wishlist = wish;
									wishlist.push(attractions[2]);
								}}
							/>
						</Card.Actions>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Pinball Wizard");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
							<Title>{attractions[3].name}</Title>
							<Paragraph>{attractions[3].shortDesc}</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: attractions[3].imageUri }} />
						<Card.Actions>
							<IconButton
								icon={attractions[3].wishlist ? "star" : "star-outline"}
								animated={true}
								color={"rgba(255, 190, 6, 0.83)"}
								size={20}
								onPress={() => {
									setWish(!attractions[3].wishlist);
									attractions[3].wishlist = wish;
									wishlist.push(attractions[3]);
								}}
							/>
						</Card.Actions>
					</Card>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

const attractionStack = createStackNavigator();
const Stack = createStackNavigator();
// history

function Attractionfunc() {
	return (
		<attractionStack.Navigator mode="modal">
			<attractionStack.Screen
				name="Attractions"
				component={AttractionScreen}
				options={{ headerShown: false }}
			/>

			<attractionStack.Screen name="Pinball Wizard" component={pinball} />

			<attractionStack.Screen name="Vintage Camera Musuem" component={camera} />

			<attractionStack.Screen
				name="Sungei Buloh Wetland Reserve"
				component={Sungei}
			/>

			<attractionStack.Screen name="The Fragment Room" component={Fragment} />

			{/* <attractionStack.Screen
        name="Sungei Buloh Wetland Reserve"
        component={Sungei}
      /> */}
		</attractionStack.Navigator>
	);
}

export default function attractionstack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Attractions"
				component={Attractionfunc}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
	//button onPress should go to the same screen with same name in stack
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight + 10,
		backgroundColor: "#ecf0f1",
		padding: 8,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
