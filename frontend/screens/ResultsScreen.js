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

  const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    // return date + '/' + month + '/' + year;
    return '07/03/22'
}



function opennowtime(x){
  // time= new Date().getHours(x);
  time = 21

  try{
  actualhours=x.split(':')[1]
  startinghr=actualhours.split('-')[0].trim()
  endinghr=actualhours.split('-')[1]
 
  

  if (startinghr.includes('pm')){
    startinghr = parseInt(startinghr)
    startinghr = (startinghr) + 12
  }else{
    startinghr = parseInt(startinghr)
  }
  if (endinghr.includes('pm')){
    endinghr = parseInt(endinghr)
    endinghr = (endinghr) + 12
  }else{
    endinghr = parseInt(endinghr)
  }
  console.log("startinghr:",startinghr)
  console.log("endinghr:",endinghr)
  
  time= new Date().getHours()
  if (endinghr>startinghr){
    if ( time>=startinghr && time<=endinghr){
      return true
    }else{
      return false
    }
  
  }else{
// 15 to 3 now is 21
// starting hr higher than ending hr
    if (time>startinghr){
      console.log(x)
      return true
    }else{
      if (time<endinghr){
        return true
      }else{
        return false
      }
    }
  }
}catch{
  if (time>9 && time<21){
    return true
  }else{
    return false
  }

}

}
const checkOpen=(start,end)=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  // return date + '/' + month + '/' + year;
  if (start!=""){
    start_date=parseInt(start.split("/")[0])
    start_month=parseInt(start.split("/")[1])
    end_date=parseInt(end.split("/")[0])
    end_month=parseInt(end.split("/")[1])
    // console.log(start_date,start_month,end_date,end_month)

    
    if (month<start_month){
      return true
    }else{
      if (month==start_month){
        if (date>=start_date && date <=end_date){
  
          return false
        }else{
          return true
        }
      }else{
        if (month!=start_month && date <=end_date){
          return false
        }else{
          return true
        }
      }
      
    }

  }else{
    return true
  }







}
  const list = () => {
  
    return data.map((element) => {
      // console.log(getCurrentDate())
      console.log(element.name,checkOpen(element.q2_cleaningstartdate,element.q2_cleaningenddate),opennowtime(element.operationhours))
      if (checkOpen(element.q2_cleaningstartdate,element.q2_cleaningenddate) && opennowtime(element.operationhours)){
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
              <Text style={[ {fontWeight: 'bold',fontSize: 20 }]}>OPEN NOW</Text>

        </Card.Content>


</Card>
        </TouchableOpacity>
    
  );
      }else{
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
              <Text style={[ {fontWeight: 'bold',fontSize: 20 }]}>CLOSED</Text>

        </Card.Content>


</Card>
        </TouchableOpacity>
    
  );
      }

      
   
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
<Stack.Navigator headerMode="none">
    <Stack.Screen name="ResultsScreen" component={ResultsScreen} 
                    options={{
                      headerBackTitleVisible:false,
                      headerTitle:false,
                      headerTransparent:true,
                      headerTintColor:'#fff'
                  }}/>
    	<Stack.Screen name="InfoScreen" component={InfoScreen} 
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

module.exports=ResultsScreen;