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
import WebView from 'react-native-webview';

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

const CarparkMapsScreenCopy= () =>{

   
  return (
      <View style={styles.container}>
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
           <WebView
          source={{html: '<iframe width="980" height="2000" src="https://data.gov.sg/dataset/hawker-centres/resource/c2e33097-4f46-4ef5-91db-64eef290ca85/view/6cda5c46-895d-49ce-9c1c-0ac912365ca6" frameBorder="0"> </iframe>'}}
         
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

module.exports = CarparkMapsScreenCopy;