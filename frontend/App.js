import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import HawkerMapsScreen from "./screens/maps/HawkerMapsScreen";
import HomeScreen from "./screens/home/HomeScreen";
import HelpScreen from "./screens/help/HelpScreen";
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
          activeTintColor: "#fec241",
          inactiveTintColor: "rgba(152, 152, 157,1)",
          style: {
            backgroundColor: 'rgba(242, 242, 247,0.3)',
          },
        }}

      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Maps" component={HawkerMapsScreen} />
        <Tab.Screen name="Carparks" component={CarparkMapsScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}