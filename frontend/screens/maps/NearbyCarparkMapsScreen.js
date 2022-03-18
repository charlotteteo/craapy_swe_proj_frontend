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
import InfoScreen from "../InfoScreen";

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



function NearbyCarparkMapsScreen ({navigation,route}){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const modalizeRef = useRef(null);
  console.log(route.params)
  const {latitude,longitude}=route.params;
  console.log(latitude,longitude)

  const LATITUDE =  latitude;
  const LONGITUDE = longitude;
  const onOpen = () => {
    modalizeRef.current?.open();}

    const getMovies = async () => {
       try {
        // const response=await fetch('http://localhost:8080/getcarparkinfo/ 1.313349962/103.7645874')
        const response = await fetch('http://localhost:8080/getcarparkinfo/'+latitude+ "/"+longitude);
        const json = await response.json();

        setData(json);
        console.log(data)
  
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
            
            break
          }
        }
        obj.address= 'https://www.google.com/maps?saddr=My+Location&daddr='+obj.latitude+','+obj.longitude
        _handleOpenWithWebBrowser = () => {
          WebBrowser.openBrowserAsync(obj.address);
        };
        
  
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
    
    
    

              <View style={{alignItems:"center"}}>
            <Pressable style={styles.button_box} onPress={this._handleOpenWithWebBrowser}>
            <View style={{alignItems:"center"}}>
        <Text style={styles.text}>Open on Google Maps</Text>
        </View>
     
      </Pressable>
      </View>
      </Card>
    


              </TouchableOpacity>
          
        );
      });
    };
    const  maps= () =>{
      
      return Object.keys(data).map(key => {
        console.log(key,data[key])
        if (data[key]==null){
          data[key]={"totalLots":277,"lotType":"C","lotsAvailable":20}
        }
        let obj = data[key];
          obj.keyName = key;
    
      
          
          for (const item of carparksavailable) {
            if (item.car_park_no === key) {
              obj.name=item.address
              obj.latitude=item.Coordinates.latitude
              obj.longitude=item.Coordinates.longitude
              break
            }
          }
          obj.address= 'https://www.google.com/maps?saddr=My+Location&daddr='+obj.latitude+','+obj.longitude
          _handleOpenWithWebBrowser = () => {
            WebBrowser.openBrowserAsync(address);
          };
    
          // console.log(response1)
          return (
            
            <MapView.Marker 
            coordinate = {{latitude: obj.latitude,longitude: obj.longitude} }
            
            
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
                  onPress: () => WebBrowser.openBrowserAsync(obj.address)
                }
              ]
              )
                
                
                
                }/>
            
          );
        
        
        
        
    })};


  return (
    <View style={styles.container}>
                    <ImageBackground style={styles.background} source={require('../../assets/yellowbackground.jpg')} resizeMode="cover">      
              <Text style={styles.headerText}>Nearby Carparks Map</Text>
          </ImageBackground>     


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
         
          
         <MapView.Marker 
            coordinate = {{latitude: latitude,longitude: longitude}} 
            pinColor={"#FFc166"}
            title={"DESTINATION"} />
            
     
          
       {maps()}
       

            </MapView>
      <SafeAreaView style={styles.test}>
      <>
    <TouchableOpacity style={styles.buttoncarpark} onPress={onOpen}>
      <Text style={styles.Buttontext}>Show all Carparks</Text>

    </TouchableOpacity>

    <Modalize ref={modalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={400}
        modalStyle={styles.modalcontainer}
        HeaderComponent={
          <View>
            <Text style={styles.ModalHeadertext}>Nearby Carparks</Text>
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
    width: 250,
    // justifyContent: 'center',
    // alignItems: 'center',
    elevation: 5,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 2,
    elevation: 3,
    backgroundColor: '#ffbe30',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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
    fontSize: 24,
    fontWeight:"bold",
    flexDirection: "column",
    alignSelf:"center",
    marginTop: 30
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
  backgroundColor: "#F3F3F3",
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


const Stack = createStackNavigator();

export default function homestack() {
	return (
    <NavigationContainer>
		  <Stack.Navigator headerMode="float">
    
  
  
        <Stack.Screen name="CarparkInfoScreen" component={ResultsScreen}       
                options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>  

            
      <Stack.Screen name="Info" component={InfoScreen} 
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
		  </Stack.Navigator>
    </NavigationContainer>
	);
}

module.exports = NearbyCarparkMapsScreen;