// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from 'react-native-elements';
import ResultsScreen from '../../ResultsScreen';
import { NavigationContainer } from '@react-navigation/native';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
  ImageBackground,
  Image, } from 'react-native';
import {
    Avatar,
    
    Card,
    Title,
    Paragraph,
    IconButton,
} from "react-native-paper";
import { SearchBar } from 'react-native-elements';
import { createStackNavigator } from "@react-navigation/stack";
import FilterScreen from "../filter/FilterScreen";
import NearbyCarparkMapsScreen from "../../maps/NearbyCarparkMapsScreen";
import { FontAwesome5 } from '@expo/vector-icons';

function SearchScreenCopy({navigation}) {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
  
    const getHawkers = async () => {
        try {
        const response = await fetch('http://craapy-env.eba-9gpy3v9a.us-east-1.elasticbeanstalk.com/hawkerstalls');
         const json = await response.json();
         // console.log(json)
    
         setFilteredDataSource(json);
         setMasterDataSource(json);
       } catch (error) {
         console.error(error);
       } 
     }
   
     useEffect(() => {
       getHawkers();
     }, []);
   
    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };
    
    const list = () => {
  
        return filteredDataSource.map((element) => {
          if (element.operationhours=="" || element.operationhours==null){
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
      
      <Card style={{ marginTop:10,backgroundColor:"#FFF2D6",}}>
                        <Card.Content>
                  {/* <View key={element.key} style={{margin: 10}}> */}
                    <Text style={[ {fontWeight: 'bold',fontSize: 22}]}>
                      {element.name}
                      </Text>
                      {/* <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/> */}
                    <Text style={[ {fontWeight: 'bold',fontSize: 15, color:"rgb(142,142,147)"}]}>{element.hawkercentrename}</Text>
  
                    <Text style={[ {fontSize: 15}]}>Operates on {element.operationhours}</Text>
  
                    <Text style={[ {fontSize: 15}]}>Food Categories: {element.foodcategories}</Text>

  
              </Card.Content>
      
      
      
      </Card>
                </TouchableOpacity>
          
          );
        });
      };

    const ItemView = ({ item }) => {
      return (
        // Flat List Item
        <SafeAreaView style={{ flex: 1, padding: 24 }}>
              return (
    <SafeAreaView style={styles.container}>
     
    </SafeAreaView>
    <ScrollView>
                {list()}
                </ScrollView>
      </SafeAreaView>
        
      );
    };

    const renderItem = ({ item }) => (
        <Item name={item.name} address={item.address} operationhours={item.operationhours} foodcategories={item.foodcategories}/>
           
      );
  
    
  


    // clear functions
    function clearPressedRatings(){
      
        setr1(false)
        setr2(false)
        setr3(false)
        setr4(false)
        setr5(false)
      }
      function clearPressedCuisine(){
        Setcuisine1(false)
        Setcuisine2(false)
        Setcuisine3(false)
        Setcuisine4(false)
        Setcuisine5(false)
      }
      function clearPressedNeighbourhood(){
        seta1(false)
        seta2(false)
        seta3(false)
        seta4(false)
        seta5(false)
        seta6(false)
        seta7(false)
      }
      function clearPressedDistance(){
        setn1(false)
        setn2(false)
        setn3(false)
        setn4(false)
        setn5(false)
      }
      function clearAll() {
        clearPressedCuisine()
        clearPressedDistance()
        clearPressedNeighbourhood()
        clearPressedRatings()
      }
  
    
      function checkFilter() {
        namearray = ["20","40","60","80","90","Chinese","Western","Indian","Thai","Japanese","0.1","0.3","0.5","1","2",
              "Ardmore, Bukit Timah, Holland Road, Tanglin","Orchard, Cairnhill, River Valley","Jurong","Little India","Tampines, Pasir Ris","Queenstown, Tiong Bahru","Raffles Place, Cecil, Marina, Peoples Park"]
        listarray = [r1,r2,r3,r4,r5,cuisine1,cuisine2,cuisine3,cuisine4,cuisine5,n1,n2,n3,n4,n5,a1,a2,a3,a4,a5,a6,a7]
        length = listarray.length
        final = []
        for (let i=0; i<length; i++) {
          if (listarray[i]) {
            final.push(namearray[i])
          }
        }
        alert(final) // only the first one for now

        
        //searchFilterFunction(final)
        navigation.navigate("Results",{path:final,})     // SEARCHES for cuisine 
  
      }
    
  
  // cuisine
  const [cuisine1, Setcuisine1] = useState(false);
  const [cuisine2, Setcuisine2] = useState(false);
  const [cuisine3, Setcuisine3] = useState(false);
  const [cuisine4, Setcuisine4] = useState(false);
  const [cuisine5, Setcuisine5] = useState(false);

  // ratings
  const [r1, setr1] = useState(false);
  const [r2, setr2] = useState(false);
  const [r3, setr3] = useState(false);
  const [r4, setr4] = useState(false);
  const [r5, setr5] = useState(false);

  // neighbourhood area
  const [a1, seta1] = useState(false);
  const [a2, seta2] = useState(false);
  const [a3, seta3] = useState(false);
  const [a4, seta4] = useState(false);
  const [a5, seta5] = useState(false);
  const [a6, seta6] = useState(false);
  const [a7, seta7] = useState(false);


  // distance
  const [n1, setn1] = useState(false);
  const [n2, setn2] = useState(false);
  const [n3, setn3] = useState(false);
  const [n4, setn4] = useState(false);
  const [n5, setn5] = useState(false);


    // remove all other checkboxes when toggling
  // ratings
  function setr1fx() {
    setr1(!r1)
    setr2(false), setr3(false), setr4(false), setr5(false)
  }
  function setr2fx() {
    setr2(!r2)
    setr1(false), setr3(false), setr4(false), setr5(false)
  }
  function setr3fx() {
    setr3(!r3)
    setr1(false), setr2(false), setr4(false), setr5(false)
  }
  function setr4fx() {
    setr4(!r4)
    setr1(false), setr2(false), setr3(false), setr5(false)
  }
  function setr5fx() {
    setr5(!r5)
    setr1(false), setr2(false), setr3(false), setr4(false)
  }

  // distance
  function setn1fx() {
    setn1(!n1)
    setn2(false), setn3(false), setn4(false), setn5(false)
  }
  function setn2fx() {
    setn2(!n2)
    setn1(false), setn3(false), setn4(false), setn5(false)
  }
  function setn3fx() {
    setn3(!n3)
    setn1(false), setn2(false), setn4(false), setn5(false)
  }
  function setn4fx() {
    setn4(!n4)
    setn1(false), setn2(false), setn3(false), setn5(false)
  }
  function setn5fx() {
    setn5(!n5)
    setn1(false), setn2(false), setn3(false), setn4(false)
  }


    return (
      <SafeAreaView style={styles.container}>
      <View>      
        <Text style={styles.headerTitle}>Search</Text>
    </View>  
<View style={styles.searchbar}>
  <SearchBar //style = {styles.searchbar}
    round
    searchIcon={{ size: 24 }}
    onChangeText={(text) => searchFilterFunction(text)}
    onClear={(text) => searchFilterFunction('')}
    onSubmitEditing={()=>
        navigation.navigate("Results",{path:[search],})
        // console.log(search)
    }
    
    placeholder="Search anything..."
    value={search}
    lightTheme="True"
  />
</View>
<ScrollView>
{list()}
</ScrollView>
       

        <TouchableOpacity
        style={styles.button}
        onPress={() => this.RBSheet.open()}       // MAKE IT NICER!!!!!!
      >
          <IconButton
              icon="filter"
              color={"white"}
              size={30}
              //onPress={() => navigation.navigate("Filter")}
            />
        </TouchableOpacity>
  
  

    
    
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={450}           // WHY HEIGHT DONT CHANGE. original was 340
        openDuration={300}
        customStyles={{
          container: {
             justifyContent: "center",
             alignItems: "center",
            //flex:1
          }
        }}
      >
      
      <SafeAreaView>
      <View>
          <TouchableOpacity onPress={clearAll}> 
            <Text style={styles.clearAllButton}> Clear All </Text>
          </TouchableOpacity>

        </View>
      
      
      <View style={styles.filterStyle}>
          <TouchableOpacity onPress={checkFilter}> 
            <Text style={styles.doneButton}> Done </Text>
          </TouchableOpacity>

        </View>


    
      <View style ={{paddingTop:10
      //,left:0 aligns
      }}>
        <Text style={[ {fontWeight: 'bold',fontSize: 25}]}>     Filter</Text>
      </View>

      


      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        

          <Card style={{ marginBottom: 10,width:320,height:340,flexDirection:"column"}}>
                      <Card.Content>
                {/* <View key={element.key} style={{margin: 10}}> */}
                <View style ={styles.filterfieldtitle}>
                  <Text style={[ {fontWeight: 'bold',fontSize:20, color:"black"}]}>Ratings</Text>
                </View>
          {/* <Icon name="facebook" style={styles.icon}></Icon> */}
          <View style={styles.clearFilterContainer}>
            <Button title="Clear Filters" onPress={clearPressedRatings}/>
          </View>
          <ScrollView nestedScrollEnabled = {true}>
    
          <CheckBox
            title="1 Star"
            checked={r1}
            onPress={() => 
              setr1fx()
            }
          />
          <CheckBox
              title="2 Stars"
              checked={r2}
              onPress={() => 
                setr2fx()
              }
          />
          <CheckBox
              title="3 Stars"
              checked={r3}
              onPress={() => 
                setr3fx()
              }
          />
          <CheckBox
              title="4 Stars"
              checked={r4}
              onPress={() => 
                setr4fx()
              }
          />
          <CheckBox
              title="5 Stars"
              checked={r5}
              onPress={() => 
                setr5fx()
              }
          />
          </ScrollView>
          </Card.Content>
          </Card>
        
  



        

      <Card style={{ marginBottom: 10,width:320,height:340,flexDirection:"column",color: "black"}}>
            <Card.Content>
      {/* <View key={element.key} style={{margin: 10}}> */}
      <View style ={styles.filterfieldtitle}>
        <Text style={[ {fontWeight: 'bold',fontSize: 20, color:"black"}]}>Cuisine</Text>
      </View>
      <View style={styles.clearFilterContainer}>
        <Button title="Clear Filters" onPress={clearPressedCuisine}/>
      </View>
      <ScrollView nestedScrollEnabled = {true}>
      
        <CheckBox
            title="Chinese"
            checked={cuisine1}
            onPress={() => Setcuisine1(!cuisine1)}
        />
        <CheckBox
            title="Western"
            checked={cuisine2}
            onPress={() => Setcuisine2(!cuisine2)}
        />
        <CheckBox
            title="Indian"
            checked={cuisine3}
            onPress={() => Setcuisine3(!cuisine3)}
        />
        <CheckBox
          title="Thai"
          checked={cuisine4}
          onPress={() => Setcuisine4(!cuisine4)}
        />
        <CheckBox
          title="Japanese"
          checked={cuisine5}
          onPress={() => Setcuisine5(!cuisine5)}
        />
      </ScrollView>
      </Card.Content>
      </Card>
      
 

      
      <Card style={{ marginBottom: 10,width:320,height:340,flexDirection:"column"}}>
                      <Card.Content>
            <View style ={styles.filterfieldtitle}>
                <Text style={[ {fontWeight: 'bold',fontSize: 20, color:"black"}]}>Distance</Text>
            </View>
          
          <View style={styles.clearFilterContainer}>
            <Button title="Clear Filters" onPress={clearPressedDistance}/>
          </View>
          <ScrollView nestedScrollEnabled = {true}>
          
          <CheckBox
            title="<100m"
            checked={n1}
            onPress={() => setn1fx()}
          />
          <CheckBox              
              title="<300m"
              checked={n2}
              onPress={() => setn2fx()}
          />
          <CheckBox
              title="<500m"
              checked={n3}
              onPress={() => setn3fx()}
          />
          <CheckBox
              title="<1km"
              checked={n4}
              onPress={() => setn4fx()}
          />
          <CheckBox
              title="<2km"
              checked={n5}
              onPress={() => setn5fx()}
          />
      </ScrollView>
      </Card.Content>
      </Card>
      

  
      <ScrollView horizontal={true}>
      <Card style={{ marginBottom: 10,paddingBottom: 25, width:320,height:340,flexDirection:"column"}}>   
                      <Card.Content>
                {/* <View key={element.key} style={{margin: 10}}> */}
                <View style ={styles.filterfieldtitle}>
                <Text style={[ {fontWeight: 'bold',fontSize:20, color:"black"}]}>Neighbourhood</Text>
                </View>
          {/* <Icon name="facebook" style={styles.icon}></Icon> */}
          <View style={styles.clearFilterContainer}>
            <Button title="Clear Filters" onPress={clearPressedNeighbourhood}/>
          </View>
          <ScrollView horizontal={false}>
          
        <CheckBox
          title="Bukit Timah"
          checked={a1}
          onPress={() => seta1(!a1)}
        />
        <CheckBox
          title="Orchard"
          checked={a2}
          onPress={() => seta2(!a2)}
        />
        <CheckBox
          title="Jurong"
          checked={a3}
          onPress={() => seta3(!a3)}
        />
        <CheckBox
          title="Little India"
          checked={a4}
          onPress={() => seta4(!a4)}
        />
        <CheckBox
          title="Tampines"
          checked={a5}
          onPress={() => seta5(!a5)}
        />
        <CheckBox
          title="Queenstown"
          checked={a6}
          onPress={() => seta6(!a6)}
        />
        <CheckBox
          title="Raffles Place"
          checked={a7}
          onPress={() => seta7(!a7)}
        />
  


        </ScrollView>
        </Card.Content>
        </Card>


        </ScrollView>
        </ScrollView>


        

      </SafeAreaView>
                
      </RBSheet>
  



    </SafeAreaView>
  );
};




const Stack = createStackNavigator();

export default function homestack() {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Search" component={SearchScreenCopy}      
       options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
      <Stack.Screen name="Results" component={ResultsScreen}      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }} />
      <Stack.Screen name="NearbyCarparkMapsScreen" component={NearbyCarparkMapsScreen}      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }} />
      
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#FFFFFF",    // #FFB899 // maybe change to white
    alignContent:"flex-start"
  },
  searchbar: {
    backgroundColor: 'white',
    marginTop:10
  },

  itemview: {
    backgroundColor: "#FEE0D4",    //  light colors: #FEE0D4 #FFF3EE peach: #FEDBBB (try light peach)
  },


  button: {         // tbh doesnt matter a lot haha
    backgroundColor: "#fec241", // dark mode: #303337
    height: "6%",
    width: "10%",
    alignItems: "center",
    justifyContent:"center",
    position: "absolute",
    right: 8,
    top: 37,
    margin: 10,
    borderRadius: 20,
  },
  clearFilterContainer: {
    position:"absolute",
    top: 10,
    right: 20,
  },
  filterfieldtitle: {
    paddingBottom:5,
    left: 10
  },


  clearAllButton: {       // HARD TO PRESS - click above it...
    top:35,
    left:260,
    color: "#1880FB",
    fontSize: 18,
  },

  
  filterStyle: {
    position:"absolute",
    //top:5,
    //right:10,
    
    justifyContent:"center",
    alignSelf:"center",
    //left:160,                           // NVR do 
    bottom:20,
    //marginBottom:10
  }, 

  doneButton: {
    color: "#1880FB",
    fontSize: 18,
    fontWeight: "bold",
  },

  
  image: {      // maybe remove
		width: "60%",
    height: "60%",
    paddingBottom: "20%",
    paddingTop: "20%",
  },
  background:{
    width:"110%",
    height:100,
    //top:50,
    //alignSelf: "flex-start",
    //justifyContent: "flex-start",
    position: "absolute",
    //borderColor: "black",
    //borderWidth: 5,
    marginBottom: 50
},

headerTitle: {
  //marginLeft:8,
  fontFamily: "OpenSansbold",
  //paddingVertical: 10,
  paddingTop: 4,
  paddingBottom:5,
  fontSize: 25,
  alignSelf:"center"
},

});