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
import CarparkMapsScreen from "./maps/CarparkMapsScreen";

function CarparkResultsScreen ({ navigation,route}){
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {path}=route.params;
  console.log(path)
  const getMovies = async () => {
     try {
      // const response = await fetch('http://localhost:8080/search/De Sheng Shou Gong Mian Yu Tang');

      const response = await fetch('http://craapy-env.eba-9gpy3v9a.us-east-1.elasticbeanstalk.com/carpark/'+path);
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
          <Card style= {{backgroundColor: "#FFB899"}}>
          <Card.Content>
              {/* <View key={element.key} style={{margin: 10}}> */}
                <Text  style={styles.paragraph}>
                  {element.name}
                  </Text>
                <Card.Cover source={{ uri: element.thumbnail }} />
                <Text style={styles.infotext}> 
                <ImageBackground style={styles.small} source={require('../assets/star.png')} /> {" "}: {element.rating} % {"\n"}  
                <ImageBackground style={styles.small} source={require('../assets/location.png')} /> {" "}: {element.hawkercentrename} {"\n"}  
                <ImageBackground style={styles.small} source={require('../assets/time.png')} />  {" "} : {element.operationhours}{"\n"} 
  
                </Text>
          </Card.Content>
</Card>

          <Text  style={styles.infotext}>    
          <Image style={styles.small} source={require('../assets/direction.png')} /> {" "} Directions:
          </Text >
          <View style={{ flexDirection:"row" }}>
          <TouchableOpacity onPress={this._handleOpenWithWebBrowser}  
          style={styles.button}>
          <Image style={styles.med} source={require('../assets/bus.png')} />
           <Text style={styles.infotext}>
            Public Transport
           </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            // navigation.navigate("NearbyCarparkMapsScreen",{latitude:1.311102033,longitude:103.7949448})

            navigation.navigate("NearbyCarparkMapsScreen",{latitude:element.latitude_hc,longitude:element.longitude_hc,})
                   
          }}
          style={styles.button}>
          <Image style={styles.med} source={require('../assets/car.png')} />
           <Text style={styles.infotext}>
            Car
           </Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={this._handleOpenWithWebBrowser} 
          style={styles.button}>
          <Image style={styles.med} source={require('../assets/walking.png')} />
           <Text style={styles.infotext}>
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
  container: {
    backgroundColor: "black"
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color : 'red',
  },
  infotext: {
    color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  logo: {
    height: 128,
    width: 128,
  },
  med:{
    height: 50,
    width: 50,
  },
  small: {
    height: 10, 
    width: 10,
  },
  button: {         // tbh doesnt matter a lot haha
    backgroundColor: "pink", // dark mode: #303337
    height: "50%",
    width: "22%",
    alignItems: "center",
    justifyContent:"center",
    margin: 10,
    borderRadius: 20
  },
  
});

const Stack = createStackNavigator();
export default function stacker() {
  return (
    <Stack.Navigator headerMode="float">
         <Stack.Screen name="CarparkResultsScreen" component={CarparkResultsScreen} 
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
      <Stack.Screen name="CarparkMapsScreen" component={CarparkMapsScreen} /> 
     
    
    </Stack.Navigator>
  );
}

module.exports = CarparkResultsScreen;