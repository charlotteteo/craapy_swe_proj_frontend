import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	Button,
	TouchableOpacity,
	ImageBackground
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FAQScreen from "./FAQScreen";
import EmailScreen from "./EmailScreen";
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
/**
 * Contains buttons that link to faq and email screen respectively
 * @Class HelpScreen
 * @param {*} param0 
 * @return
 */
function HelpScreen({ navigation }) {
	return (
		<View style={styles.container}>
           
      <View style={styles.background}>      
                <Text style={styles.headerText}>Help Page</Text>
            </View>     
            <View
  style={{
    borderBottomColor: 'rgba(242, 242, 247,1)',
    borderBottomWidth: 2,
    marginTop:0,
    width:"100%",
    marginBottom:15,
  }}
/>

<View style={{flexDirection:"column",width:"100%",justifyContent:"space-around",alignItems:"center",height:"70%"}}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("FAQ")}
			>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{marginTop:20,backgroundColor:"white",padding:23,borderRadius:45,right:30}}>
				<AntDesign name="questioncircleo" size={50} color="black" />
                </View>
                <Text style={styles.buttonText2}>FAQ</Text>
                </View>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Email")}
			>
            <View style={{flexDirection:"row", alignItems:"center"}}>
            <View style={{marginTop:20,backgroundColor:"white",padding:23,borderRadius:45}}>
                    <Octicons name="mail" size={50} color="black" />
            </View>
            <View style={{width:"50%"}}>
                <Text style={styles.buttonText}>Contact Us</Text>
                </View>
                </View>
            
			</TouchableOpacity>
            </View>
		</View>
	);
}

const Stack = createStackNavigator();
/**
 * Stacking of Screens
 * @Method contactstack
 */
export default function contactstack() {
	return (
		<Stack.Navigator mode="card">
			<Stack.Screen name="Help" component={HelpScreen}             
      options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'#fff'
            }}/>
			<Stack.Screen name="FAQ" component={FAQScreen}            
       options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'black'
            }}/>
			<Stack.Screen name="Email" component={EmailScreen}                                options={{
                headerBackTitleVisible:false,
                headerTitle:false,
                headerTransparent:true,
                headerTintColor:'black'
            }}/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //borderColor: "blue",
        //borderWidth: 5,

        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },

    button: {
        backgroundColor: "#fec241",
        height: "27%",
        width: "70%",
        alignItems: "center",
        borderColor:"black",
        //borderWidth:5,
        marginTop: 60,
        marginBottom:20,
        borderRadius: 70,
        justifyContent:"space-between",
        flexDirection:"column"
        
    },

    buttonText: {
        fontFamily:"NunitoBold",
        paddingBottom: 0,
        paddingTop: 20,
        fontSize: 30,
        color:"white",
        textAlign:"center",

    },
    buttonText2: {
        fontFamily:"NunitoBold",
        paddingBottom: 0,
        paddingTop: 20,
        marginBottom:0,
        fontSize: 30,
        color:"white"
    },
    image: {
        width: "50%",
        height: "30%",
        bottom:7,
    },
    image2:{
        marginTop:5,
        width: "46%",
        height: "10%",
        marginBottom:5
    },
    background:{
        width:"110%",
        height:95,
        //top:50,
        //alignSelf: "flex-start",
        //justifyContent: "flex-start",
        position: "relative",
        borderColor: "black",
        //borderWidth: 5,
        marginBottom: 0,
        backgroundColor:"white",


    },
    headerText:{
        fontFamily: "OpenSansbold",
        //paddingVertical: 10,
        marginTop:40,
        paddingTop: 4,
        paddingBottom:5,
        fontSize: 25,
        alignSelf:"center"
    }
});