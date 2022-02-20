import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Avatar, Card, Title, Paragraph, IconButton} from 'react-native-paper';
import Constants from 'expo-constants';
import { hawkerchoices} from "../../assets/hawker";
import { AntDesign } from "@expo/vector-icons";;

export default function Tee() {
    return (
        <View style={styles.container}>
            
            <Card>
                <Card.Cover source={{ uri: hawkerchoices[1].imageUri }}/>
                <Card.Content>
                    <Title>{hawkerchoices[1].name}</Title>
                    
                    <Paragraph>
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                    </Paragraph>
                    
                    <Paragraph>
                        {hawkerchoices[1].hours}
                    </Paragraph>

                    <Paragraph></Paragraph>

                    <Paragraph>
                        Address: {hawkerchoices[1].address}
                    </Paragraph>

                    <Paragraph></Paragraph>

                    <Paragraph>{hawkerchoices[1].longDesc}</Paragraph>
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