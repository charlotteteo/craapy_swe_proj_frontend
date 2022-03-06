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

function SearchScreenCopy({navigation}) {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
  
    const getMovies = async () => {
        try {
         const response = await fetch('http://localhost:8080/hawkerstalls');
         const json = await response.json();
         // console.log(json)
    
         setFilteredDataSource(json);
         setMasterDataSource(json);
       } catch (error) {
         console.error(error);
       } 
     }
   
     useEffect(() => {
       getMovies();
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
         
          return (
            
                  <TouchableOpacity	onPress={() => {
                  // should be able to change the map view not implemented
                
                }}>
      
                <Card style={{ marginBottom: 10 }}>
                          <Card.Content>
                    {/* <View key={element.key} style={{margin: 10}}> */}
                      <Text style={[ {fontWeight: 'bold',fontSize: 20}]}>
                        {element.name}
                        </Text>
                      <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Address:{element.address}</Text>
    
                      <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Operation Hours:{element.operationhours}</Text>
    
                      <Text style={[ {fontWeight: 'bold',fontSize: 15}]}>Food Categories:{element.foodcategories}</Text>
    
    
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
  
    
      function checkFilter() {
        namearray = ["r1","r2","r3","r4","r5","cuisine1","cuisine2","cuisine3","cuisine4","n1","n2","n3","n4","n5","a1","a2","a3","a4","a5","a6","a7"]
        listarray = [r1,r2,r3,r4,r5,cuisine1,cuisine2,cuisine3,cuisine4,n1,n2,n3,n4,n5,a1,a2,a3,a4,a5,a6,a7]
        length = listarray.length
        final = []
        for (let i=0; i<length; i++) {
          if (listarray[i]) {
            final.push(namearray[i])
          }
        }
        alert(final)
  
        //alert("HIII" + r1 + r2)
  
      }
    
  
  // cuisine
  const [cuisine1, Setcuisine1] = useState(false);
  const [cuisine2, Setcuisine2] = useState(false);
  const [cuisine3, Setcuisine3] = useState(false);
  const [cuisine4, Setcuisine4] = useState(false);

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


    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchbar}>
          <SearchBar //style = {styles.searchbar}
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            onSubmitEditing={()=>
                navigation.navigate("Results",{path:search,})
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
              color={"#86939E"}
              size={30}
              //onPress={() => navigation.navigate("Filter")}
            />
        </TouchableOpacity>
  

    
    
        <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={450}
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
            onPress={() => setr1(!r1)
            }
          />
          <CheckBox
              title="2 Stars"
              checked={r2}
              onPress={() => setr2(!r2)}
        
          />
          <CheckBox
              title="3 Stars"
              checked={r3}
              onPress={() => setr3(!r3)}
        
          />
          <CheckBox
              title="4 Stars"
              checked={r4}
              onPress={() => setr4(!r4)}
        
          />
          <CheckBox
              title="5 Stars"
              checked={r5}
              onPress={() => 
                setr5(!r5)
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
            title="Thai"
            checked={cuisine2}
            onPress={() => Setcuisine2(!cuisine2)}
        />
        <CheckBox
            title="Japanese"
            checked={cuisine3}
            onPress={() => Setcuisine3(!cuisine3)}
        />
        <CheckBox
          title="French"
          checked={cuisine4}
          onPress={() => Setcuisine4(!cuisine4)}
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
            onPress={() => setn1(!n1)}
          />
          <CheckBox              
              title="<300m"
              checked={n2}
              onPress={() => setn2(!n2)}
          />
          <CheckBox
              title="<500m"
              checked={n3}
              onPress={() => setn3(!n3)}
          />
          <CheckBox
              title="<1km"
              checked={n4}
              onPress={() => setn4(!n4)}
          />
          <CheckBox
              title="<2km"
              checked={n5}
              onPress={() => setn5(!n5)}
          />
      </ScrollView>
      </Card.Content>
      </Card>
      

  
      <ScrollView horizontal={true}>
      <Card style={{ marginBottom: 10,width:320,height:340,flexDirection:"column"}}>
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
          title="Changi"
          checked={a3}
          onPress={() => seta3(!a3)}
        />
        <CheckBox
          title="East Coast"
          checked={a4}
          onPress={() => seta4(!a4)}
        />
        <CheckBox
          title="Tampines"
          checked={a5}
          onPress={() => seta5(!a5)}
        />
        <CheckBox
          title="Bukit Panjang"
          checked={a6}
          onPress={() => seta6(!a6)}
        />
        <CheckBox
          title="Ang Mo Kio"
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
		<Stack.Navigator headerMode="float">
			<Stack.Screen name="Search" component={SearchScreenCopy} />
      <Stack.Screen name="Results" component={ResultsScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#FFFFFF",    // #FFB899 // maybe change to white
  },
  itemStyle: {
    padding: 10,
  },
  searchbar: {
    backgroundColor: 'white',
  },

  itemview: {
    backgroundColor: "#FEE0D4",    //  light colors: #FEE0D4 #FFF3EE peach: #FEDBBB (try light peach)
  },


  button: {         // tbh doesnt matter a lot haha
    backgroundColor: "#BDC6CF", // dark mode: #303337
    height: "6%",
    width: "10%",
    alignItems: "center",
    justifyContent:"center",
    position: "absolute",
    right: 15,
    top: 5,

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
    //bottom: 20,
  },

  
  image: {      // maybe remove
		width: "60%",
    height: "60%",
    paddingBottom: "20%",
    paddingTop: "20%",
  },

});