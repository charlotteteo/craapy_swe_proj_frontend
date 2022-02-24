
import React from 'react'
import { StyleSheet, Button, SafeAreaView,TouchableOpacity } from 'react-native'
import {
	Avatar,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
// import { openComposer } from "react-native-email-link";
import { Linking } from 'react-native';
// AUTO FILL EMAIL RECEPIENT NOT IMPLEMENTED YET
// auto fill name can try to use open composer https://github.com/flexible-agency/react-native-email-link

export default class EmailTrialScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                 <Button
          title="Open Email"
          onPress={() =>{Linking.openURL('https://gmail.com') }}
          title="support@example.com" 
          style={styles.button}
        />
                 <TouchableOpacity
					onPress={() => {
						console.log("fAQ0");
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
				
							<Title>FAQ@hawkerpedia.com</Title>

							<Paragraph>Contact us via Email for queries or feedback</Paragraph>
						</Card.Content>
					
					</Card>
				</TouchableOpacity>
                
            </SafeAreaView>
        )
    }

   

   
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      
    }
})

module.exports = EmailTrialScreen;