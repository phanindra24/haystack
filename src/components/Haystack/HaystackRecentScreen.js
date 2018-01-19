import React from 'react';
import { Text, Image, View, FlatList, SectionList, TouchableHighlight, Button, StyleSheet } from 'react-native';
import LoginStatusMessage from '../LoginStatusMessage';
import AuthButton from '../AuthButton';

import MyFlatlist from '../../controllers/MyFlatlist';


class HaystackRecentScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'RECENT',
  };

  render() {
    return (
      <View style={styles.container}>
        <MyFlatlist />
        <LoginStatusMessage />
        <AuthButton />
      </View>
    );
  }
}

module.exports = HaystackRecentScreen;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});