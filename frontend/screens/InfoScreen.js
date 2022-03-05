import React,{Component} from 'react';
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
 Pressable
} from 'react-native';
import {
	Avatar,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import {hawkerstalls} from '../assets/stall';

const List = () => {
  return hawkerstalls.map((element) => {
    return (
           <TouchableOpacity	onPress={() => {
          }}>
           <SafeAreaView>
          <Card>
					<Card.Content>
              {/* <View key={element.key} style={{margin: 10}}> */}
                <Text  style={styles.paragraph}>
                  {element.name}
                  </Text>
                <Card.Cover source={{ uri: element.imageUri }} />
                <Text style={styles.infotext}> 
                <Image style={styles.small} source={require('../assets/star.png')} /> {" "}:  {element.hawkerpediarating} %
                {"\n"}
                <Image style={styles.small} source={require('../assets/location.png')} /> {" "}: {element.address} {"\n"}  
                <Image style={styles.small} source={require('../assets/time.png')} />  {" "} : {element.hours}{"\n"} 
  
                </Text>
          </Card.Content>
</Card>
</SafeAreaView>
</TouchableOpacity>
          
    
   );
  });
};

const InfoScreen = () =>{

  return (
      <View style={styles.container}>
      {List()}
  <Text  style={styles.paragraph}>    
<Image style={styles.small} source={require('../assets/direction.png')} /> {" "} Directions:
</Text >
<TouchableOpacity 
    style={styles.button}>
    <Image style={styles.med} source={require('../assets/bus.png')} />
     <Text style={styles.infotext}>
      Public Transport
     </Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={styles.buttonr}>
    <Image style={styles.med} source={require('../assets/car.png')} />
     <Text style={styles.infotext}>
      Car
     </Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={styles.buttonl}>
    <Image style={styles.med} source={require('../assets/walking.png')} />
     <Text style={styles.infotext}>
      Walking
     </Text>
    </TouchableOpacity>

      </View>
    );
  
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    backgroundColor: "#FEE0D4"
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color : 'red',
  },
  infotext: {
		color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
		fontSize: 10,
	},
  logo: {
    height: 128,
    width: 128,
  },
  med:{
    height: 50,
    width: 50,
  },
  small: {
    height: 10, 
    width: 10,
  },
  button: {         // tbh doesnt matter a lot haha
    backgroundColor: "white", // dark mode: #303337
    height: "22%",
    width: "22%",
    alignItems: "center",
    justifyContent:"center",
    margin: 10,
    borderRadius: 20
  },
  buttonr: {         // tbh doesnt matter a lot haha
    backgroundColor: "white", // dark mode: #303337
    height: "20%",
    width: "20%",
    alignItems: "center",
    justifyContent:"center",
    position: "absolute",
    right: 15,
    bottom: 9,
    margin: 10,
    borderRadius: 20
  },
  buttonl: {         // tbh doesnt matter a lot haha
    backgroundColor: "white", // dark mode: #303337
    height: "20%",
    width: "20%",
    alignItems: "center",
    justifyContent:"center",
    position: "absolute",
    left: 15,
    bottom:  9,
    margin: 10,
    borderRadius: 20
  },
});



module.exports = InfoScreen;