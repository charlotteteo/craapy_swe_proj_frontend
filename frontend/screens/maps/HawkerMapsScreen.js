import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
 Button,
 SafeAreaView,
 ScrollView,
 TouchableOpacity
} from 'react-native';
import {
	Avatar,
	
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import {hawkers} from "./hawkers";

import MapView, { MAP_TYPES, PROVIDER_DEFAULT } from 'react-native-maps';

import RBSheet from "react-native-raw-bottom-sheet";

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 1.290270;
const LONGITUDE = 103.851959;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const CarparkMapsScreen = () => {
    const  state = {
        region: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      };
    const { region } = state;
    return (
      <View style={styles.container}>
        {/* <MapView
                initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
                }}
            > */}
            <MapView
          provider={PROVIDER_DEFAULT}
          mapType={MAP_TYPES.STANDARD}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <MapView.UrlTile
            // urlTemplate="http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
            // urlTemplate="https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png"
            urlTemplate="https://maps-a.onemap.sg/v3/Default/{z}/{x}/{y}.png"
            zIndex={-1}
          />
        </MapView>
        <SafeAreaView style={{ flex: 1, justifyContent: "bottom", alignItems: "center" }}>
        <Button title="Show all Carparks" onPress={() => this.RBSheet.open()} />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <ScrollView>
         
				<TouchableOpacity
					onPress={() => {
						// navigation.navigate("Tian Tian Hainanese Chicken Rice");
                        console.log("index 0")
					}}
				>
					<Card style={{ marginBottom: 10 }}>
						<Card.Content>
							{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
							<Title>{hawkers[0].name}</Title>

							<Paragraph>{hawkers[0].shortDesc}</Paragraph>
						</Card.Content>
		
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
					
				>
					<Card style={{ marginBottom: 10 }}>
                    <Card.Content>
							{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
							<Title>{hawkers[1].name}</Title>

							<Paragraph>{hawkers[1].shortDesc}</Paragraph>
						</Card.Content>
					
					</Card>
				</TouchableOpacity>

				<TouchableOpacity
				>   
                <Card style={{ marginBottom: 10 }}>
					<Card.Content>
							{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
							<Title>{hawkers[2].name}</Title>

							<Paragraph>{hawkers[2].shortDesc}</Paragraph>
						</Card.Content>


					</Card>
				</TouchableOpacity>
			</ScrollView>
        </RBSheet>
      </SafeAreaView>
            {/* <Text>Custom Tiles</Text> */}
         
       
      </View>
    );
  
}

// MapsScreen.propTypes = {
//   provider: MapView.ProviderPropType,
// };

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = MapsScreen;