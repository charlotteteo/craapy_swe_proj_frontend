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
    right:20,
    height:120,
    //top:50,
    //alignSelf: "flex-start",
    //justifyContent: "flex-start",
    bottom:5,
    position: "relative",
    borderColor: "black",
    borderWidth: 5,
    marginBottom: 0,
    backgroundColor:"#fec241"

  },
  headerText:{
    fontFamily: "OpenSansbold",
    //paddingVertical: 10,
    marginTop:40,
    paddingTop: 4,
    paddingBottom:5,
    fontSize: 24,
    alignSelf:"center"
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