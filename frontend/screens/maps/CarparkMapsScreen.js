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
 ImageBackground
} from 'react-native';
import {
	Avatar,
	
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import * as WebBrowser from 'expo-web-browser';
import { carparksavailable } from '../../assets/carparksavailability';
import MapView,  { MAP_TYPES, PROVIDER_DEFAULT,PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Marker } from 'react-native-maps';
import { Modalize } from 'react-native-modalize';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE =  1.3109708;
const LONGITUDE = 103.7861198;
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

const markers =() => {
  return carparksavailable.map((element) => {
    return(
      <Marker coordinate = {{latitude: element.latitude,longitude: element.longitude} }/>
    );
  });
};


const list = () => {
  return carparksavailable.map((element) => {
    _handleOpenWithWebBrowser = () => {
      WebBrowser.openBrowserAsync(element.link);
    };
    return (
      
        	<TouchableOpacity	onPress={() => {
            // should be able to change the map view not implemented
          }}>
           <SafeAreaView>
          <Card style={{ marginBottom: 10,width: 350}}>
					<Card.Content>
              {/* <View key={element.key} style={{margin: 10}}> */}
                <Text style={[ {fontSize: 25}]}>
                  {element.title}
                  </Text>
                <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Lots Available: {element.lotsavail}</Text>
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

const CarparkMapsScreen= () =>{
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
   
  return (
      <View style={styles.container}>
                      <ImageBackground style={styles.background} source={require('../../assets/Background.png')} resizeMode="cover">      
                <Text style={styles.headerText}>Carpark Map</Text>
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
           
       
            
          
            {carparksavailable.map((element) => (
          <MapView.Marker 
            coordinate={element.coordinate}
            title={element.title} 
          />
        ))}
            
         

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
    color:"white",
    fontSize: 28,
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

module.exports = CarparkMapsScreen;