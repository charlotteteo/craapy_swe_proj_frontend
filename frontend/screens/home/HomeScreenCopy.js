

 
import React, { useState } from "react";
import NearbyCarparkMapsScreen from "../maps/NearbyCarparkMapsScreen";
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
import SplashScreen from "../SplashScreen";
import SearchScreenCopy from "./search/SearchScreenCopy";
import Choices from "./Choices"
import {top10ratings}  from "../../assets/top10ratings";
import { top10communityratings } from "../../assets/top10communityratings";
import { healthychoices } from "../../assets/healthychoices";
import InfoScreen from "../InfoScreen";
import CarparkInfoScreen from "../maps/CarparkInfoScreen";

function HomeScreenCopy({ navigation }) {
  const [wish, setWish] = useState(false);
  const ratingslist = () => {
    return top10ratings.map((element) => {
      return (
        <TouchableOpacity
        onPress={()=>{navigation.navigate("InfoScreen",{path:element.Name})}}
        >
          <Choices name={element.Name} 
            imageUri={{uri:element.Thumbnail}} />
        </TouchableOpacity>
  
     
      );
    });
  };
  
  
  const healthyratingslist = () => {
      return healthychoices.map((element) => {
        return (
          <TouchableOpacity
          onPress={()=>{navigation.navigate("InfoScreen",{path:element.Name})}}
          >
        <Choices name={element.Name} 
            imageUri={{uri:element.Thumbnail}} />
        </TouchableOpacity>
        );
      });
    };
  
  const communityratingslist = () => {
      return top10communityratings.map((element) => {
        return (
        
          <TouchableOpacity
          onPress={()=>{navigation.navigate("InfoScreen",{path:element.Name})}}
      >
        <Choices name={element.Name} 
            imageUri={{uri:element.Thumbnail}} />
       
            </TouchableOpacity>
       
        );
      });
    };
  
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          {/* <ImageBackground style={styles.container} source={require('../../assets/Background.png')} resizeMode="cover">
          <View style={styles.headerwrap}>
              <Text style={styles.headerTitle}>HotHawks</Text>
              <Image
                  source={require("../../assets/wok.png")}
                  style={styles.headerImage}
                  resizeMode="contain"
                />
          </View>
          </ImageBackground> */}
          <Text style={styles.text}>Good day to you,</Text>
          <Text style={styles.headerTitle}>Happy Eating!</Text>
          <View style={styles.searchButton}>

        <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        >
          <View style={styles.searchcontainer}>
        <Image
                  source={require("../../assets/Search.png")}
                  style={styles.headerImage}
                  resizeMode="contain"
                  tintColor="black"
        />
        <Text style={styles.button}>Search</Text>
        </View>
        </TouchableOpacity>
        
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{flex:1, backgroundColor:"white", paddingTop:2}}>
          <Text style={styles.scrolltitle}>All Time Favourites</Text>
          <View style={{height:130, marginTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           {ratingslist()}
            </ScrollView>
          </View>
          <View>
            <Text style={styles.scrolltitle}>Trending</Text>
            <View style={{height:130, marginTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             {communityratingslist()}
            </ScrollView>
          </View>
          </View>

          <View>
            <Text style={styles.scrolltitle}>Healthy Choices</Text>
            <View style={{height:130, marginTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {healthyratingslist()}
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
        component={HomeScreenCopy}
        options={{
          headerBackTitleVisible:false,
          headerTitle:false,
          headerTransparent:true,
          headerTintColor:'#fff'
      }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreenCopy}
        options={{
          headerBackTitleVisible:false,
          headerTitle:false,
          headerTransparent:true,
          headerTintColor:'#fff'
      }}
      />
         <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          headerBackTitleVisible:false,
          headerTitle:false,
          headerTransparent:true,
          headerTintColor:'#fff'
      }}
      />
      <Stack.Screen name="NearbyCarparkMapsScreen" component={NearbyCarparkMapsScreen} 
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
                    <Stack.Screen name="CarparkInfoScreen" component={CarparkInfoScreen}       
                options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>  
            
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  header:{
    flex:1,
    //borderColor:"blue",
    //borderWidth:5

  },
  text:{
    color:"grey",
    marginTop:50,
    marginLeft:8,
    fontWeight:"bold",
    fontFamily:"notoserif"
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
    paddingTop: 35,
    paddingRight:0,
    marginLeft:100
    //alignItems: "center"
  },
  headerImage: {
    height:15,
    width:15,
    marginLeft:157,
    marginRight:3
  
  },
  searchcontainer:{
    flexDirection:"row",
    //justifyContent:"center",
    alignItems:"center",
    width:375,
    //backgroundColor:"lightblue",
    height:30

  },
  headerTitle: {
    color: "black",
    marginLeft:8,
    fontFamily: "serif",
    //paddingVertical: 10,
    paddingTop: 2,
    fontSize: 36,
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
    alignItems: "center",
    alignSelf:"center",
    marginRight: 10,
    marginTop: 10,
    backgroundColor:"#d2d2d2",
    borderRadius:15,
    width:"95%",
    height:30
    
  },
  scrolltitle:{
    fontSize:18,
    fontWeight:"700",
    //fontFamily: "Work Sans",
    marginTop:10,
    //marginBottom:10,
    marginLeft:10,
  },
  button:{
    fontWeight:"normal",
  }
});