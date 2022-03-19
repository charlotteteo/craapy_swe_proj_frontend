import React, { useEffect, useState } from 'react';
import { SafeAreaView,ActivityIndicator, FlatList, Text, View , TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
//import SearchScreen from "./home/search/SearchScreen";
//import FilterScreen from "./home/filter/FilterScreen";
import { NavigationContainer } from '@react-navigation/native';
//import InfoScreen from "./InfoScreen";
import CarparkMapsScreen from "./CarparkMapsScreen";
import {
	Avatar,
	
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";


function CarparkInfoScreen ({ navigation,route }){
  console.log("hello1")
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {path} = route.params;
  console.log("hello2")
  console.log(route.params)
  console.log("hello3")


  const getMovies = async () => {
     try {
      const response = await fetch('http://localhost:8080/carpark/ACB');
      const json = await response.json();
      console.log(json)
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

  const list = () => {
  
    return data.map((element) => {
     
      return (
        
              <TouchableOpacity	onPress={() => {
                navigation.navigate("Info")
            
            }}>

           
            <Card style={{ marginBottom: 10 }}>
                      <Card.Content>
                {/* <View key={element.key} style={{margin: 10}}> */}
                  <Text style={[ {fontWeight: 'bold',fontSize: 20}]}>
                    {element.name}
                    </Text>
                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Address:{element.address}</Text>

                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Operation Hours:{element.operationhours}</Text>

                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Food Categories:{element.foodcategories}</Text>

            </Card.Content>
  
  
  </Card>
            </TouchableOpacity>
        
      );
    });
  };



  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      <ScrollView>
     {list()}
    </ScrollView>
    </SafeAreaView>
  );
};


const Stack = createStackNavigator();

export default function homestack() {
	return (
    <NavigationContainer>
		  <Stack.Navigator mode="none">
          <Stack.Screen name="CarparkMapsScreen" component={CarparkMapsScreen}       
        options={{
                  headerBackTitleVisible:false,
                  headerTitle:false,
                  headerTransparent:true,
                  headerTintColor:'#fff'
              }}/>
		  </Stack.Navigator>
        <Stack.Screen name="CarparkInfoScreen" component={ResultsScreen}       
        options={{
                  headerBackTitleVisible:false,
                  headerTitle:false,
                  headerTransparent:true,
                  headerTintColor:'#fff'
              }}/>
       
    </NavigationContainer>
	);
}

module.exports=CarparkInfoScreen;