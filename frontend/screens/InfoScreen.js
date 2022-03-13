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
import {hawkerstalls} from '../../assets/stall';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./search/SearchScreen";
import FilterScreen from "./filter/FilterScreen";
import ResultsScreen from "./ResultsScreen"
import { NavigationContainer } from '@react-navigation/native';


function InfoScreen ({ navigation}){
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('http://localhost:8080/hawkerstalls/');
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
                <ImageBackground style={styles.small} source={require('../../assets/star.png')} /> {" "}: {element.rating} % {"\n"}  
                <ImageBackground style={styles.small} source={require('../../assets/location.png')} /> {" "}: {element.hawkercentrename} {"\n"}  
                <ImageBackground style={styles.small} source={require('../../assets/time.png')} />  {" "} : {element.operationhours}{"\n"} 
  
                </Text>
          </Card.Content>
</Card>
</SafeAreaView>
          
    
   );
  });
};


return (
  <SafeAreaView>
  {List()}
<Text  style={styles.infotext}>    
<Image style={styles.small} source={require('../../assets/direction.png')} /> {" "} Directions:
</Text >
<View style={{ flexDirection:"row" }}>
<TouchableOpacity 	
style={styles.button}>
<Image style={styles.med} source={require('../../assets/bus.png')} />
 <Text style={styles.infotext}>
  Public Transport
 </Text>
</TouchableOpacity>
<TouchableOpacity 
style={styles.button}>
<Image style={styles.med} source={require('../../assets/car.png')} />
 <Text style={styles.infotext}>
  Car
 </Text>
</TouchableOpacity>
<TouchableOpacity 
style={styles.button}>
<Image style={styles.med} source={require('../../assets/walking.png')} />
 <Text style={styles.infotext}>
  Walking
 </Text>
</TouchableOpacity>
</View>

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
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
      <Stack.Screen name="Info" component={InfoScreen} 
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