import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Avatar, Card, Title, Paragraph, IconButton} from 'react-native-paper';

import { attractions } from "../../assets/attraction";
import { AntDesign } from "@expo/vector-icons";;

export default function Fragment() {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Cover source={{ uri: attractions[2].imageUri  }}/>
                <Card.Content>
                    <Title>{attractions[2].name}</Title>
                    
                    <Paragraph>
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                        <AntDesign name="star" size={15} color="#fdcc0d" />
                    </Paragraph>
                    
                    <Paragraph>
                        {attractions[2].hours}
                    </Paragraph>

                    <Paragraph></Paragraph>

                    <Paragraph>
                        Address: {attractions[2].address}
                    </Paragraph>

                    <Paragraph></Paragraph>

                    <Paragraph>{attractions[2].longDesc}</Paragraph>
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