import React, { useEffect, useState } from 'react';
import { SafeAreaView,ActivityIndicator, FlatList, Text, View , TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./home/search/SearchScreen";
import FilterScreen from "./home/filter/FilterScreen";
import { NavigationContainer } from '@react-navigation/native';
import InfoScreen from "./InfoScreen";
import NearbyCarparkMapsScreen from "./maps/NearbyCarparkMapsScreen";
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
  distanceArray = ["0.1","0.3","0.5","1","2"]
  neighbourhoodArray = ["Ardmore, Bukit Timah, Holland Road, Tanglin","Orchard, Cairnhill, River Valley","Jurong","Little India","Tampines, Pasir Ris","Queenstown, Tiong Bahru","Raffles Place, Cecil, Marina, Peoples Park"]


  const getHawkers = async () => {
     try {
      if (path.length == 1) {
        if (ratingArray.includes(path[0])) {
          var response = await fetch('http://localhost:8080/rating/'+path[0]);    //var used to make it editable. 
          //console.log("check??")
        } 
        else if (distanceArray.includes(path[0])) {
          var response = await fetch('http://localhost:8080/distance/1.3072/103.7906/'+path[0]);    // USED BV MRT place. needs at least 800m to find smt 
        } 
        else if (neighbourhoodArray.includes(path[0])) {
          var response = await fetch('http://localhost:8080/neighbourhood/'+path[0]);    
        }  else {
          var response = await fetch('http://localhost:8080/search/'+path[0]);
        }
      }
      else if (path.length == 2) {
        if (ratingArray.includes(path[0]) && neighbourhoodArray.includes(path[1])) {    // RATING + NEIGHBOURHOOD
          var response = await fetch('http://localhost:8080/ratingandneigh/'+path[1]+'/'+path[0]);  
        }
        else if (ratingArray.includes(path[0]) && distanceArray.includes(path[1])) {    // RATING + DISTANCE - used to not work last time
          var response = await fetch('http://localhost:8080/ratinganddist/'+path[0]+'/1.3072/103.7906/'+path[1]);  
          //alert('http://localhost:8080/ratinganddist/'+path[0]+'/1.3072/103.7906/'+path[1])
        }
        else if (distanceArray.includes(path[0]) && neighbourhoodArray.includes(path[1])) {    // DISTANCE + NEIGHBOURHOOD
          var response = await fetch('http://localhost:8080/distandneigh/'+path[1]+'/1.3072/103.7906/'+path[0]);  
        } else {
          var response = await fetch('http://localhost:8080/search/'+path[0]);
        }
      }
      else if (path.length == 3) {
        if (ratingArray.includes(path[0]) && distanceArray.includes(path[1]) && neighbourhoodArray.includes(path[2])) {    // RATING + NEIGHBOURHOOD + distance
          var response = await fetch('http://localhost:8080/allfilters/'+path[2]+'/'+path[0]+'/1.3072/103.7906/'+path[1]);  
        }
      }
      
      //console.log(path)
      const json = await response.json();
  
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHawkers();
  }, []);

  const list = () => {
  
    return data.map((element) => {
     
      return (
        
              <TouchableOpacity	onPress={() => {
                navigation.navigate("InfoScreen",{path:element.name})
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
    <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
    	<Stack.Screen name="InfoScreen" component={InfoScreen} />
      <Stack.Screen name="NearbyCarparkMapsScreen" component={NearbyCarparkMapsScreen} />
		</Stack.Navigator>
	);
}

module.exports=ResultsScreen;