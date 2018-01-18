import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
// var markers = [
//   {
//     latitude: 17.4221,
//     longitude: 78.3818,
//     title: 'Foo Place',
//     subtitle: '1234 Foo Drive'
//   }
// ];
const MapScreen = () => (
  <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 17.4221,
          longitude: 78.3818,
          // annotations: {markers},
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <MapView.Marker
            coordinate={{latitude: 17.4221,
            longitude: 78.3818}}
            title={"Zemoso"}
            description={"Groceries Store 1"}
         />
         <MapView.Marker
            coordinate={{latitude: 17.43,
            longitude: 78.3818}}
            title={"Store"}
            description={"Groceries Store 2"}
         />
         <MapView.Marker
            coordinate={{latitude: 17.4356,
            longitude: 78.3718}}
            title={"Store"}
            description={"Groceries Store 3"}
         />
      
      </MapView>
);

MapScreen.navigationOptions = {
  title: 'Maps',
};

export default MapScreen;
