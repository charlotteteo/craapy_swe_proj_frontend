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
import InfoScreen from "./screens/InfoScreen";
import HawkerMaps from "./screens/maps/HawkerMaps";
import HomeScreen from "./screens/home/HomeScreen";
import CarparksResultsScreen from "./screens/CarparksResultsScreen";
import HomeScreenCopy from "./screens/home/HomeScreenCopy";
import HelpScreen from "./screens/help/HelpScreen";
import MapScreen from "./screens/maps/HawkerMaps";
import NearbyCarparkMapsScreenCopy from "./screens/maps/NearbyCarparkMapsScreenCopy";
import CarparkMapsScreen from "./screens/maps/CarparkMapsScreen";

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
                <FontAwesome5 name="map-marked-alt" size={size} color={color} />
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
        <Tab.Screen name="Home" component={HomeScreenCopy} />
        <Tab.Screen name="Maps" component={HawkerMaps} />
        <Tab.Screen name="Carparks" component={CarparkMapsScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}