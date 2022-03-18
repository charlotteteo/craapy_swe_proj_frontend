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

              onPress={() => 
                navigation.navigate("Results",{path:element.name})
      
         
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
                              <ImageBackground style={styles.background} source={require('../../assets/yellowbackground.jpg')} resizeMode="cover">      
                <Text style={styles.headerText}>Hawker Map</Text>
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
    <NavigationContainer>
      <Stack.Navigator headerMode="float">
        <Stack.Screen name="Home" component={HomeScreenCopy}/>
       <Stack.Screen name="HawkerMaps" component={HawkerMaps} />
    <Stack.Screen name="Results" component={ResultsScreen}  />      
    <Stack.Screen name="InfoScreen" component={InfoScreen} />
		
		  </Stack.Navigator>
    </NavigationContainer>
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

module.exports = HawkerMaps;