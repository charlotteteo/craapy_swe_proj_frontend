import * as React from "react";
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
import { locations } from "../assets/locations";
import { StackActions } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import { wishlist } from "../assets/wishlist";

function WishlistScreen({ navigation }) {
	// if (wishlist.length === 0) {
	// 	return (
	// 		<View style={styles.container}>
	// 			<Text>You have no wishlisted locations</Text>
	// 		</View>
	// 	);
	// } else {
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={{ alignItems: "center" }}>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Gallop Kranji Farm Resort");
						}}
					>
						<Card style={styles.cardStyle}>
							<Card.Content>
								<Title>{locations[0].name}</Title>

								<Paragraph>{locations[0].shortDesc}</Paragraph>
							</Card.Content>
							<Card.Cover source={{ uri: locations[0].imageUri }} />
							<Card.Actions>
								<IconButton
									icon="star"
									animated={true}
									color={"rgba(255, 190, 6, 0.83)"}
									size={20}
									onPress={() => {}}
								/>
							</Card.Actions>
						</Card>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
	// }
}

// function EventsSecondScreen({ navigation }) {
// 	return (
// 		<View
// 			style={{
// 				flex: 1,
// 				justifyContent: "center",
// 				alignItems: "center",
// 				backgroundColor: "lightpink",
// 			}}
// 		>
// 			<Text>Events!</Text>
// 			<Button
// 				title="3rd"
// 				onPress={() => navigation.dispatch(StackActions.popToTop())}
// 			/>
// 		</View>
// 	);
// }

const Stack = createStackNavigator();
// history
export default function eventstack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Wishlist" component={WishlistScreen} />
			{/* <Stack.Screen name="Events2" component={EventsSecondScreen} /> */}
		</Stack.Navigator>
	);
	//button onPress should go to the same screen with same name in stack
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgb(225, 232, 238)",
		justifyContent: "center",
		alignItems: "center",
	},
	cardStyle: {
		marginHorizontal: 8,
		marginBottom: 5,
		width: 350,
		marginTop: 5,
	},
});
