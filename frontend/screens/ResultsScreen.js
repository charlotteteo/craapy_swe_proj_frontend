import React, { useEffect, useState } from 'react';
import { SafeAreaView,ActivityIndicator, FlatList, Text, View , TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./home/search/SearchScreen";
import FilterScreen from "./home/filter/FilterScreen";
import { NavigationContainer } from '@react-navigation/native';
import InfoScreen from "./InfoScreen";
import {
	Avatar,
	
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";


function ResultsScreen ({ navigation,route }){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {path} = route.params;
  
  ratingArray = ["20","40","60","80","90"]
  distanceArray = ["100","300","500","1000","2000"]
  neighbourhoodArray = ["Bukit Timah","Orchard","Changi","East Coast","Tampines","Bukit Panjang","Ang Mo Kio"]

  const getMovies = async () => {
     try {
      
      if (ratingArray.includes(path)) {
        var response = await fetch('http://localhost:8080/greater/'+path);    //var used to make it editable. 
        //console.log("check??")
      } else {
        var response = await fetch('http://localhost:8080/search/'+path);
      }

      
      


      console.log("search: " + path)
      //console.log("check: " + ratingArray.includes(path))
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
		<Stack.Navigator headerMode="float">
			<Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
		</Stack.Navigator>
	);
}

module.exports=ResultsScreen;

