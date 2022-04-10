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
import HomeScreen from "../home/HomeScreen";
import InfoScreen from "../InfoScreen";
import HawkerMapsResultsScreen from "../HawkerMapsResultsScreen";
import {
	Avatar,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import moment from 'moment';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as WebBrowser from 'expo-web-browser';
import { hawkerclosure } from '../../assets/HawkerClosure';
import MapView,  { MAP_TYPES, PROVIDER_DEFAULT,PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Marker } from 'react-native-maps';
import { Modalize } from 'react-native-modalize';
import CarparkInfoScreen from './CarparkInfoScreen'
import { TransitionPresets } from '@react-navigation/stack';
import EmailScreen from "../help/EmailScreen";
import { EvilIcons } from '@expo/vector-icons';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE =  1.3109708;
const LONGITUDE = 103.7861198;
const LATITUDE_DELTA = 0.0922;

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

/**
 * Mark coordinates for each location
 * @Method markers
 * @returns marker object
 */
const markers =() => {
  return hawkerclosure.map((element) => {
    return(
      <Marker coordinate = {{latitude: element.Coordinates.latitude,longitude: element.Coordinates.longitude} }/>
    );
  });
};

/**
 * Hawker Maps contains all hawker centres in Singapore marked on map and list of all hawker centres and their respective closure dates.
 * @Class HawkerMapsScreen
 * @param {*} navigation 
 */

function HawkerMapsScreen ({navigation}){

const checkOpen=(start,end)=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    // return date + '/' + month + '/' + year;
    if (start!=""){
      start_date=parseInt(start.split("/")[0])
      start_month=parseInt(start.split("/")[1])
      end_date=parseInt(end.split("/")[0])
      end_month=parseInt(end.split("/")[1])
      console.log(start_date,start_month,end_date,end_month)

      
      if (month<start_month){
        return true
      }else{
        if (month==start_month){
          if (date>=start_date && date <=end_date){
    
            return false
          }else{
            return true
          }
        }else{
          if (month!=start_month && date <=end_date){
            return false
          }else{
            return true
          }
        }
        
      }

    }else{
      return true
    }







}
/**
* Returns card frontend design for each element
 * @Method list
 * @return card content for each element in data
 */

const list = () => {
    return hawkerclosure.map((element) => {
      _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync(element.Address);
      };
        if (checkOpen(element.q2_cleaningstartdate,element.q2_cleaningenddate)){
      
        return (
        
          <TouchableOpacity	

          onPress={() => {

               console.log(element.Name)
               navigation.navigate("HawkerResults",{path:element.Name})
            // navigation.navigate("Results")
          }
  
     
          }
        >
         <SafeAreaView>
         <Card style={{ marginBottom: 10,backgroundColor:"#FFF2D6",width:350, borderRadius:10 }}>
                  <Card.Content>
              
              <Text style={[ {fontWeight: 'bold',fontSize: 20,textAlign: 'center',}]}>
                {element.Name}
            
                  </Text>
                  <Text></Text>
              <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'rgb(142,142,147)'}]}>
                Hawker Centre Closure:
                </Text>
             <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'rgb(142,142,147)'}]}>
                {element.q2_cleaningstartdate} to {element.q2_cleaningenddate}
        
                  </Text>
                  <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'rgb(142,142,147)'}]}>
               OPEN TODAY
        
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
      }else{

      


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
             <Card style={{ marginBottom: 10,backgroundColor:"#FFF2D6",width:350 }}>
                      <Card.Content>
                  
                  <Text style={[ {fontWeight: 'bold',fontSize: 20,textAlign: 'center',}]}>
                    {element.Name}
                
                      </Text>
                      <Text></Text>
                  <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'#c2c2c2'}]}>
                    Hawker Centre Closure:
                    </Text>
                 <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'#c2c2c2'}]}>
                    {element.q2_cleaningstartdate} to {element.q2_cleaningenddate}
            
                      </Text>
                      <Text style={[ {fontWeight: 'bold',fontSize: 15,textAlign: 'center',color:'#c2c2c2'}]}>
            CLOSED TODAY
        
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
      
      );}});}
    
  

   
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
      <EvilIcons name="navicon" size={30} color="white" />
      </TouchableOpacity>

      <Modalize ref={modalizeRef}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          snapPoint={400}
          modalHeight={650}
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
          handlePosition="inside"
   
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
/**
 * Stacking of Screens
 * @Method homestack
 */
export default function homestack() {
	return (
    // <NavigationContainer>
      <Stack.Navigator headerMode="none">    
        <Stack.Screen name="Maps" component={HawkerMapsScreen} 
                        options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>
        <Stack.Screen name="Home" component={HomeScreen}
                        options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>
        <Stack.Screen name="HawkerMapsScreen" component={HawkerMapsScreen} 
                        options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/>        
        {/* <Stack.Screen name="Results" component={EmailScreen} />       */}
        <Stack.Screen name="HawkerResults" component={HawkerMapsResultsScreen} 
            //initialParams={{path:element.Name}}  

                        options={{
                         // headerBackTitleVisible:false,
                         // headerTitle:false,
                         // headerTransparent:true,
                          headerTintColor:'#fff',
                          ...TransitionPresets.ModalSlideFromBottomIOS
                          
                      }}/>      
        {/* <Stack.Screen name="InfoScreen" component={InfoScreen} /> */}
        {/* <Stack.Screen name="CarparkInfoScreen" component={CarparkInfoScreen} 
                        options={{
                          headerBackTitleVisible:false,
                          headerTitle:false,
                          headerTransparent:true,
                          headerTintColor:'#fff'
                      }}/> */}
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
    top:95,
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
    height:95,
    //top:50,
    //alignSelf: "flex-start",
    //justifyContent: "flex-start",
    position: "relative",
    //borderColor: "black",
    //borderWidth: 5,
    marginBottom: 0,
    backgroundColor:"white",
    shadowOpacity: 1,
    shadowRadius: 6,
  
    elevation: 6,
    zIndex:5
},
headerText:{
  color:"black",
  fontSize: 25,
  fontWeight:"bold",
  flexDirection: "column",
  alignSelf:"center",
  marginTop: 50,
  marginBottom: 0,
  fontFamily:"OpenSansBold",

},
test:{
  flex: 1, 
  justifyContent: "flex-end",
  alignItems: "flex-end",
 //borderColor:"blue",
 //borderWidth:10
},
buttoncarpark:{
  backgroundColor: "#fec241",
  marginBottom: 80,
  borderRadius:30,
  padding:10,
  paddingTop:12,
  paddingBottom:12,
  opacity:0.9,
  left:150

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
  fontFamily:"SFBlack",
  fontWeight:"bold",
  fontSize: 25,
  alignSelf:"center",
  marginBottom:5,
  padding:5,
  marginTop:20,
  marginBottom:5
},
headercontainer:{
  position:"absolute",
  top:0,
  backgroundColor:"white",
  width:"100%",
  height:95,
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

// module.exports = HawkerMapsScreen;