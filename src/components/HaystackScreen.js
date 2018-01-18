// import styles from './styles'
// import ToDoList from '../ToDoList/index';
// import ToDoEdit from '../ToDoEdit/index';
import React from 'react';
import { Text,Image, View, FlatList,SectionList, TouchableHighlight, Button, StyleSheet } from 'react-native';
import {
    StackNavigator, TabNavigator
  } from 'react-navigation'; 
  import LoginStatusMessage from './LoginStatusMessage';
  import AuthButton from './AuthButton';
  

class HaystackFlatListScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'RECENT',
    };
  
    render() {
      return (
        <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Tomatoes'},
            {key: 'Potatoes'},
            {key: 'Vegetable Oil'},
            {key: 'Chocolates'},
            {key: 'Beer'},
            {key: 'Eggs'},
            {key: 'Rice'},
            {key: 'Tomato sauce'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        {/* <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        /> */}
        <LoginStatusMessage />
    <AuthButton />
      </View>
        
      );
    }
  }


class HaystackSectionListScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'CATEGORIES',
    };
  
    render() {
      return (
        <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
        
        
      );
    }
  }
  
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
  
  const HaystackNavigator = TabNavigator({
    Home: {screen: HaystackFlatListScreen},
    Notifications: {screen: HaystackSectionListScreen},
  }, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  });
  


class HaystackScreen extends React.Component{

    static navigationOptions={
        title: 'Shopping List',
    };
    render(){
      return <HaystackNavigator />
    }
}

module.exports = HaystackScreen;