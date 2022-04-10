import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Card,
    Title,
    Paragraph,
} from "react-native-paper";

import {faq} from "../../assets/faq";
/**
* Returns card frontend design for each element
 * @Method list
 * @return card content for each element in data
 */
const list = ()=>{
    return (faq.map((element)=>{
        return(
    
    <Card style={{ marginBottom: 10 ,borderColor:"#FFC30B",borderWidth:2}}>
        <Card.Content>

            <Title style={{fontFamily:"LatoBold"}} >{element.name}</Title>

            <Paragraph style={{fontFamily:"SF",fontSize:"15"}}>{element.shortDesc}</Paragraph>
        </Card.Content>
    
    </Card>
);

    }));
  };
   
/**
 * Contains list of common queries
 * @Class FAQScreen 
 * @param {*} param0 
 */

function FAQScreen({ navigation }) {
    const [searchtext, setsearchtext] = useState("");
    const [wish, setWish] = useState("false");
    const searchResults = [];
    

    return (
        <View style={styles.container}>
            <View style={styles.background}>      
                <Text style={styles.headerText}>FAQ Page</Text>
            </View>
            <View
  style={{
    borderBottomColor: 'rgba(242, 242, 247,1)',
    borderBottomWidth: 2,
    marginTop:0,
    width:"100%",
    marginBottom:15
  }}
/>
         
            <ScrollView>
                {list()}
            </ScrollView>
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
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={FAQScreen} />
            
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },

    button: {
        backgroundColor: "white",
        height: "35%",
        width: "73%",
        alignItems: "center",

        marginTop: 30,
        borderRadius: 20,
    },

    buttonText: {
        color: "black",
        fontWeight: "bold",
        paddingBottom: "10%",
        paddingTop: "10%",
        fontSize: 18,
    },

    buttonContainer: {
        borderColor: "black",
        borderWidth: 5
    },
    image: {
        width: "45%",
        height: "45%",
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
        backgroundColor:"white",

    },
    headerText:{
        fontFamily: "OpenSansbold",
        //paddingVertical: 10,
        marginTop:45,
        paddingTop: 4,
        fontSize: 24,
        alignSelf:"center"
    }
});