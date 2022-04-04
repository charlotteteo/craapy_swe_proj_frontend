import React, { useEffect, useState } from 'react';
import { SafeAreaView,ActivityIndicator, FlatList, Text, View , TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./home/search/SearchScreen";
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
  cuisineArray = ["Chinese","Western","Indian","Thai","Japanese"]
  distanceArray = ["0.1","0.3","0.5","1","2"]
  neighbourhoodArray = ["Ardmore, Bukit Timah, Holland Road, Tanglin","Orchard, Cairnhill, River Valley","Jurong","Little India","Tampines, Pasir Ris","Queenstown, Tiong Bahru","Raffles Place, Cecil, Marina, Peoples Park"]

  // BV MRT
  const LATITUDE =  1.3072;
  const LONGITUDE = 103.7906;

  const getHawkers = async () => {
     try {
      var response = "empty"

      if (path.length == 1) {
        if (ratingArray.includes(path[0])) {
          var response = await fetch('http://localhost:8080/rating/'+path[0]);    //var used to make it editable. 
          //console.log("check??")
        } 
        else if (distanceArray.includes(path[0])) {
          var response = await fetch('http://localhost:8080/distance/'+LATITUDE+'/'+LONGITUDE +'/'+path[0]);    // USED BV MRT place. needs at least 800m to find smt 
        } 
        else if (neighbourhoodArray.includes(path[0])) {
          var response = await fetch('http://localhost:8080/neighbourhood/'+path[0]);    
        }
      }
      else if (path.length == 2) {
        if (ratingArray.includes(path[0]) && neighbourhoodArray.includes(path[1])) {    // RATING + NEIGHBOURHOOD
          var response = await fetch('http://localhost:8080/ratingandneigh/'+path[1]+'/'+path[0]);  
        }
        else if (ratingArray.includes(path[0]) && distanceArray.includes(path[1])) {    // RATING + DISTANCE - used to not work last time
          var response = await fetch('http://localhost:8080/ratinganddist/'+path[0]+'/'+LATITUDE+'/'+LONGITUDE+'/'+path[1]);  
          //alert('http://localhost:8080/ratinganddist/'+path[0]+'/1.3072/103.7906/'+path[1])
        }
        else if (distanceArray.includes(path[0]) && neighbourhoodArray.includes(path[1])) {    // DISTANCE + NEIGHBOURHOOD
          var response = await fetch('http://localhost:8080/distandneigh/'+path[1]+'/'+LATITUDE+'/'+LONGITUDE+'/'+path[0]);  
        } 
        else if (cuisineArray.includes(path[0]) && distanceArray.includes(path[1])) {    // CUISINE + DISTANCE
          var response = await fetch('http://localhost:8080/distandcuis/'+path[0]+'/'+LATITUDE+'/'+LONGITUDE+'/'+path[1]);   
        }
        else if (ratingArray.includes(path[0]) && cuisineArray.includes(path[1])) {    // RATING + CUISINE
          var response = await fetch('http://localhost:8080/ratingandcuis/'+path[1]+'/'+path[0]);  
        }
        else if (cuisineArray.includes(path[0]) && neighbourhoodArray.includes(path[1])) {    // CUISINE + NEIGHBOURHOOD 
          var response = await fetch('http://localhost:8080/neighcuis/'+path[0]+'/'+path[1]);  
        }
      }
      else if (path.length == 3) {
        if (ratingArray.includes(path[0]) && distanceArray.includes(path[1]) && neighbourhoodArray.includes(path[2])) {    // RATING + NEIGHBOURHOOD + distance
          var response = await fetch('http://localhost:8080/ratingdistneigh/'+path[2]+'/'+path[0]+'/'+LATITUDE+'/'+LONGITUDE+'/'+path[1]);  
        }
        else if (ratingArray.includes(path[0]) && cuisineArray.includes(path[1]) && neighbourhoodArray.includes(path[2])) {    // RATING + CUISINE + NEIGHBOURHOOD
          var response = await fetch('http://localhost:8080/ratingneighcuis/'+path[1]+'/'+path[2]+'/'+path[0]);  
        }
        else if (ratingArray.includes(path[0]) && cuisineArray.includes(path[1]) && distanceArray.includes(path[2])) {    // RATING + CUISINE + distance
          var response = await fetch('http://localhost:8080/ratingdistcuis/'+path[1]+'/'+path[0]+'/'+LATITUDE+'/'+LONGITUDE+'/'+path[2]);  
        }
        else if (cuisineArray.includes(path[0]) && distanceArray.includes(path[1]) && neighbourhoodArray.includes(path[2])) {    // CUISINE + distance + NEIGHBOURHOOD
          var response = await fetch('http://localhost:8080/distneighcuis/'+path[0]+'/'+path[2]+'/'+LATITUDE+'/'+LONGITUDE+'/'+path[1]);  
        }
      }
      else if (path.length == 4) {
        if (ratingArray.includes(path[0]) && cuisineArray.includes(path[1]) && distanceArray.includes(path[2]) && neighbourhoodArray.includes(path[3])) {    // CUISINE + distance + NEIGHBOURHOOD
          var response = await fetch('http://localhost:8080/allfilters/'+path[1]+'/'+path[3]+'/'+path[0]+'/'+LATITUDE+'/'+LONGITUDE+'/'+path[2]);
        }
      }

      if (response == "empty") {
        var response = await fetch('http://localhost:8080/search/'+path[0]);
      }
      
      //console.log(path)
      //const json = await response.json();       // ACTUAL

      
      //const testresponse = await aJson;        // TEST
      //const json= await aJson;        // TEST
      const json = [
        {
            "communityrating": 67,
            "foodcategories": "['Fruits & Juices']",
            "hawkercentrename": "Holland Village Market & Food Centre",
            "highlightitems": "[{'Name': 'Fruits', 'Description': None, 'Image': '', 'RedirectUrl': None, 'Type': 1, 'Rating': 99}, {'Name': '', 'Description': None, 'Image': 'https://ewr1.vultrobjects.com/hawkerpedia/hawker-centre-manually/Holland Village Mkt _ FC (Near HV MRT) (277700)/88HollandVillageFreshFruitJuice_sf.JPG', 'RedirectUrl': None, 'Type': 0, 'Rating': 99}, {'Name': '', 'Description': None, 'Image': 'https://ewr1.vultrobjects.com/hawkerpedia/hawker-centre-manually/Holland Village Mkt _ FC (Near HV MRT) (277700)/88HollandVillageFreshFruitJuice_m1.JPG', 'RedirectUrl': None, 'Type': 0, 'Rating': 99}]",
            "id": 5237,
            "latitude_hc": 1.311102033,
            "longitude_hc": 103.7949448,
            "name": "Holland Village Fresh Fruit Juice",
            "neighbourhood": "Ardmore, Bukit Timah, Holland Road, Tanglin",
            "noofrating": 10,
            "operationhours": null,
            "originalcommunityrating": 67,
            "photourl": "http://www.nea.gov.sg/images/default-source/Hawker-Centres-Division/resize_1267415509849.jpg",
            "q1_cleaningenddate": "14/3/22",
            "q1_cleaningstartdate": "14/3/22",
            "q2_cleaningenddate": "6/6/22",
            "q2_cleaningstartdate": "6/6/22",
            "q3_cleaningenddate": "14/9/22",
            "q3_cleaningstartdate": "12/9/22",
            "q4_cleaningenddate": "5/12/22",
            "q4_cleaningstartdate": "5/12/22",
            "rating": 73,
            "thumbnail": "https://oss.hawkerpedia.com.sg/hawkerpedia/hawker-centre-manually/Holland Village Mkt _ FC (Near HV MRT) (277700)/88HollandVillageFreshFruitJuice_sf.JPG",
            "unitno": "01-25"
          },
          {
            "communityrating": 75,
            "foodcategories": "['Fruits & Juices', 'Beverages']",
            "hawkercentrename": "Adam Road Food Centre",
            "highlightitems": "[{'Name': 'Fruits', 'Description': None, 'Image': '', 'RedirectUrl': None, 'Type': 1, 'Rating': 99}, {'Name': 'Beverages', 'Description': None, 'Image': '', 'RedirectUrl': None, 'Type': 1, 'Rating': 99}, {'Name': '', 'Description': None, 'Image': 'https://ewr1.vultrobjects.com/hawkerpedia/hawker-centre-manually/Adam Road /fruitopia_sf.JPG', 'RedirectUrl': None, 'Type': 0, 'Rating': 99}]",
            "id": 5270,
            "latitude_hc": 1.324131966,
            "longitude_hc": 103.8141632,
            "name": "Fruitopia",
            "neighbourhood": "Watten Estate, Novena, Thomson",
            "noofrating": 0,
            "operationhours": "Mon - Sun: 10.45am - 10.45pm",
            "originalcommunityrating": 0,
            "photourl": "http://www.nea.gov.sg/images/default-source/Hawker-Centres-Division/resize_1267437914368.jpg",
            "q1_cleaningenddate": "7/3/22",
            "q1_cleaningstartdate": "7/3/22",
            "q2_cleaningenddate": "2/6/22",
            "q2_cleaningstartdate": "2/6/22",
            "q3_cleaningenddate": "1/9/22",
            "q3_cleaningstartdate": "1/9/22",
            "q4_cleaningenddate": "6/12/22",
            "q4_cleaningstartdate": "5/12/22",
            "rating": 67,
            "thumbnail": "https://oss.hawkerpedia.com.sg/hawkerpedia/hawker-centre-manually/Adam Road /fruitopia_sf.JPG",
            "unitno": "01-29"
          },
          {
            "communityrating": 0,
            "foodcategories": "['Fruits & Juices', 'Beverages']",
            "hawkercentrename": "Adam Road Food Centre",
            "highlightitems": "[{'Name': 'Fruits', 'Description': None, 'Image': '', 'RedirectUrl': None, 'Type': 1, 'Rating': 99}, {'Name': 'Beverages', 'Description': None, 'Image': '', 'RedirectUrl': None, 'Type': 1, 'Rating': 99}, {'Name': '', 'Description': '', 'Image': 'https://ewr1.vultrobjects.com/hawkerpedia/highlight-item/20201123/wvvPflRXVy7C_hWELm5x7ZQOn_StewartFruitJuice_sf.JPG', 'RedirectUrl': '', 'Type': 0, 'Rating': 99}]",
            "id": 5280,
            "latitude_hc": 1.324131966,
            "longitude_hc": 103.8141632,
            "name": "Stewart Fruit Juice",
            "neighbourhood": "Watten Estate, Novena, Thomson",
            "noofrating": 13,
            "operationhours": null,
            "originalcommunityrating": 78,
            "photourl": "http://www.nea.gov.sg/images/default-source/Hawker-Centres-Division/resize_1267437914368.jpg",
            "q1_cleaningenddate": "7/3/22",
            "q1_cleaningstartdate": "7/3/22",
            "q2_cleaningenddate": "2/6/22",
            "q2_cleaningstartdate": "2/6/22",
            "q3_cleaningenddate": "1/9/22",
            "q3_cleaningstartdate": "1/9/22",
            "q4_cleaningenddate": "6/12/22",
            "q4_cleaningstartdate": "5/12/22",
            "rating": 67,
            "thumbnail": "https://oss.hawkerpedia.com.sg/hawkerpedia/highlight-item/20201123/wvvPflRXVy7C_hWELm5x7ZQOn_StewartFruitJuice_sf.JPG",
            "unitno": "01-28"
          },
          {
            "communityrating": 0,
            "foodcategories": "['Beverages']",
            "hawkercentrename": "Bedok Food Centre",
            "highlightitems": "[{'Name': 'Beverages', 'Description': None, 'Image': '', 'RedirectUrl': None, 'Type': 1, 'Rating': 99}, {'Name': '', 'Description': None, 'Image': 'https://ewr1.vultrobjects.com/hawkerpedia/hawker-centre-manually/Bedok Food Centre/fruitz_sf.jpg', 'RedirectUrl': None, 'Type': 0, 'Rating': 99}]",
            "id": 5301,
            "latitude_hc": 1.320353031,
            "longitude_hc": 103.9554749,
            "name": "Fruitz Dessert",
            "neighbourhood": "Bedok, Upper East Coast, Eastwood, Kew Drive",
            "noofrating": 7,
            "operationhours": null,
            "originalcommunityrating": 70,
            "photourl": "http://www.nea.gov.sg/images/default-source/Hawker-Centres-Division/resize_1265176030572.jpg",
            "q1_cleaningenddate": "14/3/22",
            "q1_cleaningstartdate": "14/3/22",
            "q2_cleaningenddate": "14/6/22",
            "q2_cleaningstartdate": "13/6/22",
            "q3_cleaningenddate": "5/9/22",
            "q3_cleaningstartdate": "5/9/22",
            "q4_cleaningenddate": "14/12/22",
            "q4_cleaningstartdate": "12/12/22",
            "rating": 0,
            "thumbnail": "https://oss.hawkerpedia.com.sg/hawkerpedia/hawker-centre-manually/Bedok Food Centre/fruitz_sf.jpg",
            "unitno": "01-13"
          },
           {
            "communityrating": 70,
            "foodcategories": "['Beverages']",
            "hawkercentrename": "Bukit Timah Market",
            "highlightitems": "[{'Name': 'Beverages', 'Description': None, 'Image': '', 'RedirectUrl': None, 'Type': 1, 'Rating': 99}, {'Name': '', 'Description': '', 'Image': 'https://ewr1.vultrobjects.com/hawkerpedia/highlight-item/20201123/Sj2pkPmuH3kN_NaJvE8J2iC2i_freshfruitjuicesugarcane_m1.JPG', 'RedirectUrl': '', 'Type': 0, 'Rating': 99}]",
            "id": 5399,
            "latitude_hc": 1.339645028,
            "longitude_hc": 103.7758026,
            "name": "Fresh Fruit Juice & Sugar Cane Juice",
            "neighbourhood": "Upper Bukit Timah, Clementi Park, Ulu Pandan",
            "noofrating": 12,
            "operationhours": null,
            "originalcommunityrating": 70,
            "photourl": "http://www.nea.gov.sg/images/default-source/Hawker-Centres-Division/resize_1265176195262.jpg",
            "q1_cleaningenddate": "21/2/22",
            "q1_cleaningstartdate": "21/2/22",
            "q2_cleaningenddate": "25/5/22",
            "q2_cleaningstartdate": "23/5/22",
            "q3_cleaningenddate": "29/8/22",
            "q3_cleaningstartdate": "29/8/22",
            "q4_cleaningenddate": "28/11/22",
            "q4_cleaningstartdate": "28/11/22",
            "rating": 0,
            "thumbnail": "https://oss.hawkerpedia.com.sg/hawkerpedia/highlight-item/20201123/Sj2pkPmuH3kN_NaJvE8J2iC2i_freshfruitjuicesugarcane_m1.JPG",
            "unitno": "02-150"
          },
           {
            "communityrating": 0,
            "foodcategories": "['Beverages']",
            "hawkercentrename": "Bukit Timah Market",
            "highlightitems": "[{'Name': 'Beverages', 'Description': None, 'Image': '', 'RedirectUrl': None, 'Type': 1, 'Rating': 99}, {'Name': '', 'Description': '', 'Image': 'https://ewr1.vultrobjects.com/hawkerpedia/highlight-item/20201123/FUj02sem6lE4_FQ6nA3cJeuVZ_sk_m1.JPG', 'RedirectUrl': '', 'Type': 0, 'Rating': 99}, {'Name': '', 'Description': '', 'Image': 'https://ewr1.vultrobjects.com/hawkerpedia/highlight-item/20201108/fnfPzv0MmDUg_sk_sf.JPG', 'RedirectUrl': '', 'Type': 0, 'Rating': 99}]",
            "id": 5408,
            "latitude_hc": 1.339645028,
            "longitude_hc": 103.7758026,
            "name": "SK Fruit Juice",
            "neighbourhood": "Upper Bukit Timah, Clementi Park, Ulu Pandan",
            "noofrating": 2,
            "operationhours": null,
            "originalcommunityrating": 74,
            "photourl": "http://www.nea.gov.sg/images/default-source/Hawker-Centres-Division/resize_1265176195262.jpg",
            "q1_cleaningenddate": "21/2/22",
            "q2_cleaningenddate": "25/5/22",
            "q2_cleaningstartdate": "23/5/22",
            "q3_cleaningenddate": "29/8/22",
            "q3_cleaningstartdate": "29/8/22",
            "q4_cleaningenddate": "28/11/22",
            "q4_cleaningstartdate": "28/11/22",
            "rating": 0,
            "thumbnail": "https://oss.hawkerpedia.com.sg/hawkerpedia/highlight-item/20201123/FUj02sem6lE4_FQ6nA3cJeuVZ_sk_m1.JPG",
            "unitno": "02-154"
            }];
          
      //console.log(json)

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