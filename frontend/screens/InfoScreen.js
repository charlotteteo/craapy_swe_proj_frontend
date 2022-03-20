import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
 Button,
 Image,
 SafeAreaView,
 ImageBackground,
 ScrollView,
 TouchableOpacity,
 Pressable
} from 'react-native';
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./home/search/SearchScreen";
import FilterScreen from "./home/filter/FilterScreen";
import ResultsScreen from "./ResultsScreen"
import { NavigationContainer } from '@react-navigation/native';
import NearbyCarparkMapsScreen from "./maps/NearbyCarparkMapsScreen";
import * as WebBrowser from 'expo-web-browser';

function InfoScreen ({ navigation,route}){
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {path}=route.params;
  console.log(path)
  const getMovies = async () => {
     try {
      // const response = await fetch('http://localhost:8080/search/De Sheng Shou Gong Mian Yu Tang');

      const response = await fetch('http://localhost:8080/search/'+path);
      const json = await response.json();
  
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const List = () => {
   return data.map((element) => {
    address= 'https://www.google.com/maps?saddr=My+Location&daddr='+element.latitude_hc+','+element.longitude_hc
    _handleOpenWithWebBrowser = () => {
      WebBrowser.openBrowserAsync(address);
    };
    return (
      
           <SafeAreaView >
             <Text style={styles.headerTitle}>  Lin Da Ma Lei Cha  </Text>
             <Card >
          <Card.Content>
              {/* <View key={element.key} style={{margin: 10}}> */}
              <Card.Cover style={{margin: 10, marginBottom: 30,borderRadius: 20}} source={{ uri: element.thumbnail }} />
                <Text> 
                <ImageBackground style={styles.small} source={require('../assets/star.png')} />  {" "}<Text style={styles.infotext}>:  {element.rating} % </Text> {"\n"} 
                <ImageBackground style={styles.small} source={require('../assets/location.png')} /> {" "}<Text style={styles.infotext}>:  {element.hawkercentrename} </Text>{"\n"}  
                <ImageBackground style={styles.small} source={require('../assets/time.png')} />  {" "}<Text style={styles.infotext}>:  {element.operationhours}</Text>{"\n"} 
  
                </Text>
          </Card.Content>
</Card>

<Text style={{marginTop:25,marginLeft:20,flexDirection:"row"}}> <ImageBackground style={styles.logo} source={require('../assets/direction.png')}/> <Text style={styles.text} > Directions:</Text> 
</Text>
          <View style={{ flexDirection:"row", alignItems: "center", marginLeft:25,marginTop:-25 }}>
          <TouchableOpacity onPress={this._handleOpenWithWebBrowser}  
          style={styles.button}>
          <Image style={styles.med} source={require('../assets/bus.png')} />
           <Text style={styles.buttontext}>
            Public Transport
           </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            // navigation.navigate("NearbyCarparkMapsScreen",{latitude:1.311102033,longitude:103.7949448})

            navigation.navigate("NearbyCarparkMapsScreen",{latitude:element.latitude_hc,longitude:element.longitude_hc,})
                   
          }}
          style={styles.button}>
          <Image style={styles.med} source={require('../assets/car.png')} />
           <Text style={styles.buttontext}>
            Car
           </Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={this._handleOpenWithWebBrowser} 
          style={styles.button}>
          <Image style={styles.med} source={require('../assets/walking.png')} />
           <Text style={styles.buttontext}>
            Walking
           </Text>
          </TouchableOpacity>
          </View>
          </SafeAreaView>
    
   );
  });
};


return (
  <SafeAreaView>
   {List()}

  </SafeAreaView>
);
  
}

const styles = StyleSheet.create({
  headerTitle: {
   color: "black",
    marginLeft:8,
    fontFamily: "serif",
    paddingVertical: 10,
    paddingTop: 2,
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: 'bold',
    
    lineHeight: 43,
    letterSpacing: 0,
    textAlign: 'center'
    
  },
   infotext:{
    color: "black",
    textAlign: 'center',
    fontFamily: 'arial',
		fontSize: 23,
    marginLeft: 7,
  
  },
  text:{
   color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
		fontSize: 23,
  },
  buttontext: {
		color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
		fontSize: 15,
    margin: 7,
	},
  med:{
    height: 50,
    width: 50,
  },
  small: {
    height: 20, 
    width: 20,
    marginRight: 10,
    marginBottom:-1,
  },
  logo:{
    height:20,
    width:20,
  },
   button: {         
    backgroundColor: "#FFBE30", 
    height: "45%",
    width: "25%",
    alignItems: "center",
    justifyContent:"center",
    margin : 12,
    borderRadius: 20,

  },
  big: {
   flex: 1,
  backgroundColor:"white",
  
  },
});


const Stack = createStackNavigator();
export default function stacker() {
  return (
    <Stack.Navigator headerMode="float">

      <Stack.Screen name="ResultsScreen" component={ResultsScreen} /> 
      <Stack.Screen name="Info" component={InfoScreen} 
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
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

module.exports = InfoScreen;