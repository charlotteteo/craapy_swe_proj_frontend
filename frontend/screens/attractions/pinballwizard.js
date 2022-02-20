import React, { useState } from "react";
import {
	Image,
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
import { attractions } from "../../assets/attraction";
import { AntDesign } from "@expo/vector-icons";

export default function pinball() {
	return (
		<View style={styles.container}>
			<ScrollView>
				<Card>
					<Card.Cover
						source={{
							uri: "https://media.timeout.com/images/105516833/630/472/image.jpg",
						}}
					/>
					<Card.Content>
						<Title>{attractions[3].name}</Title>

						<Paragraph>
							<AntDesign name="star" size={15} color="#fdcc0d" />
							<AntDesign name="star" size={15} color="#fdcc0d" />
							<AntDesign name="star" size={15} color="#fdcc0d" />
							<AntDesign name="star" size={15} color="#fdcc0d" />
							<AntDesign name="staro" size={15} color="#fdcc0d" />
						</Paragraph>

						<Paragraph>{attractions[3].hours}</Paragraph>

						<Paragraph></Paragraph>

						<Paragraph>Address: {attractions[3].address}</Paragraph>

						<Paragraph></Paragraph>

						<Paragraph>{attractions[3].longDesc}</Paragraph>
					</Card.Content>
				</Card>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ecf0f1",
		paddingHorizontal: 8,
	},

	picture: {
		flex: 3,
		width: "100%",
	},
});
