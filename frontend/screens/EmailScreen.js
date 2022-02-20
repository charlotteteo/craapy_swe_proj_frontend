
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
import * as WebBrowser from 'expo-web-browser';
// AUTO FILL EMAIL RECEPIENT NOT IMPLEMENTED YET
// auto fill name can try to use open composer https://github.com/flexible-agency/react-native-email-link

export default class EmailScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                 <Button
          title="Open Email"
          onPress={this._handleOpenWithWebBrowser}
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

    _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync('https://gmail.com');
      };

   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      
    }
})