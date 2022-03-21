import React, { useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView,ActivityIndicator, FlatList, Text, View , TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
//import SearchScreen from "./home/search/SearchScreen";
//import FilterScreen from "./home/filter/FilterScreen";
import { NavigationContainer } from '@react-navigation/native';
//import InfoScreen from "./InfoScreen";
import CarparkMapsScreen from "./CarparkMapsScreen";
import { carparkresult } from '../../assets/carparkresult';
import {
	Avatar,
	
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";


function CarparkInfoScreen ({ navigation,route }){
  const carpark = carparkresult;
  // console.log("hello1")
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // const {path} = route.params;
  // console.log("hello2")
  // console.log(route.params)
  // console.log("hello3")


  // const getMovies = async () => {
  //    try {
  //     const response = await fetch('http://localhost:8080/carpark/ACB');
  //     const json = await response.json();
  //     console.log(json)
  //     setData(json);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getMovies();
  // }, []);

  const list = () => {
  
    //return data.map((element) => {
     
      // return (

      //       <Card style={{ marginTop:100,marginBottom: 10 }}>
      //           <Card.Content>
      //           {/* <View key={element.key} style={{margin: 10}}> */}
      //             <Text style={[ {fontWeight: 'bold',fontSize: 20}]}>
      //               {carpark[0].name}
      //               </Text>
      //             <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Address:{carpark[0].address}</Text>

      //             <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Operation Hours:{carpark[0].operationhours}</Text>

      //             <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Food Categories:{carpark[0].foodcategories}</Text>

      //          </Card.Content>
      //       </Card>
        
      // );
    //});
  };



  return (


    <View style={styles.container}>
    <View style={styles.headercontainer}>
      <Text style={styles.headerText}>Carpark Info</Text>
    </View>
      <Title style={{fontSize: 20,alignSelf:"center", textAlign:"center", fontFamily:"OpenSansbold", marginTop:10, marginBottom:10}}>{carpark[0].address}</Title>


  <ScrollView style={styles.content}>
<SafeAreaView style={styles.cardcontainer}>
    <Card style={styles.card}>
    <Title style={{fontFamily:"Nunito", color:"black", alignSelf:"center", fontSize:20}}>Available Slots:</Title>
      <Text style={styles.paragraph}>
        28/256
      </Text>
    </Card>
    <Card style={styles.card}>
    <Title style={{fontFamily:"Nunito", color:"black", alignSelf:"center"}}>Free Parking</Title>
      <Text style={styles.paragraph3}>
      SUN & PH FR 7AM-10.30PM
      </Text>
    </Card>
</SafeAreaView>
<Card style={styles.card2}>
  <View style={{margin:10}}>
    <Title style={styles.paragraph2}>Type of Car Park:</Title>
      <Text style={styles.bigcontent}>
      {carparkresult[0].car_park_type}
      </Text>
  </View>
  <View style={{margin:10}}>
      <Title style={styles.paragraph2}>Type of Parking System:</Title>
      <Text style={styles.bigcontent}>
      {carparkresult[0].type_of_parking_system}
      </Text>
  </View>
  <View style={{margin:10}}>
      <Title style={styles.paragraph2}>Short Term Parking:</Title>
      <Text style={styles.bigcontent}>
      {carparkresult[0].car_park_type}
      </Text>
  </View>
  <View style={{margin:10}}>
      <Title style={styles.paragraph2}>Night Parking:</Title>
      <Text style={styles.bigcontent}>
      {carparkresult[0].night_parking}
      </Text>
      </View>
  <View style={{margin:10}}>
      <Title style={styles.paragraph2}>Gantry Height:</Title>
      <Text style={styles.bigcontent}>
      {carparkresult[0].gantry_height}m
      </Text>
      </View>
    </Card>
{list()}
</ScrollView>
</View>



  );
};


const Stack = createStackNavigator();

export default function homestack() {
	return (
		  <Stack.Navigator mode="none">
          <Stack.Screen name="CarparkMapsScreen" component={CarparkMapsScreen}       
        options={{
                  headerBackTitleVisible:false,
                  headerTitle:false,
                  headerTransparent:true,
                  headerTintColor:'black'
              }}/>

        <Stack.Screen name="CarparkInfoScreen" component={ResultsScreen}       
        options={{
                  headerBackTitleVisible:false,
                  headerTitle:false,
                  headerTransparent:true,
                  headerTintColor:'black'
              }}/>
		  </Stack.Navigator>

	);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //alignItems: "center",
    backgroundColor: "#ececec",
  },
  headercontainer:{
    width:"120%",
    right:5,
    bottom:5,
    height:110,
    borderColor: "black",
    borderWidth: 5,
    backgroundColor:"#fec241"

  },
  headerText:{
    fontFamily: "OpenSansbold",
    //paddingVertical: 10,
    right:38,
    marginTop:50,
    paddingTop: 4,
    paddingBottom:0,
    fontSize: 24,
    alignSelf:"center"
},
content:{
  position:"relative",
  // borderColor:"green",
  // borderWidth:5,
  padding:7
},
cardcontainer:{
  flex: 1,
  flexDirection:"row",
  justifyContent: 'space-evenly',
  padding: 20,
  backgroundColor: '#ecf0f1',
  marginBottom:40

},
card:{
  height:100,
  width:160,
  borderRadius:10,
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.4,
  shadowRadius: 3,
  backgroundColor:'#fed274',
  opacity:0.8


},
card2:{
  flexDirection: 'row',
  height:400,
  width:"90%",
  borderRadius:10,
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.5,
  shadowRadius: 3,
  backgroundColor:'white',
  opacity:0.8,
  alignSelf:"center"
},
paragraph:{
  fontWeight:"bold",
  fontSize:28,
  alignSelf:"center",
  marginTop:4,
  fontFamily:"LatoBold",
  color:"black"
},
paragraph3:{
  fontWeight:"bold",
  fontSize:18,
  alignSelf:"center",
  marginTop:3,
  fontFamily:"LatoBold",
},
paragraph2:{
  fontWeight:"bold",
  fontSize:18,
  alignSelf:"center",
  marginTop:3,
  fontFamily:"NunitoBold",
},
bigcontent:{
  fontFamily:"Nunito", 
  color:"black", 
  alignSelf:"center",
  fontSize:16,
  flexShrink: 1 ,
  }
});

module.exports=CarparkInfoScreen;