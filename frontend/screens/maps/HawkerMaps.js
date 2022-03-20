import React,{Component, useRef} from 'react';
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
 Alert,
 ImageBackground
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import ResultsScreen from "../ResultsScreen";
import HomeScreenCopy from "../home/HomeScreenCopy";
import InfoScreen from "../InfoScreen";
import {
	Avatar,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import * as WebBrowser from 'expo-web-browser';
import { hawkerclosure } from '../../assets/HawkerClosure';
import MapView,  { MAP_TYPES, PROVIDER_DEFAULT,PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Marker } from 'react-native-maps';
import { Modalize } from 'react-native-modalize';
import CarparkInfoScreen from '../maps/CarparkInfoScreen'

import EmailScreen from "../help/EmailScreen";

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE =  1.3109708;
const LONGITUDE = 103.7861198;
const LATITUDE_DELTA = 0.0922;

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const markers =() => {
  return hawkerclosure.map((element) => {
    return(
      <Marker coordinate = {{latitude: element.Coordinates.latitude,longitude: element.Coordinates.longitude} }/>
    );
  });
};



function HawkerMaps ({navigation}){

const list = () => {
    return hawkerclosure.map((element) => {
      _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync(element.Address);
      };
      return (
        
              <TouchableOpacity	

              onPress={() => {

                   console.log(element.Name)
                   navigation.navigate("Results",{path:element.Name})
                // navigation.navigate("Results")
              }
      
         
              }
            >
             <SafeAreaView>
             <Card style={{ marginBottom: 10,borderColor:"#FFC30B",borderWidth:1.5,width: 350}}>
                      <Card.Content>
                  
                  <Text style={[ {fontWeight: 'bold',fontSize: 20,textAlign: 'center',}]}>
                    {element.Name}
                
                      </Text>
                      <Text></Text>
                  <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'#c2c2c2'}]}>
                    Hawker Centre Closure:
                    </Text>
                 <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'#c2c2c2'}]}>
                    {element.q1_cleaningstartdate} to {element.q1_cleaningenddate}
            
                      </Text>
                      <Text></Text>
                      <View style={{alignItems:"center"}}>
            <Pressable style={styles.button_box} onPress={this._handleOpenWithWebBrowser}>
            <View style={{alignItems:"center"}}>
        <Text style={styles.text}>Open on Google Maps</Text>
        </View>
      </Pressable>
      </View>
  
                
            </Card.Content>
  
  
  </Card>
  </SafeAreaView>
  
            </TouchableOpacity>
      
      );
    });
  };
   
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
      <View style={styles.container}>
            <View style={styles.background}>      
                <Text style={styles.headerText}>Hawker Map</Text>
            </View>  
        {/* <MapView
                initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
                }}
            > */}
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
           
          
            
         
            {hawkerclosure.map((element) => (
          <MapView.Marker 
            coordinate={element.Coordinates}
            title={element.Name} 
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
        <Text style={styles.Buttontext}>Show all Hawker Centres</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          snapPoint={400}
          modalStyle={styles.modalcontainer}
          HeaderComponent={
            <View>
              <Text style={styles.ModalHeadertext}>All Hawker Centres</Text>
            </View>
          }
          overlayStyle={{
            flex:1,
            position:"relative",
            right:200,
            //justifyContent:"center",
            alignSelf:"center",
            width:1000,
            marginRight:100,
            paddingRight:100,
        
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
          }}
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
    // <NavigationContainer>
      <Stack.Navigator headerMode="none">    
        <Stack.Screen name="Maps" component={HawkerMaps} 
                        options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>
        <Stack.Screen name="Home" component={HomeScreenCopy}
                        options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>
        <Stack.Screen name="HawkerMaps" component={HawkerMaps} 
                        options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>        
        {/* <Stack.Screen name="Results" component={EmailScreen} />       */}
        <Stack.Screen name="Results" component={ResultsScreen} 
            //initialParams={{path:element.Name}}  

                        options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>      
        {/* <Stack.Screen name="InfoScreen" component={InfoScreen} /> */}
        <Stack.Screen name="CarparkInfoScreen" component={CarparkInfoScreen} 
                        options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>
		  </Stack.Navigator>
    // </NavigationContainer>
	);
}

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
    top: 80,
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
  buttonContainer: {
    // flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  button_box: {

    padding: 6,
    height: 45,
    width: 250,
    // justifyContent: 'center',
    // alignItems: 'center',
    elevation: 5,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 2,
    elevation: 3,
    backgroundColor: '#ffde17',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

  background:{
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
}
});

// module.exports = HawkerMaps;