import React,{Component, useRef,useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
 Button,
 SafeAreaView,
 ScrollView,
 TouchableOpacity,
 Pressable,
 ImageBackground,
 Alert
} from 'react-native';

import {
	Avatar,
	
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { carparksavailable } from '../../assets/carparksavailability';
import MapView,  { MAP_TYPES, PROVIDER_DEFAULT,PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Marker } from 'react-native-maps';
import { Modalize } from 'react-native-modalize';
import { reducedcarparksavailable } from '../../assets/reducedcarparksavailability';
import CarparkInfoScreen from "../maps/CarparkInfoScreen";
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE =  1.3109708;
const LONGITUDE = 103.7861198;
const LATITUDE_DELTA = 0.0922;

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


function CarparkMapsScreen ({navigation}){
  // const [isLoading, setLoading] = useState(tßrue);
  // const [data, setData] = useState([]);
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();}
  // const getMovies = async () => {
  //    try {
  //     const response = await fetch('http://localhost:8080/carparkcodes');
  //     const json = await response.json();

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
  const data=reducedcarparksavailable;


const markers =() => {
  return data.map((element) => {
    return(
      <Marker coordinate = {element.Coordinates }/>
    );
  });
};






  const list = () => {
   
    return data.map((element) => {
    
      const address= 'https://www.google.com/maps?saddr=My+Location&daddr='+element.latitude+','+element.longitude
      _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync(address);
      };

      return (
        
              <TouchableOpacity	onPress={() => {
                console.log(element.car_park_no)
                navigation.navigate("CarparkInfoScreen",{path:element.car_park_no})
                
            }}>

           
            <Card style={{ marginBottom: 10,backgroundColor:"#FFF2D6",width:350 }}>
                      <Card.Content>
                {/* <View key={element.key} style={{margin: 10}}> */}
                  {/* <Text style={[ {fontWeight: 'bold',fontSize: 20}]}>
                    {element.name}
                    </Text> */}
                   
                  <Text style={[ {fontWeight: 'bold',fontSize: 20,textAlign: 'center'}]}>{element.address}</Text>
                  <Text></Text>

                  <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'#c2c2c2'}]}>{element.car_park_type}</Text>

                  <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'#c2c2c2'}]}>Free Parking: {element.free_parking}</Text>
<Text></Text>
            </Card.Content>
            <View style={{alignItems:"center"}}>
            <Pressable style={styles.button_box} onPress={this._handleOpenWithWebBrowser}>
            <View style={{alignItems:"center"}}>
        <Text style={styles.text}>Google Maps</Text>
        </View>
      </Pressable>
  
      <Text></Text>
      </View>
  
  </Card>
            </TouchableOpacity>
        
      );
    });
  };


  return (
    <View style={styles.container}>
                    {/* <ImageBackground style={styles.background} source={require('../../assets/yellowbackground.jpg')} resizeMode="cover">      
              <Text style={styles.headerText}>Carpark Map</Text>
          </ImageBackground>      */}
      
        <View style={styles.headercontainer}>
          <Text style={styles.headerText}>Carpark Map</Text>


        </View>
          
          <MapView
          showsUserLocation={true}
        provider={PROVIDER_DEFAULT}
     
        style={styles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        
        }}
                        
                      
                       
      >
        <MapView.UrlTile
          urlTemplate="https://maps-a.onemap.sg/v3/Default/{z}/{x}/{y}.png"
          zIndex={-1}
        />
         
     
          
        
          {data.map((element) => (
        <MapView.Marker 
        // FORMAT coordinate: {
        //   latitude: 1.342339,
        //   longitude: 103.7742345,
        //   }
          coordinate = {element.Coordinates}
          title={element.title} 
          onPress={() => Alert.alert(
            element.Name,
            "Route in Google Maps",
            [
              
              {
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "Yes",
                onPress: () => WebBrowser.openBrowserAsync(element.Address)
              }
            ]
            )
              
              
              
              }
              />
            ))}
                 
       

            </MapView>
      <SafeAreaView style={styles.test}>
      <>
    <TouchableOpacity style={styles.buttoncarpark} onPress={onOpen}>
      <Text style={styles.Buttontext}>Show all Carparks</Text>
    </TouchableOpacity>

    <Modalize ref={modalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: true }}
        snapPoint={400}
        overlayStyle={{
          flex:1,
          position:"relative",
          right:200,
          //justifyContent:"center",
          alignSelf:"center",
          width:1000,
      
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
        }}
        modalStyle={styles.modalcontainer}
        HeaderComponent={
          <View>
            <Text style={styles.ModalHeadertext}>All Carparks</Text>
          </View>
        }
        //withHandle={false}
        //adjustToContentHeight={true}
        >
        <ScrollView horizontal={false} >{list()}</ScrollView>
      </Modalize>
  </>

    </SafeAreaView>
          {/* <Text>Custom Tiles</Text> */}
     
    </View>
  );

}


const Stack = createStackNavigator();

export default function homestack() {
	return (
		  <Stack.Navigator headerMode="none">

        <Stack.Screen name="CarparkInfoScreen" component={CarparkInfoScreen}    
            
                options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'red'
                      }}
                      
                      initialParams={{path:element.car_park_no}} />  
              <Stack.Screen
        name="CarparkMapsScreen"
        component={CarparkMapsScreen}
        options={{
          headerBackTitleVisible:false,
          headerTitle:false,
          headerTransparent:true,
          headerTintColor:'black'
      }}
      />
		  </Stack.Navigator>
	);
}




// MapsScreen.propTypes = {
//   provider: MapView.ProviderPropType,
// };

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top:80,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    // flexDirection: 'row',
    width: 100,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button_box: {

    padding: 6,
    height: 45,
    width: 200,
    // justifyContent: 'center',
    // alignItems: 'center',
    elevation: 5,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#fec241',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    alignItems:"center"
  },
  background:{
    width:"110%",
    height:80,
    //top:50,
    //alignSelf: "flex-start",
    //justifyContent: "flex-start",
    position: "relative",
    //borderColor: "black",
    //borderWidth: 5,
    marginBottom: 0
},
headerText:{
    color:"black",
    fontSize: 22,
    fontWeight:"bold",
    flexDirection: "column",
    alignSelf:"center",
    marginTop: 40,
    marginBottom: 0,
    fontFamily:"OpenSansbold",

},
test:{
  flex: 1, 
  justifyContent: "flex-end",
  alignItems: "center",
 //borderColor:"blue",
 //borderWidth:10
},
buttoncarpark:{
  borderColor:"grey",
  borderWidth:1,
  backgroundColor: "#fec241",
  marginBottom: 10,
  borderRadius:20,
  opacity: 0.7

},
Buttontext:{
  fontWeight:"bold",
  fontFamily:"NunitoBlack",
  fontSize: 15,
  padding:15
},
modalcontainer:{
  //borderWidth:5,
  //borderColor: "blue",
  height:100,
  width:400,
  marginRight:0,
  alignSelf:"center",
  alignItems:"center",
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,

},
ModalHeadertext:{
  fontWeight:"bold",
  fontSize: 25,
  alignSelf:"center",
  marginBottom:5,
  padding:5
},
headercontainer:{
  position:"absolute",
  top:0,
  backgroundColor:"white",
  width:"100%",
  height:80,
  marginBottom:5,
  borderRadius:10,
  shadowOpacity: 1,
  shadowRadius: 6,

  elevation: 6,

  //borderColor:"red",
  //borderWidth:5,
  zIndex:5
}
});

module.exports = CarparkMapsScreen;