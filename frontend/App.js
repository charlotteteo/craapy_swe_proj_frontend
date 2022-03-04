import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import HomeScreen from "./screens/home/HomeScreen";
import HelpScreen from "./screens/help/HelpScreen";
import MapScreen from "./screens/maps/HawkerMaps";
import CarparkScreen from "./screens/maps/CarparkMapsScreen";

const Tab = createBottomTabNavigator();

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
            } else if (route.name === "Maps") {
              iconName = "local-attraction";
              return (
                <FontAwesome5 name="map-marked-alt" size={size} color="grey" />
              );
            } else if (route.name === "Carparks") {return <FontAwesome5 name="car" size={size} color={color} />}
            else if (route.name === "Help")
              return <Entypo name="help-with-circle" size={size} color={color} />;
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
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Carparks" component={CarparkScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}