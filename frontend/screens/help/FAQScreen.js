import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    IconButton,
} from "react-native-paper";

import {faq} from "../../assets/faq";
const list = ()=>{
    return (faq.map((element)=>{
        return(
    
    <Card style={{ marginBottom: 10 ,borderColor:"#FFC30B",borderWidth:2}}>
        <Card.Content>

            <Title>{element.name}</Title>

            <Paragraph>{element.shortDesc}</Paragraph>
        </Card.Content>
    
    </Card>
);

    }));
  };
   

function FAQScreen({ navigation }) {
    const [searchtext, setsearchtext] = useState("");
    const [wish, setWish] = useState("false");
    const searchResults = [];
    

    return (
        <View style={styles.container}>
            <View style={styles.background}>      
                <Text style={styles.headerText}>FAQ Page</Text>
            </View>
         
            <ScrollView>
                {list()}
            </ScrollView>
        </View>
    );
}
const Stack = createStackNavigator();

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
        backgroundColor: "#ececec",
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
        height:110,
        position: "relative",
        backgroundColor:"#fec241",
        borderColor: "black",
        borderWidth: 5,
        marginBottom: 15,
        bottom:5
    },
    headerText:{
        fontFamily: "OpenSansbold",
        //paddingVertical: 10,
        marginTop:45,
        paddingTop: 4,
        paddingBottom:5,
        fontSize: 24,
        alignSelf:"center"
    }
});
