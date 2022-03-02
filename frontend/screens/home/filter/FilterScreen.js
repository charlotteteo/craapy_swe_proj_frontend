
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

function FilterScreen({ navigation }) {

	return (
		<View style={styles.container}>
			
		</View>
	);
}
const Stack = createStackNavigator();

export default function homestack() {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Filter" component={FilterScreen} />
		</Stack.Navigator>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFB899",
    },
    
});

