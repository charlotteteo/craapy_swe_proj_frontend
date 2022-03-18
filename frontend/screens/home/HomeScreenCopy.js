

 
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


function HomeScreenCopy({ navigation }) {
  const [wish, setWish] = useState(false);
  const ratingslist = () => {
    return top10ratings.map((element) => {
      return (
      <TouchableOpacity
      onPress={()=>{navigation.navigate("InfoScreen",{path:element.Name})}}
      >
        <Card style={{width:250,height:250 ,alignItems:"center"}}>
          <Card.Content>

            <Text style={{fontSize:15}}>
              {element.Name}
            </Text>
            <Text></Text>
            <Card.Cover source={{ uri: element.Thumbnail }} style={{height:200,width:150}} />

            
           
          </Card.Content>
         
        </Card>
       
        {/* <Choices name={element.Name} 
          imageUri={{uri:thumbnail}} /> */}
          </TouchableOpacity>
  
     
      );
    });
  };
  
  
  const healthyratingslist = () => {
      return healthychoices.map((element) => {
        const thumbnail=element.Thumbnail;
        return (
          <TouchableOpacity
          onPress={()=>{navigation.navigate("InfoScreen",{path:element.Name})}}
          >
          <Card style={{width:250,height:250 ,alignItems:"center"}}>
          <Card.Content>

            <Text style={{fontSize:15}}>
              {element.Name}
            </Text>
            <Text></Text>
            <Card.Cover source={{ uri: element.Thumbnail }} style={{height:200,width:150}} />

            
           
          </Card.Content>
         
        </Card>
       
        </TouchableOpacity>
        );
      });
    };
  
  const communityratingslist = () => {
      return top10communityratings.map((element) => {
        const thumbnail=element.Thumbnail;
        return (
        
          <TouchableOpacity
          onPress={()=>{navigation.navigate("InfoScreen",{path:element.Name})}}
      >
           <Card style={{width:250,height:250 ,alignItems:"center"}}>
          <Card.Content>

            <Text style={{fontSize:15, }}>
              {element.Name}
            </Text>
            <Text></Text>
            <Card.Cover source={{ uri: element.Thumbnail }} style={{height:200,width:150}} />

            
           
          </Card.Content>
         
        </Card>
       
            </TouchableOpacity>
       
        );
      });
    };
  
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
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
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{flex:1, backgroundColor:"white", paddingTop:10}}>
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
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
    height: 50,
    width: null,
    paddingTop: 35,
    marginRight:100,
    marginLeft:5,
    flex: 1,
  },
  headerTitle: {
    color: "#fff",
    //fontFamily: "Roboto",
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
    alignItems: "center",
    marginRight: 5,
    marginTop: 0,
    top:-5
  },
  scrolltitle:{
    fontSize:18,
    fontWeight:"700",
    //fontFamily: "Work Sans",
    marginTop:10,
    //marginBottom:10,
    marginLeft:10,
  },
});