import React from 'react';
import {SafeAreaView,StyleSheet,Text,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenCopy from '../screens/home/HomeScreenCopy';
import { Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SplashScreen=({navigation})=> {
    return (
        <SafeAreaView  style={styles.container}>
        {/* <Image source={uri:"./app/assets/pig.jpg")/> */}
        <Image style={{width: 300,height: 300} }source={require("../assets/klipartz.com-removebg.png")}/>
        {/* <Pressable style={styles.button} onPress={
            navigation.navigate("Home")
    
            }>
      <Text style={styles.text}>LETS EXPLORE</Text>
    </Pressable> */}
     <Text style={{ color: 'white' }}>{"\n"}{"\n"}brought to you by CRAAPY</Text>
<Text></Text>
    <TouchableOpacity onPress={navigation.navigate("AppFirst")}>
    <Text style={styles.text}>LETS EXPLORE</Text>

    </TouchableOpacity>
       
    </SafeAreaView>
    );
}

const Stack = createStackNavigator();
export default function stacker() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name="Splash" component={SplashScreen} />
           {/* <Stack.Screen name="AppFirst" component={AppFirst} /> */}
           {/* <Stack.Screen name="Home" component={HomeScreenCopy} /> */}
       </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#ffbe30',
    },
    button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'black',
        },
        text: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
    
    
});

module.exports=SplashScreen;
