import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Avatar, Card, Title, Paragraph, IconButton} from 'react-native-paper';
import Constants from 'expo-constants';
import { hawkerchoices} from "../../assets/hawker";
import { AntDesign } from "@expo/vector-icons";;

export default function Rice() {
    return (
        <View style={styles.container}>
            
            <Card>
                <Card.Cover source={{ uri: hawkerchoices[2].imageUri }}/>
                <Card.Content>
                    <Title>{hawkerchoices[2].name}</Title>
                    
                    <Paragraph>
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="staro" size={15} color="#fdcc0d" />
                    </Paragraph>
                    
                    <Paragraph>
                        {hawkerchoices[2].hours}
                    </Paragraph>

                    <Paragraph></Paragraph>

                    <Paragraph>
                        Address: {hawkerchoices[2].address}
                    </Paragraph>

                    <Paragraph></Paragraph>

                    <Paragraph>{hawkerchoices[2].longDesc}</Paragraph>
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