import React, { useEffect, useState } from 'react';
import { SafeAreaView,ActivityIndicator, FlatList, Text, View , TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./home/search/SearchScreen";
import FilterScreen from "./home/filter/FilterScreen";
import { NavigationContainer } from '@react-navigation/native';
import InfoScreen from "./InfoScreen";
import { carparksavailable } from '../assets/carparksavailability';
import {
	Avatar,
	
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";



function CarparkResultsScreen ({navigation}){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMovies = async () => {
     try {
      const response = await fetch('http://localhost:8080/getcarparkinfo/1.339645028/103.7758026');
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


  const  list= () =>{

    return Object.keys(data).map(key => {
      let obj = data[key];
      obj.keyName = key;
      
      for (const item of carparksavailable) {
        if (item.car_park_no === key) {
          obj.name=item.address
          obj.free_parking=item.free_parking
        }
      }
      

      // console.log(response1)
      return (
        
              <TouchableOpacity	onPress={() => {
                // navigation.navigate("Info")
            
            }}>

              

           
            <Card style={{ marginBottom: 10 }}>
                      <Card.Content>
                
                  <Text style={[ {fontWeight: 'bold',fontSize: 20}]}>
                    {obj.name}
                    </Text>
                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>keyName:{obj.keyName}</Text>

                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>lots avail:{obj.lotsAvailable}</Text>

                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>total lots:{obj.totalLots}</Text>
                 
                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>free parking:{obj.free_parking}</Text>
                 
                 
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

// export default function homestack() {
// 	return (
// 		<Stack.Navigator headerMode="float">
// 			<Stack.Screen name="Info" component={InfoScreen} />
//       <Stack.Screen name="Filter" component={FilterScreen} />
//       <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
// 		</Stack.Navigator>
// 	);
// }

module.exports=CarparkResultsScreen;
