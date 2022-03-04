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
  ImageBackground
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
import App from "./search/SearchScreen";
import Choices from "./Choices"

function HomeScreen({ navigation }) {
  const [wish, setWish] = useState(false);

  return (
    <ScrollView>
      <View>
        <SafeAreaView style={styles.header}>
          <ImageBackground style={styles.container} source={require('../../assets/Background.png')} resizeMode="cover">
          <View style={styles.headerwrap}>
              <Text style={styles.headerTitle}>HotHawks</Text>
              <Image
                  source={require("../../assets/wok.png")}
                  style={styles.headerImage}
                  resizeMode="contain"
                />
              
          </View>
          <View style={styles.searchButton}>
            <Button 
            icon={require("../../assets/Search.png")}
            color={"white"}
            size={20}
            onPress={() => navigation.navigate("Search")}
            >
            Search
            </Button>
            
          </View>
          </ImageBackground>
        </SafeAreaView>
        <ScrollView scrollEventThrottle={16}>
          <View style={{flex:1, backgroundColor:"white", paddingTop:10}}>
          <Text style={styles.scrolltitle}>All Time Favourites</Text>
          <View style={{height:130, marginTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.navigate("Help")}>
              <Choices name="Ramen" 
                imageUri={require('../../assets/ramen.png')} />
            </TouchableOpacity>
              <Choices imageUri={require('../../assets/Beehoon.png')} name="Beehoon"/>
              <Choices imageUri={require('../../assets/noodle.png')} name="Noodle"/>
            </ScrollView>
          </View>
          <View>
            <Text style={styles.scrolltitle}>Trending</Text>
            <View style={{height:130, marginTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Choices name="Ramen" color="yellow"
                imageUri={require('../../assets/ramen.png')} />
              <Choices imageUri={require('../../assets/Beehoon.png')} name="Beehoon"/>
              <Choices imageUri={require('../../assets/noodle.png')} name="Noodle"/>
            </ScrollView>
          </View>
          </View>

          <View>
            <Text style={styles.scrolltitle}>HealthyChoices</Text>
            <View style={{height:130, marginTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Choices name="Ramen" color="yellow"
                imageUri={require('../../assets/ramen.png')} />
              <Choices imageUri={require('../../assets/Beehoon.png')} name="Beehoon"/>
              <Choices imageUri={require('../../assets/noodle.png')} name="Noodle"/>
            </ScrollView>
          </View>
          </View>


        </View>
        </ScrollView>
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header: {
  //   flex:1,
  //   backgroundColor: "rgba(240, 54, 14, 0.8)",
  //   borderBottomLeftRadius: 10,
  //   borderBottomRightRadius: 10,
  // },
  headerwrap: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
    paddingTop: 15,
    paddingRight:0,
    marginLeft:100
    //alignItems: "center"
  },
  headerImage: {
    height: 50,
    width: null,
    marginRight:100,
    flex: 1,
  },
  headerTitle: {
    color: "#fff",
    fontFamily: "Roboto",
    //paddingVertical: 10,
    paddingTop: 10,
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: 'bold',
    //lineHeight: 43,
    //letterSpacing: 0,
    //textAlign: 'center'
  },
  // headerSubtitle: {
  //   fontFamily: "sans-serif",
  //   color: "#fff",
  //   fontSize: 15,
  // },
  searchButton: {
    alignItems: "flex-end",
    marginRight: 5,
    marginTop:5
  },
  scrolltitle:{
    fontSize:18,
    fontWeight:"700",
    fontFamily: "Work Sans",
    marginTop:10,
    //marginBottom:10,
    marginLeft:10,
  },
});