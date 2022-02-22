import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import HelpScreen from "./screens/help/HelpScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CarparkMapsScreen from "./screens/maps/CarparkMapsScreen"


const Tab = createBottomTabNavigator();
// can change icons for the tab bar here - using ionicons/materialicons

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					// tabbarIcon is a function thus fixed value for color and size?
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						//Set the icon based on which route it is (name of the tab)
						if (route.name === "Home") {
							iconName = "home";
						} 
						 else if (route.name === "Food") 
							return <MaterialIcons name="restaurant" size={size} color={color} />;
							
							else if (route.name === "Carpark") 
							return <MaterialIcons name="search" size={size} color={color} />;
						
						else if (route.name === "Help")
							return <MaterialIcons name="help" size={size} color={color} />;
							
						//ternary operator ? :-> if ():?
						return (
							<MaterialCommunityIcons
								name={iconName}
								size={size}
								color={color}
							/>
						);
					},
				})}
				tabBarOptions={{
					activeTintColor: "orange",
					inactiveTintColor: "darkgrey",
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Food" component={HomeScreen} />
				<Tab.Screen name="Carpark" component={CarparkMapsScreen} />
				<Tab.Screen name="Help" component={HelpScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
