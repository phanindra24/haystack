import React from 'react';
import { Text, Image, View, FlatList, SectionList, TouchableHighlight, Button, StyleSheet } from 'react-native';
import {
  StackNavigator, TabNavigator
} from 'react-navigation';
import HaystackRecentScreen from './Haystack/HaystackRecentScreen'
import HaystackCategoriesScreen from './Haystack/HaystackCategoriesScreen'


const HaystackNavigator = TabNavigator({
  Recent: { screen: HaystackRecentScreen },
  Categories: { screen: HaystackCategoriesScreen },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  });


class HaystackScreen extends React.Component {

  static navigationOptions = {
    title: 'Grocery List',
  };
  render() {
    return <HaystackNavigator />
    
  }
}

module.exports = HaystackScreen;