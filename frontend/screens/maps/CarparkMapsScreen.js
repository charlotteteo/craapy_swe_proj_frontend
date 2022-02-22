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
} from 'react-native';
import {
	Avatar,
	
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import {carpark} from "./carpark";

import { carparksavailable } from '../../assets/carparksavailability';
import MapView,  { MAP_TYPES, PROVIDER_DEFAULT } from 'react-native-maps';

import RBSheet from "react-native-raw-bottom-sheet";
import { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 1.290270;
const LONGITUDE = 103.851959;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const array = [
  {
    key: '1',
    title: 'example title 1',
    subtitle: 'example subtitle 1',
  },
  {
    key: '2',
    title: 'example title 2',
    subtitle: 'example subtitle 2',
  },
  {
    key: '3',
    title: 'example title 3',
    subtitle: 'example subtitle 3',
  },
];

const list = () => {
  return carparksavailable.map((element) => {
    return (
      
        	<TouchableOpacity	onPress={() => {
            // should be able to change the map view not implemented
          }}>

          <Card style={{ marginBottom: 10 }}>
					<Card.Content>
              {/* <View key={element.key} style={{margin: 10}}> */}
                <Text style={[ {fontWeight: 'bold',fontSize: 20}]}>
                  {element.title}
                  </Text>
                <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Lots Available: {element.lotsavail}</Text>
          </Card.Content>


</Card>
          </TouchableOpacity>
    
    );
  });
};

const CarparkMapsScreen= () =>{

   
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
          provider={PROVIDER_DEFAULT}
          mapType={MAP_TYPES.STANDARD}
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
            {/* onRegionChangeComplete={(region) => setRegion(region)} */}
            {/* <Marker coordinate={state.region} /> */}
    
              </MapView>
        <SafeAreaView style={{ flex: 1, justifyContent: "bottom", alignItems: "center" }}>
        <Button title="Show all Carparks" onPress={() => this.RBSheet.open() } />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
        
         <ScrollView>{list()}</ScrollView>
        </RBSheet>
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = CarparkMapsScreen;