

 
import React, {useEffect, useState } from "react";
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
import { useFonts } from 'expo-font';

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
import NearbyCarparkMapsScreen from "../maps/NearbyCarparkMapsScreen";
import CarparkInfoScreen from "../maps/CarparkInfoScreen";
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OverallCarparkInfoScreen from '../maps/OverallCarparkInfoScreen';
import CarparkMapsScreen from "../maps/CarparkMapsScreen";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

function HomeScreenCopy({ navigation }) {
  const [wish, setWish] = useState(false);
  const [data, setData] = useState([]);

  

  const recentlist = () => {
    // DISPLAY ON SCREEN?
    return data.map((element) => {
      //console.log("check1 - recent history")
      //console.log(element);
      //console.log("endcheck - recent history")

      const thumbnail=element.thumbnail;
      return (
      <TouchableOpacity
      onPress={()=>{navigation.navigate("InfoScreen",{path:element.name})}}
      >
        
        <Choices name={element.name} 
          imageUri={{uri:thumbnail}} />
          </TouchableOpacity>
      );
    });
  };


  useEffect(() => {
    const getHawkers = navigation.addListener("focus", async (e) => {
      // to get the history from async storage
      try {
        var jsonString = await AsyncStorage.getItem('history');
        console.log("jsonStringcheck")
        console.log(jsonString)
        if (jsonString !== null) {
          // We have data!!
          jsonHistory = JSON.parse(jsonString);
          var historypath = 'http://craapy-env.eba-9gpy3v9a.us-east-1.elasticbeanstalk.com/history/';
          for (let i = 1; i < 10; i++) {     // hardcoded btw 
            historypath = historypath + jsonHistory["history" + (i).toString()] +"/";   
          }
          historypath = historypath + jsonHistory["history10"]; 
        }
        else if (jsonString == null) {
          var historypath = 'http://craapy-env.eba-9gpy3v9a.us-east-1.elasticbeanstalk.com/history/3 Hainanese Chicken Rice/Xiang Jiang Soya Sauce Chicken/Depot Road Zhen Shan Mei Laksa/Hock Kee Fried Kway Teow/Kwang Kee Teochew Fish Porridge/The Sugarcane Plant/Ma Bo/Teck Kee Hot & Cold Dessert/Ramen Taisho/Kwang Kee Teochew Fish Porridge';
        }
      } catch (error) {
        // Error retrieving data
      }
      //console.log(historypath)  
  
      console.log(historypath)
      console.log("This is the json history - home screen!!!")
      //console.log(jsonHistory);
      //GET FROM BACKEND
      try {
        
        var response = await fetch(historypath);
        const json = await response.json();       
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        //setLoading(false);
      }
      //console.log(data)
      //console.log("check")
      //console.log(top10ratings.map(element))

    });

    //CHECK
    

      return () => getHawkers();
    }, [ navigation]);




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
    
  
  
    const [loaded] = useFonts({
  
      OpenSans: require('../../assets/fonts/OpenSans.ttf'),
      Nunito: require('../../assets/fonts/Nunito.ttf'),
      NunitoBold: require('../../assets/fonts/NunitoBold.ttf'),
      NunitoLight: require('../../assets/fonts/NunitoLight.ttf'),
      OpenSansbold: require('../../assets/fonts/OpenSansBold.ttf'),
      LatoBold:require('../../assets/fonts/LatoBold.ttf'),
      LatoBlack:require('../../assets/fonts/LatoBlack.ttf'),
      NunitoBlack:require('../../assets/fonts/NunitoBlack.ttf'),
      SF:require('../../assets/fonts/SF-UI-Display-Regular.otf'),
      SFBlack:require('../../assets/fonts/SF-UI-Display-Black.otf'),
    });
    
    if (!loaded) {
      return null;
    }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
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
        <Text style={styles.button}>Search e.g. Chicken Rice</Text>
        </View>
        </TouchableOpacity>
        
          </View>
          </View>
          <View
  style={{
    borderBottomColor: 'rgba(242, 242, 247,1)',
    borderBottomWidth: 2,
    marginTop:20
  }}
/>
        <ScrollView scrollEventThrottle={16}>
        <View style={{flex:1, backgroundColor:"white", paddingTop:5, borderTopRightRadius:20,borderTopLeftRadius:20}}>
          <Text style={styles.scrolltitle}>Recent</Text>
          
          <View style={{height:190, marginTop:12, paddingBottom:5}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           {recentlist()}
            </ScrollView>
          </View>
        </View>
        </ScrollView>
        <ScrollView scrollEventThrottle={16}>
          <View style={{flex:1, backgroundColor:"white", paddingTop:5}}>
          <Text style={styles.scrolltitle}>All Time Favourites</Text>
          <View style={{height:190, marginTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           {ratingslist()}
            </ScrollView>
          </View>
          <View>
            <Text style={styles.scrolltitle}>Trending</Text>
            <View style={{height:190, marginTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             {communityratingslist()}
            </ScrollView>
          </View>
          </View>

          <View>
            <Text style={styles.scrolltitle}>Healthy Choices</Text>
            <View style={{height:190, marginTop:20,paddingBottom:10}}>
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
          headerTintColor:'black'
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
                      <Stack.Screen name="CarparkMapsScreen" component={CarparkMapsScreen}       
                options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>  
              <Stack.Screen
        name="OverallCarparkInfoScreen"
        component={OverallCarparkInfoScreen}
        options={{
          headerBackTitleVisible:false,
          headerTitle:false,
          headerTransparent:true,
          headerTintColor:'black'
      }}
      />
    </Stack.Navigator>
  );
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:"white",
            //borderColor:"blue",
        //borderWidth:5
      },
      header:{
        flex:1,
        //borderColor:"blue",
        //borderWidth:5
    
      },
      text:{
        color:"grey",
        marginTop:90,
        marginLeft:9,
        fontWeight:"bold",
        fontFamily:"NunitoBold",
        fontSize:16
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
        height:20,
        width:20,
        marginLeft:157,
        marginRight:3,
        
      
      },
      searchcontainer:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        top:8,
        right:140,
        width:375,
        //backgroundColor:"lightblue",
        height:30
    
      },
      headerTitle: {
        color: "black",
        marginLeft:8,
        fontFamily: "OpenSansbold",
        //paddingVertical: 10,
        paddingTop: 4,
        paddingBottom:5,
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
        alignItems: "flex-start",
        alignSelf:"center",
        marginRight: 10,
        marginTop: 10,
        backgroundColor:"#fec241",
        borderRadius:20,
        width:"88%",
        height:45,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
      },
      scrolltitle:{
        fontSize:23,
        fontWeight:"700",
        fontFamily: "SFBlack",
        marginTop:10,
        //marginBottom:10,
        marginLeft:15,
      },
      button:{
        fontFamily:"NunitoBold",
        marginLeft:5,
        color:"white",
        opacity:0.7,
        fontSize:16
      }
    });