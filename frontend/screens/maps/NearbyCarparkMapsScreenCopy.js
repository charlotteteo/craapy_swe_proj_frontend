// import React,{Component, useRef,useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Dimensions,
//  Button,
//  SafeAreaView,
//  ScrollView,
//  TouchableOpacity,
//  Pressable,
//  ImageBackground,
//  Alert
// } from 'react-native';

// import {
// 	Avatar,
	
// 	Card,
// 	Title,
// 	Paragraph,
// 	IconButton,
// } from "react-native-paper";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
// import * as WebBrowser from 'expo-web-browser';
// import { carparksavailable } from '../../assets/carparksavailability';
// import MapView,  { MAP_TYPES, PROVIDER_DEFAULT,PROVIDER_GOOGLE } from 'react-native-maps';
// import { MaterialIcons } from "@expo/vector-icons";
// import RBSheet from "react-native-raw-bottom-sheet";
// import { Marker } from 'react-native-maps';
// import { Modalize } from 'react-native-modalize';
// import Geolocation from "@react-native-community/geolocation";
// const { width, height } = Dimensions.get('window');

// const ASPECT_RATIO = width / height;
// const LATITUDE =  1.3109708;
// const LONGITUDE = 103.7861198;
// const LATITUDE_DELTA = 0.0922;

// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// const [
//   currentLongitude,
//   setCurrentLongitude
// ] = useState('...');
// const [
//   currentLatitude,
//   setCurrentLatitude
// ] = useState('...');
// const [
//   locationStatus,
//   setLocationStatus
// ] = useState('');

// useEffect(() => {
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'ios') {
//       getOneTimeLocation();
//       subscribeLocationLocation();
//     } else {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Access Required',
//             message: 'This App needs to Access your location',
//           },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           //To Check, If Permission is granted
//           getOneTimeLocation();
//           subscribeLocationLocation();
//         } else {
//           setLocationStatus('Permission Denied');
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     }
//   };
//   requestLocationPermission();
//   return () => {
//     Geolocation.clearWatch(watchID);
//   };
// }, []);

// const getOneTimeLocation = () => {
//   setLocationStatus('Getting Location ...');
//   Geolocation.getCurrentPosition(
//     //Will give you the current location
//     (position) => {
//       setLocationStatus('You are Here');

//       //getting the Longitude from the location json
//       const currentLongitude = 
//         JSON.stringify(position.coords.longitude);

//       //getting the Latitude from the location json
//       const currentLatitude = 
//         JSON.stringify(position.coords.latitude);

//       //Setting Longitude state
//       setCurrentLongitude(currentLongitude);
      
//       //Setting Longitude state
//       setCurrentLatitude(currentLatitude);
//     },
//     (error) => {
//       setLocationStatus(error.message);
//     },
//     {
//       enableHighAccuracy: false,
//       timeout: 30000,
//       maximumAge: 1000
//     },
//   );
// };

// function CarparkMapsScreen ({navigation}){
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const modalizeRef = useRef(null);
//   const onOpen = () => {
//     modalizeRef.current?.open();}
//   const getMovies = async () => {
//      try {
//       const response = await fetch('http://localhost:8080/carparkcodes');
//       const json = await response.json();

//       setData(json);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getMovies();
//   }, []);



// const markers =() => {
//   return data.map((element) => {
//     return(
//       <Marker coordinate = {{latitude: element.latitude,longitude: element.longitude} }/>
//     );
//   });
// };






//   const list = () => {
   
//     return data.map((element) => {
    
//       const address= 'https://www.google.com/maps?saddr=My+Location&daddr='+element.latitude+','+element.longitude
//       _handleOpenWithWebBrowser = () => {
//         WebBrowser.openBrowserAsync(address);
//       };

//       return (
        
//               <TouchableOpacity	onPress={() => {
//                 // navigation.navigate("NearbyCarpark",{path:element.car_park_no,})
                
//             }}>

           
//             <Card style={{ marginBottom: 10 }}>
//                       <Card.Content>
//                 {/* <View key={element.key} style={{margin: 10}}> */}
//                   {/* <Text style={[ {fontWeight: 'bold',fontSize: 20}]}>
//                     {element.name}
//                     </Text> */}
//                   <Text style={[ {fontWeight: 'bold',fontSize: 20,textAlign: 'center',}]}>{element.address}</Text>

//                   <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',}]}>{element.car_park_type}</Text>

//                   <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',}]}>Free Parking: {element.free_parking}</Text>

//             </Card.Content>
//             <View style={{alignItems:"center"}}>
//             <Pressable style={styles.button_box} onPress={this._handleOpenWithWebBrowser}>
//             <View style={{alignItems:"center"}}>
//         <Text style={styles.text}>Open on Google Maps</Text>
//         </View>
//       </Pressable>
//       </View>
  
//   </Card>
//             </TouchableOpacity>
        
//       );
//     });
//   };


//   return (
//     <View style={styles.container}>
//                     <ImageBackground style={styles.background} source={require('../../assets/Background.png')} resizeMode="cover">      
//               <Text style={styles.headerText}>Carpark Map</Text>
//           </ImageBackground>     
//       {/* <MapView
//               initialRegion={{
//               latitude: LATITUDE,
//               longitude: LONGITUDE,
//               latitudeDelta: LATITUDE_DELTA,
//               longitudeDelta: LONGITUDE_DELTA,
//               }}
//           > */}
//           <MapView
//           showsUserLocation={true}
//         provider={PROVIDER_DEFAULT}
     
//         style={styles.map}
//         initialRegion={{
//           latitude: {currentLatitude},
//           longitude: {currentLongitude},
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
        
//         }}
                        
                      
                       
//       >
//         <MapView.UrlTile
//           urlTemplate="https://maps-a.onemap.sg/v3/Default/{z}/{x}/{y}.png"
//           zIndex={-1}
//         />
         
     
          
        
//           {data.map((element) => (
//         <MapView.Marker 
//         // FORMAT coordinate: {
//         //   latitude: 1.342339,
//         //   longitude: 103.7742345,
//         //   }
//           coordinate = {{latitude: element.latitude,longitude: element.longitude} }
//           title={element.title} 
//           onPress={() => Alert.alert(
//             element.Name,
//             "Route in Google Maps",
//             [
              
//               {
//                 text: "No",
//                 onPress: () => console.log("Cancel Pressed"),
//                 style: "cancel"
//               },
//               {
//                 text: "Yes",
//                 onPress: () => WebBrowser.openBrowserAsync(element.Address)
//               }
//             ]
//             )
              
              
              
//               }
//               />
//             ))}
                 
       

//             </MapView>
//       <SafeAreaView style={styles.test}>
//       <>
//     <TouchableOpacity style={styles.buttoncarpark} onPress={onOpen}>
//       <Text style={styles.Buttontext}>Show all Carparks</Text>
//     </TouchableOpacity>

//     <Modalize ref={modalizeRef}
//         scrollViewProps={{ showsVerticalScrollIndicator: true }}
//         snapPoint={400}
//         modalStyle={styles.modalcontainer}
//         HeaderComponent={
//           <View>
//             <Text style={styles.ModalHeadertext}>All Carparks</Text>
//           </View>
//         }
//         //withHandle={false}
//         //adjustToContentHeight={true}
//         >
//         <ScrollView horizontal={false} >{list()}</ScrollView>
//       </Modalize>
//   </>

//     </SafeAreaView>
//           {/* <Text>Custom Tiles</Text> */}
     
//     </View>
//   );

// }


















// // MapsScreen.propTypes = {
// //   provider: MapView.ProviderPropType,
// // };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     position: 'absolute',
//     top:80,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
  
//   latlng: {
//     width: 200,
//     alignItems: 'stretch',
//   },
//   button: {
//     // flexDirection: 'row',
//     width: 100,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   button_box: {

//     padding: 6,
//     height: 45,
//     width: 250,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     elevation: 5,
//     justifyContent: 'center',
//     paddingVertical: 5,
//     paddingHorizontal: 8,
//     borderRadius: 2,
//     elevation: 3,
//     backgroundColor: '#ffbe30',
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'white',
//     alignItems:"center"
//   },
//   background:{
//     width:"110%",
//     height:80,
//     //top:50,
//     //alignSelf: "flex-start",
//     //justifyContent: "flex-start",
//     position: "relative",
//     //borderColor: "black",
//     //borderWidth: 5,
//     marginBottom: 0
// },
// headerText:{
//     color:"white",
//     fontSize: 28,
//     fontWeight:"bold",
//     flexDirection: "column",
//     alignSelf:"center",
//     marginTop: 30
// },
// test:{
//   flex: 1, 
//   justifyContent: "flex-end",
//   alignItems: "center",
//  //borderColor:"blue",
//  //borderWidth:10
// },
// buttoncarpark:{
//   borderColor:"grey",
//   borderWidth:1,
//   backgroundColor: "#F3F3F3",
//   marginBottom: 10,
//   borderRadius:20,
//   opacity: 0.7

// },
// Buttontext:{
//   fontWeight:"bold",
//   fontSize: 15,
//   padding:15
// },
// modalcontainer:{
//   //borderWidth:5,
//   //borderColor: "blue",
//   height:100,
//   width:400,
//   marginRight:0,
//   alignSelf:"center",
//   alignItems:"center",
//   shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 3,
// },
// shadowOpacity: 0.27,
// shadowRadius: 4.65,

// elevation: 6,

// },
// ModalHeadertext:{
//   fontWeight:"bold",
//   fontSize: 25,
//   alignSelf:"center",
//   marginBottom:5,
//   padding:5
// }
// });



// const Stack = createStackNavigator();

// export default function homestack() {
// 	return (
//     <NavigationContainer>
// 		  <Stack.Navigator headerMode="float">
    

       

//         <Stack.Screen name="CarparkInfoScreen" component={ResultsScreen}       
//                 options={{
//                           headerBackTitleVisible:false,
//                           headerTitle:false,
//                           headerTransparent:true,
//                           headerTintColor:'#fff'
//                       }}/>  
// 		  </Stack.Navigator>
//     </NavigationContainer>
// 	);
// }

// module.exports = CarparkMapsScreen;