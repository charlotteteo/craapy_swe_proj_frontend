import React, { useEffect, useState } from 'react';
import {  StyleSheet,SafeAreaView,ActivityIndicator, FlatList, Text, View , TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import InfoScreen from "./InfoScreen";
import NearbyCarparkMapsScreen from "./maps/NearbyCarparkMapsScreen";
import { Entypo } from '@expo/vector-icons'; 
import {
	Avatar,
	Chip,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
/**
 * Results screen of hawker stalls in a specific hawker centre
 * @Class HawkerMapsResultsScreen
 * @param {*} param0 
 * @return
 */
function HawkerMapsResultsScreen ({ navigation,route }){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {path} = route.params;
  console.log(path);
  
  ratingArray = ["20","40","60","80","90"]
  cuisineArray = ["Chinese","Western","Indian","Thai","Japanese"]
  distanceArray = ["0.1","0.3","0.5","1","2"]
  neighbourhoodArray = ["Ardmore, Bukit Timah, Holland Road, Tanglin","Orchard, Cairnhill, River Valley","Jurong","Little India","Tampines, Pasir Ris","Queenstown, Tiong Bahru","Raffles Place, Cecil, Marina, Peoples Park"]

  // BV MRT
  const LATITUDE =  1.3072;
  const LONGITUDE = 103.7906;

  const getHawkers = async () => {
     try {
    

   
      var response = await fetch('http://craapy-env.eba-9gpy3v9a.us-east-1.elasticbeanstalk.com/search/'+path);
  
      //console.log(path)
      const json = await response.json();
  
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHawkers();
  }, []);

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
  time = 21


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
  if (start!=""){
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
  }







}



/**
* Returns card frontend design for each element
 * @Method list
 * @return card content for each element in data
 */

  const list = () => {
  
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
      // console.log(getCurrentDate())
      console.log(element.name,checkOpen(element.q2_cleaningstartdate,element.q2_cleaningenddate),opennowtime(element.operationhours))
      if (checkOpen(element.q2_cleaningstartdate,element.q2_cleaningenddate) && opennowtime(element.operationhours)){
          if ((element.foodcategories!="")){
            element.foodcategories=element.foodcategories.replace("'","")
            element.foodcategories=element.foodcategories.replace("'","")
            element.foodcategories=element.foodcategories.replace("'","")
            element.foodcategories=element.foodcategories.replace("[","")
            element.foodcategories=element.foodcategories.replace("]","")
          }
          return (
            
            
            <TouchableOpacity	onPress={() => {
              navigation.navigate("InfoScreen",{path:element.name})
          
          }}>

          <Card style={{backgroundColor:"#FFF2D6", marginLeft:10,marginRight:10,marginBottom:5,marginTop:5}}>
                    <Card.Content>
              {/* <View key={element.key} style={{margin: 10}}> */}
              <Text style={[ {fontWeight: 'bold',fontSize: 22,color:"black"}]}>
                {element.name}
                </Text>
                {/* <View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
}}
/> */}
              <Text style={[ {fontWeight: 'bold',fontSize: 15,color:"rgb(142,142,147)"}]}>{element.hawkercentrename}</Text>

              <Text style={[ {fontSize: 15,color:"rgb(142,142,147)"}]}>Operates on {element.operationhours}</Text>

              <Text style={[ {fontSize: 15, marginBottom:5,color:"rgb(142,142,147)"}]}>Food Categories: {element.foodcategories}</Text>


              <Chip icon="information" selectedColor="black" style={{backgroundColor:"#62BD69",width:"37%"}}>
                OPEN NOW
                </Chip>


          </Card.Content>


</Card>
          </TouchableOpacity>
    
    );
}else{
  if (element.operationhours==""){
    element.operationhours="Mon-Sun :9am-6pm"
  }
  if ((element.foodcategories!="")){
    element.foodcategories=element.foodcategories.replace("'","")
    element.foodcategories=element.foodcategories.replace("'","")
    element.foodcategories=element.foodcategories.replace("'","")
    element.foodcategories=element.foodcategories.replace("[","")
    element.foodcategories=element.foodcategories.replace("]","")
  }
  return (
    
          <TouchableOpacity	onPress={() => {
            navigation.navigate("InfoScreen",{path:element.name})
        
        }}>

        <Card style={{  marginLeft:10,marginRight:10,marginBottom:5,marginTop:5,backgroundColor:"#FFF2D6",}}>
                  <Card.Content>
            {/* <View key={element.key} style={{margin: 10}}> */}
            <Text style={[ {fontWeight: 'bold',fontSize: 22,color:"black"}]}>
                {element.name}
                </Text>
                {/* <View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
}}
/> */}
              <Text style={[ {fontWeight: 'bold',fontSize: 15,color:"rgb(142,142,147)"}]}>{element.hawkercentrename}</Text>

              <Text style={[ {fontSize: 15,color:"rgb(142,142,147)"}]}>Operates on {element.operationhours}</Text>

              <Text style={[ {fontSize: 15, marginBottom:5,color:"rgb(142,142,147)"}]}>Food Categories: {element.foodcategories}</Text>


              <Chip icon="information" mode='outlined' style={{backgroundColor:"#ff9494",width:"30%"}}>
              CLOSED
              </Chip>

        </Card.Content>


</Card>
        </TouchableOpacity>
  
  );
}



});
  };



  return (
    <View style={styles.container}>
    <View style={styles.headercontainer}>   
    <Entypo name="chevron-down" size={30} color="black" style={{left:193,top:10}} />  
    <View style={{width:"60%",alignSelf:"center"}}>
        <Text style={styles.headerText}>{path}</Text>
        </View> 
    </View>  
      <ScrollView>
     {list()}
    </ScrollView>
    </View>
  );
};


const Stack = createStackNavigator();

export default function homestack() {
	return (
<Stack.Navigator headerMode="none">
    <Stack.Screen name="ResultsScreen" component={ResultsScreen} 
                    options={{
                      headerBackTitleVisible:false,
                      headerTitle:false,
                      headerTintColor:'#fff',
                  }}/>
    	<Stack.Screen name="InfoScreen" component={InfoScreen} 
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
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor:"white",

  },
headercontainer:{
  width:"110%",
  height:"auto",
  //top:50,
  //alignSelf: "flex-start",
  //justifyContent: "flex-start",
  position: "relative",
  //borderColor: "black",
  //borderWidth: 5,
  marginBottom: 10,
  padding:7,
  backgroundColor:"white",
  paddingTop:30,

}, background:{
  width:"110%",
  height:80,
  //top:50,
  //alignSelf: "flex-start",
  //justifyContent: "flex-start",
  position: "relative",
  //borderColor: "black",
  //borderWidth: 5,
  marginBottom: 0,

},
headerText:{
  color:"black",
  fontSize: 20,
  fontWeight:"bold",
  flexDirection: "column",
  alignSelf:"center",
  marginTop: 10,
  marginBottom: 0,
  fontFamily:"OpenSansbold",
  textAlign:"center"

},
});

module.exports=HawkerMapsResultsScreen;