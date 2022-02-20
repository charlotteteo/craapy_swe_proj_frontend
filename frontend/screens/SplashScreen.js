import React from 'react';
import {SafeAreaView,StyleSheet,Text,Image} from 'react-native';
function SplashScreen(props) {
    return (
        <SafeAreaView  style={styles.container}>
        {/* <Image source={uri:"./app/assets/pig.jpg")/> */}
        <Image source={require("../assets/hawkerpediaicon.png")}/>
        <Text style={{ color: 'white' }}>{"\n"}{"\n"}brought to you by CRAAPY</Text>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#FFB899',
    },
    
});
export default SplashScreen;