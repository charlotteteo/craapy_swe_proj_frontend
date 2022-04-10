import React, {useState,useRef, useEffect,  Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
 Button,
 Image,
 SafeAreaView,
 ScrollView,
 TouchableOpacity,
 Pressable,
 ImageBackground,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import {
  Chip,
	Avatar,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import { FontAwesome5 } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from '@expo/vector-icons';

import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * Hawker information Screen containing food categories, image of stall front, opening hours and how to get there.
 * @Class InfoScreen
 * @param {*} param0 
 * @return
 */

function InfoScreen ({ navigation,route}){
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]); // test can delete later
  const {path}=route.params;
  console.log(path)


  const getMovies = async () => {
     try {
      // const response = await fetch('http://localhost:8080/search/De Sheng Shou Gong Mian Yu Tang');

      const response = await fetch('http://craapy-env.eba-9gpy3v9a.us-east-1.elasticbeanstalk.com/search/'+path);
      const json = await response.json();
  
      
      setData(json);
      
  
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }


    // IF need to reset the history
    /*
      try {
        await AsyncStorage.removeItem('history');
      }
      catch(error) {
          //error;
      }
      */

      // testing HomeScreen. 
    //console.log(top10ratings);
    /*
    var historypath = 'http://localhost:8080/history/Holland V Coffee & Drink/Xiang Jiang Soya Sauce Chicken/Depot Road Zhen Shan Mei Laksa/Hock Kee Fried Kway Teow/Kwang Kee Teochew Fish Porridge/The Sugarcane Plant/Ma Bo/Teck Kee Hot & Cold Dessert/Ramen Taisho/Kwang Kee Teochew Fish Porridge';
    try {
      var response = await fetch(historypath);
      const json2 = await response.json();   
      console.log(historypath)    
      setData2(json2);
      console.log("hello1")
      console.log(data)
      console.log("hello")
      
      console.log(data2);
      console.log("helloend")
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(false);
    }*/
    


    try {
      var jsonString = await AsyncStorage.getItem('history');
      if (jsonString == null) {
        // We INITIALIZE jsonstring
        console.log(jsonString)
        jsonString = '{"history1":"Holland V Coffee & Drink", "history2":"Xiang Jiang Soya Sauce Chicken", "history3":"Depot Road Zhen Shan Mei Laksa","history4":"Hock Kee Fried Kway Teow","history5":"Kwang Kee Teochew Fish Porridge","history6":"The Sugarcane Plant", "history7":"Ma Bo", "history8":"Teck Kee Hot & Cold Dessert","history9":"Ramen Taisho","history10":"Kwang Kee Teochew Fish Porridge"}';
        try {
          await AsyncStorage.setItem(
            'history',
            jsonString
          );
        } catch (error) {
          // Error saving data
        }
      }
    } catch (error) {
      // Error retrieving data
    }
    
    


    //edot
    
    try {
      var jsonString = await AsyncStorage.getItem('history');
      if (jsonString !== null) {
        // We have data!!
        jsonHistory = JSON.parse(jsonString);
      }
    } catch (error) {
      // Error retrieving data
    }


    // to check if the history path works - IT DOES
    /*var historypath = 'http://localhost:8080/history/';
    for (let i = 1; i < 10; i++) {     // hardcoded btw 
      historypath = historypath + jsonHistory["history" + (i).toString()] +"/";   
    }
    historypath = historypath + jsonHistory["history10"]; 
    console.log(historypath)
    //alert(historypath)*/

    for (let i = 9; i > 0; i--) {     // hardcoded btw 
      jsonHistory["history" + (i+1).toString()] = jsonHistory["history" + (i).toString()];   
    }

    jsonHistory["history1"] = path;
    console.log("jsonHistory in infoscreen");
    console.log(jsonHistory);

    jsonString = JSON.stringify(jsonHistory);
    try {
      await AsyncStorage.setItem(
        'history',
        jsonString
      );
    } catch (error) {
      // Error saving data
    }

    

    
    


    
  }

  


 useEffect(() => {
    getMovies();
  }, []);
  /**
   * get today's date in 'DD/MM/YY' format
   * @method getCurrentDate
   * @returns 
   */
  const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    // return date + '/' + month + '/' + year;
    return '07/03/22'
}

 /**
   * time check based on opening hours
   * @method opennowtime
   * @param x
   * @returns boolean 
   */

function opennowtime(x){
  // can use to test time !!! allocate on 24h if not uncomment  line 125- to get actual hour
  // time= new Date().getHours(x);
  if (x==""){
    time= new Date().getHours()
    if (time>=9 && time<=18){
        return true
    }
  }
  // time = 21


  try{
  actualhours=x.split(':')[1]
  startinghr=actualhours.split('-')[0].trim()
  endinghr=actualhours.split('-')[1]
 
  

  if (startinghr.includes('pm')){
    startinghr = parseInt(startinghr)
    startinghr = (startinghr) + 12
  }else{
    startinghr = parseInt(startinghr)
  }
  if (endinghr.includes('pm')){
    endinghr = parseInt(endinghr)
    endinghr = (endinghr) + 12
  }else{
    endinghr = parseInt(endinghr)
  }
  console.log("startinghr:",startinghr)
  console.log("endinghr:",endinghr)
  
  time= new Date().getHours()
  if (endinghr>startinghr){
    if ( time>=startinghr && time<=endinghr){
      return true
    }else{
      return false
    }
  
  }else{
// 15 to 3 now is 21
// starting hr higher than ending hr
    if (time>startinghr){
      console.log(x)
      return true
    }else{
      if (time<endinghr){
        return true
      }else{
        return false
      }
    }
  }
}catch{
  if (time>9 && time<21){
    return true
  }else{
    return false
  }

}

}
 /**
   * time check based on hawker closure dates
   * @method checkOpen
   * @param start,end
   * @returns boolean 
   */
const checkOpen=(start,end)=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  // return date + '/' + month + '/' + year;
  if (start!=""&&start!=null){
    start_date=parseInt(start.split("/")[0])
    start_month=parseInt(start.split("/")[1])
    end_date=parseInt(end.split("/")[0])
    end_month=parseInt(end.split("/")[1])
    // console.log(start_date,start_month,end_date,end_month)

    
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
  }}

  function chip1(element){
    console.log("ded")
    if (checkOpen(element.q2_cleaningstartdate,element.q2_cleaningenddate) && opennowtime(element.operationhours)){
      return (
        <Chip icon="information" selectedColor="black" style={{backgroundColor:"#62BD69",width:"37%"}}>
        OPEN NOW
        </Chip>
      );
    }else{

      return (
        <Chip icon="information" mode='outlined' style={{backgroundColor:"#ff9494",width:"30%"}}>
        CLOSED
        </Chip>

      );
    }
  }


  const list=()=>{
    return data.map((element) => {





      if ((element.foodcategories!="")){
        element.foodcategories=element.foodcategories.replace("'","")
        element.foodcategories=element.foodcategories.replace("'","")
        element.foodcategories=element.foodcategories.replace("'","")
        element.foodcategories=element.foodcategories.replace("[","")
        element.foodcategories=element.foodcategories.replace("]","")
      }
   if (element.operationhours==null){
      element.operationhours="Mon-Sun :9am-6pm"
   }
   address= 'https://www.google.com/maps?saddr=My+Location&daddr='+element.latitude_hc+','+element.longitude_hc
   _handleOpenWithWebBrowser = () => {
     WebBrowser.openBrowserAsync(address);
   };
    return (
        <View style={styles.container}>
          <ScrollView>
    <ImageBackground
      // resizeMethod={'auto'}
      style={{
        width: "100%",
        height: 380,
        margin:0,
      
      top:-10,
      left:0,
      right:0,
      }}
      
      source={{ uri: element.thumbnail }}
      
    />    


    <Card style = {{top:-50, borderTopLeftRadius:20, borderTopRightRadius:20,width:"100%", height:700}}>
    <View style={{flexDirection:"row", justifyContent:"space-around",marginTop:10}}>
      <View style={{ width:"68%", alignSelf:"center", marginLeft:5}}>
        <Text style={styles.headerTitle}> {element.name}  </Text>
      </View>
        <View style = {styles.bordon}> 
          <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-evenly",paddingLeft:15}} >
             <FontAwesome name="star" size={24} color="white" />
             <Text style={styles.buttontext} > {element.rating}% </Text> 
        </View>
    </View>
    </View>

    <View style = {{padding:20,alignItems:"center", flexDirection:"column",height:"50%"}}>

              <View>
                <View style={{flexDirection:"row", height:"40%"}}>
                  <View  style={{backgroundColor:"#FFBE30", borderRadius:32, alignItems:"center",justifyContent:"center",padding:10,height:"45%", marginTop:5}}>
              <FontAwesome5 name="map-marker-alt" size={22} color="white" />
              </View>
                <View style={{width:"90%", height:"65%", marginTop:8, marginLeft:6}}>
                    <Text style={styles.infotext} >{element.hawkercentrename} </Text> 
                    </View>
                    </View>
                  <View style={{flexDirection:"row", marginBottom:10}}>
                    <View style={{backgroundColor:"#FFBE30", borderRadius:20, alignItems:"center",justifyContent:"center",padding:10,height:"57%"}}>
                      <FontAwesome5 name="clock" size={24} color="white" /> 
                    </View>
                    <View style={{width:"85%"}}>
                    <Text style={styles.infotext} >{element.operationhours}</Text>
                    </View>
                    </View>

                    <View style={{alignSelf:"flex-start", bottom:15}}>
        {chip1(element)}
      </View>
              </View>
    <View>
      
    <Text style={styles.text} >Information</Text> 
<View style={{ flexDirection:"row", alignItems: "flex-start",justifyContent:"flex-start", marginBottom:20}}>
        <Text style={{fontFamily:"SF",marginTop:12,fontSize:20,color:"black", marginLeft:10}}>{element.foodcategories}</Text>
        </View>
        
    <View
      style={{
        borderBottomColor: 'rgba(242, 242, 247,1)',
        borderBottomWidth: 2,
        marginBottom:10
      }}
    />

      





    <Text style={styles.text} >Directions</Text> 


              <View style={{ flexDirection:"row", alignItems: "center",justifyContent:"center", bottom:10}}>
              <TouchableOpacity onPress={this._handleOpenWithWebBrowser} 
          style={styles.button}>
                <View style={{backgroundColor:'white',padding:11, borderRadius:23, marginTop:5}}>
              <FontAwesome5 name="bus" size={30} color="black" />
              </View>
              <View>
                <Text style={{fontFamily:"NunitoBlack",marginTop:12,fontSize:20,color:"white"}}>Bus</Text>
              </View>
              </TouchableOpacity >
              
              <TouchableOpacity onPress={()=>{
            // navigation.navigate("NearbyCarparkMapsScreen",{latitude:1.311102033,longitude:103.7949448})

            navigation.navigate("NearbyCarparkMapsScreen",{latitude:element.latitude_hc,longitude:element.longitude_hc,})
                   
          }}
          style={styles.button}>
              <View style={{backgroundColor:'white',padding:11, borderRadius:23, marginTop:5}}>
              <FontAwesome name="car" size={30} color="black" />
              </View>
              <View>
                <Text style={{fontFamily:"NunitoBlack",marginTop:12,fontSize:20,color:"white"}}>Car</Text>
              </View>
              
              </TouchableOpacity >
              <TouchableOpacity onPress={this._handleOpenWithWebBrowser} 
          style={styles.button}>
          
              <View style={{backgroundColor:'white',padding:11, borderRadius:23, marginTop:5,paddingLeft:15,paddingRight:15}}>
              <FontAwesome5 name="walking" size={30} color="black" />
              </View>
              <View>
                <Text style={{fontFamily:"NunitoBlack",marginTop:12,fontSize:20,color:"white"}}>Walk</Text>
              </View>
              </TouchableOpacity>
              </View> 
              </View>

              </View> 
    </Card> 
    </ScrollView>
    </View>

    );
  })
}

return(
<View>
  <ScrollView>
  {list()}
  </ScrollView>
</View>
);
}

const Stack = createStackNavigator();
/**
 * Stacking of Screens
 * @Method Stacker
 * @return
 */
export default function stacker() {
  return (
    <Stack.Navigator headerMode="float">

      <Stack.Screen name="ResultsScreen" component={ResultsScreen} /> 
      <Stack.Screen name="Info" component={InfoScreen} 
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
       <Stack.Screen name="NearbyCarparkMapsScreen" component={NearbyCarparkMapsScreen} 
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  headerTitle: {
    color: "black",
     marginLeft:20,
     fontFamily: "SFBlack",
     right:12,
     fontSize: 22,
     fontStyle: 'normal',
     fontWeight: 'bold',
     paddingTop: 10,
     lineHeight: 0,
     letterSpacing: 0,
     
   },
    infotext:{
     color: "black",
     fontFamily: 'SF',
     fontSize: 21,
     marginTop:6,
     marginLeft:10


   },
   text:{
      color: "black",
     fontWeight: 'bold',
     //textAlign: 'center',
     fontSize: 23,
     marginBottom:5,
     marginLeft:8
   },
   buttontext: {
     color: "white",
     fontFamily:"SFBlack",
     fontWeight: 'bold',
     textAlign: 'center',
     fontSize: 20,
     marginRight:15,
   },
   med:{
     height: 30,
     width: 30,
   },
   small: {
     height: 20, 
     width: 20,
   },
    button: {         
     backgroundColor: "#FFBE30", 
     height: 130,
     width: 80,
     alignItems: "center",
     justifyContent:"center",
     padding: 10,
     margin : 21,
     borderRadius: 100,
     justifyContent:"flex-start"
   },
    bordon: {         
     backgroundColor: "#FFBE30", 
     height: 40,
     width: 100,
     alignItems: "center",
     justifyContent:"center",
     margin : 12,
     borderRadius: 20,
 
   },
   but:{         
     backgroundColor: "#FFBE30", 
     height: 30,
     width: 30,
     alignItems: "center",
     justifyContent:"center",
     borderRadius: 10,
   },
 
   big: {
    height:25,
     width:25,
    marginRight: 10,
     marginTop: 9,
   },
   stt: {
     height: 34,
     width : 34
   },
   container:{
     backgroundColor:"white"
   }
});

module.exports=InfoScreen;