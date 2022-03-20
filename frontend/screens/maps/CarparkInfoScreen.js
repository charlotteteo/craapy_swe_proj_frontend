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
     
      return (
        <View style={styles.container}>
              <View style={styles.headercontainer}>
                <Text style={styles.headerText}>Carpark Info</Text>
              </View>
            <View style={styles.content}>
                <Title style={{fontWeight: 'bold',fontSize: 20,color:"black", alignSelf:"center", textAlign:"center"}}>{carpark[0].address}</Title>
            </View>

        <SafeAreaView style={styles.cardcontainer}>
              <Card>
                <Text style={styles.paragraph}>
                  Available Slots:
                </Text>
              </Card>
        </SafeAreaView>

            <Card style={{ marginBottom: 10 }}>
                <Card.Content>
                {/* <View key={element.key} style={{margin: 10}}> */}
                  <Text style={[ {fontWeight: 'bold',fontSize: 20}]}>
                    {carpark[0].name}
                    </Text>
                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Address:{carpark[0].address}</Text>

                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Operation Hours:{carpark[0].operationhours}</Text>

                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Food Categories:{carpark[0].foodcategories}</Text>

               </Card.Content>
            </Card>

            </View>
        
      );
    //});
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

const styles = StyleSheet.create({
  container:{
    //backgroundColor:"white",
    borderColor:"red",
    borderWidth:5
  },
  headercontainer:{
    backgroundColor:"white",
    width:"100%",
    height:"28%",
    marginBottom:0,
    borderColor:"blue",
    borderWidth:5

  },
  headerText:{
    color:"black",
    fontSize: 24,
    fontWeight:"bold",
    flexDirection: "column",
    alignSelf:"center",
    marginTop:20,
    marginBottom: 0
},
content:{
  position:"relative",
  borderColor:"green",
  borderWidth:5
},
cardcontainer:{
  flex: 1,
  justifyContent: 'center',
  padding: 20,
  backgroundColor: '#ecf0f1',
},
paragraph:{
  fontWeight:"bold",
  fontSize:16
}
});

module.exports=CarparkInfoScreen;