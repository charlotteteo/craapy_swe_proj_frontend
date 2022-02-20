// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//import SearchableDropdown component
import SearchableDropdown from "react-native-searchable-dropdown";
import { locations } from "../assets/locations";
import pinballwizard from "./attractions/pinballwizard";

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
// 	<TouchableOpacity onPress={() => {}}>
// 		<Card style={{ flex: 1, marginBottom: 10 }}>
// 			<Card.Title title="" />
// 			<Card.Content>
// 				{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
// 				<Title>{item.name}</Title>

// 				<Paragraph>{item.shortDesc}</Paragraph>
// 			</Card.Content>
// 			<Card.Cover source={{ uri: item.imageUri }} />
// 			<Card.Actions>
// 				<IconButton
// 					icon={item.wishlisted ? "star" : "star-outline"}
// 					animated={true}
// 					color={"purple"} //if anal enough, this purple is not default iOS purple
// 					size={20}
// 					onPress={() => {}}
// 				/>
// 			</Card.Actions>
// 		</Card>
// 	</TouchableOpacity>
// );
const NestedStack = createStackNavigator();

const App = ({ navigation }) => {
	return (
		<NestedStack.Navigator>
			<NestedStack.Screen
				name="Search"
				component={Search}
				// options={{ headerShown: false }}
			/>
			<NestedStack.Screen name="Pinball" component={pinballwizard} />
		</NestedStack.Navigator>
	);
};

const Search = ({ navigation }) => {
	const [searchtext, setsearchtext] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Text style={styles.headingText}>Search something</Text>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<SearchableDropdown
						onTextChange={(text) => console.log(text)}
						onItemSelect={() => navigation.navigate("Pinball")}
						containerStyle={{ width: "85%", padding: 5 }}
						textInputStyle={{
							padding: 12,
							borderWidth: 1,
							borderColor: "#ccc",
							backgroundColor: "#FAF7F6",
						}}
						itemStyle={{
							padding: 10,
							marginTop: 2,
							backgroundColor: "#FAF9F8",
							borderColor: "#bbb",
							borderWidth: 1,
						}}
						itemTextStyle={{
							color: "#222",
						}}
						itemsContainerStyle={{
							maxHeight: "60%",
						}}
						value={searchtext}
						onClear={() => {
							setsearchtext("");
						}}
						placeholder="where would you like to go?"
						lightTheme
						items={locations}
						// defaultIndex={}
						resetValue={false}
						underlineColorAndroid="transparent"
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 10,
	},
	titleText: {
		padding: 8,
		fontSize: 16,
		textAlign: "center",
		fontWeight: "bold",
	},
	headingText: {
		padding: 8,
	},
});
