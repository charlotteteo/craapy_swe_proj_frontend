import React, { useEffect, useState } from 'react';
import {  StyleSheet,SafeAreaView,ActivityIndicator, FlatList, Text, View , TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./home/search/SearchScreen";
import FilterScreen from "./home/filter/FilterScreen";
import { NavigationContainer } from '@react-navigation/native';
import InfoScreen from "./InfoScreen";
import NearbyCarparkMapsScreen from "./maps/NearbyCarparkMapsScreen";
import {
	Avatar,
	Chip,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";


function ResultsScreen ({ navigation,route }){
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

          <Card style={{ marginBottom: 10 ,backgroundColor:"#FFF2D6",}}>
                    <Card.Content>
              {/* <View key={element.key} style={{margin: 10}}> */}
              <Text style={[ {fontWeight: 'bold',fontSize: 22,color:"#654321"}]}>
                {element.name}
                </Text>
                {/* <View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
}}
/> */}
              <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>{element.hawkercentrename}</Text>

              <Text style={[ {fontSize: 15}]}>Operates on {element.operationhours}</Text>

              <Text style={[ {fontSize: 15,marginBottom:5}]}>Food Categories: {element.foodcategories}</Text>
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

        <Card style={{ marginBottom: 10 ,backgroundColor:"#FFF2D6",}}>
                  <Card.Content>
            {/* <View key={element.key} style={{margin: 10}}> */}
            <Text style={[ {fontWeight: 'bold',fontSize: 22,color:"#654321"}]}>
                {element.name}
                </Text>
                {/* <View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
}}
/> */}
              <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>{element.hawkercentrename}</Text>

              <Text style={[ {fontSize: 15}]}>Operates on {element.operationhours}</Text>

              <Text style={[ {fontSize: 15, marginBottom:5}]}>Food Categories: {element.foodcategories}</Text>


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
    <View style={styles.background}>      
        <Text style={styles.headerText}>{path}</Text>
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
  },
headercontainer:{
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
}, background:{
  width:"110%",
  height:80,
  //top:50,
  //alignSelf: "flex-start",
  //justifyContent: "flex-start",
  position: "relative",
  //borderColor: "black",
  //borderWidth: 5,
  marginBottom: 0
},headerText:{
  color:"black",
  fontSize: 20,
  fontWeight:"bold",
  flexDirection: "column",
  alignSelf:"center",
  marginTop: 40,
  marginBottom: 0,
  fontFamily:"OpenSansbold",

},
});

module.exports=ResultsScreen;