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
//import {CSVLink, CSVDownload} from 'react-csv';
//import {writeJsonFile} from 'write-json-file';

import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./home/search/SearchScreen";
import FilterScreen from "./home/filter/FilterScreen";
import ResultsScreen from "./ResultsScreen"
import { NavigationContainer } from '@react-navigation/native';
import NearbyCarparkMapsScreen from "./maps/NearbyCarparkMapsScreen";
import * as WebBrowser from 'expo-web-browser';

import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';


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


    // IF need to reset the history
    /*
      try {
        await AsyncStorage.removeItem('history');
      }
      catch(error) {
          //error;
      }
      */


    try {
      var jsonString = await AsyncStorage.getItem('history');
      if (jsonString == null) {
        // We INITIALIZE jsonstring
        console.log(jsonString)
        jsonString = '{"history1":"Holland V Coffee & Drink", "history2":"Xiang Jiang Soya Sauce Chicken", "history3":"Depot Road Zhen Shan Mei Laksa","history4":"Hock Kee Fried Kway Teow","history5":"Kwang Kee Teochew Fish Porridge","history6":"The Sugarcane Plant", "history7":"Ma Bo", "history8":"Teck Kee Hot & Cold Dessert","history9":"Ramen Taisho","history10":"Kwang Kee Teochew Fish Porridge"}';
        try {
          await AsyncStorage.setItem(
            'history',
            jsonString
          );
        } catch (error) {
          // Error saving data
        }
      }
    } catch (error) {
      // Error retrieving data
    }
    
    


    //edot
    
    try {
      var jsonString = await AsyncStorage.getItem('history');
      if (jsonString !== null) {
        // We have data!!
        jsonHistory = JSON.parse(jsonString);
      }
    } catch (error) {
      // Error retrieving data
    }


    console.log(jsonHistory);

    for (let i = 9; i > 0; i--) {     // hardcoded btw 
      jsonHistory["history" + (i+1).toString()] = jsonHistory["history" + (i).toString()];   
    }

    jsonHistory["history1"] = path;

    console.log(jsonHistory);

    jsonString = JSON.stringify(jsonHistory);
    try {
      await AsyncStorage.setItem(
        'history',
        jsonString
      );
    } catch (error) {
      // Error saving data
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
            navigation.navigate("NearbyCarparkMapsScreen",{latitude:element.latitude_hc,longitude:element.longitude_hc})

            // navigation.navigate("NearbyCarparkMapsScreen",{latitude:element.hc_latitude,longitude:element.hc_longitude,})
                   
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
    backgroundColor: "#FEE0D4"
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
{/* 
    <Stack.Screen name="ResultsScreen" component={ResultsScreen} /> */}
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