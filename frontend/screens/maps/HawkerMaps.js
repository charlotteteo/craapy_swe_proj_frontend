import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
 Button,
 SafeAreaView,
 ScrollView,
 TouchableOpacity,
 Pressable
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {
	Avatar,
	
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import * as WebBrowser from 'expo-web-browser';
import { hawkercentres } from '../../assets/HawkerCentres';
import MapView,  { MAP_TYPES, PROVIDER_DEFAULT,PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Marker } from 'react-native-maps';
import {HawkerScreen} from "../HawkerScreen";
import kranjifarm from '../kranjifarm';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE =  1.3109708;
const LONGITUDE = 103.7861198;
const LATITUDE_DELTA = 0.0922;

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const markers =() => {
  return hawkercentres.map((element) => {
    return(
      <Marker coordinate = {{latitude: element.latitude,longitude: element.longitude} }/>
    );
  });
};



function HawkerMaps ({navigation}){

const list = () => {
    return hawkercentres.map((element) => {
      _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync(element.link);
      };
      return (
        
              <TouchableOpacity	
              onPress={() => navigation.navigate("Home")}
            >
             <SafeAreaView>
            <Card style={{ marginBottom: 10,width: 350}}>
                      <Card.Content>
                {/* <View key={element.key} style={{margin: 10}}> */}
                  <Text style={[ {fontWeight: 'light',fontSize: 25}]}>
                    {element.title}
                    </Text>
                  <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>
                      Rating: {element.ratings}/5 
                      </Text>
                      <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>
                      Opening Hours: {element.openingHours}
                      </Text>
             
                  <Pressable style={styles.button_box} onPress={this._handleOpenWithWebBrowser}>
        <Text style={styles.text}>Open on Google Maps</Text>
  
      </Pressable>
    
                
            </Card.Content>
  
  
  </Card>
  </SafeAreaView>
  
            </TouchableOpacity>
      
      );
    });
  };
   
  return (
      <View style={styles.container}>
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
          provider={PROVIDER_GOOGLE}
       
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
           
       
            
          
            {hawkercentres.map((element) => (
          <MapView.Marker 
            coordinate={element.coordinate}
            title={element.title} 
          />
        ))}
            
         

              </MapView>
        <SafeAreaView style={{ flex: 1, justifyContent: "bottom", alignItems: "center" }}>
          <Button title="Show all Hawker Centres" onPress={() => this.RBSheet.open() } />
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={300}
            openDuration={300}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                flex:1
              }
            }}
          >
        
            <ScrollView horizontal={false} >{list()}</ScrollView>
          </RBSheet>
      </SafeAreaView>
            {/* <Text>Custom Tiles</Text> */}
         
       
      </View>
    );
  
}

const Stack = createStackNavigator();


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
    top: 0,
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFB899',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

module.exports = HawkerMaps;