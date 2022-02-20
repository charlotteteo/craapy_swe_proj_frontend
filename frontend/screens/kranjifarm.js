import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationHelpersContext, StackActions } from '@react-navigation/native';
import { Avatar, Card, Title, Paragraph, IconButton} from 'react-native-paper';
import Constants from 'expo-constants';
import { locations } from '../assets/locations';
import { AntDesign } from "@expo/vector-icons";;

export default function Kranji() {
    return (
        <View style={styles.container}>
            
            <Card>
                <Card.Cover source={{ uri: locations[0].imageUri }}/>
                <Card.Content>
                    <Title>{locations[0].name}</Title>
                    
                    <Paragraph>
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="staro" size={15} color="#fdcc0d" />
                        <AntDesign name="staro" size={15} color="#fdcc0d" />
                    </Paragraph>
                    
                    <Paragraph>
                        {locations[0].hours}
                    </Paragraph>

                    <Paragraph></Paragraph>

                    <Paragraph>
                        Address: {locations[0].address}
                    </Paragraph>

                    <Paragraph></Paragraph>

                    <Paragraph>{locations[0].longDesc}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      paddingHorizontal: 8,
    },

    picture: {
        flex:3,
        width:"100%",
    }
})