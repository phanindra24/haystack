import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, View, FlatList, StyleSheet, Picker } from 'react-native';
import { NavigationActions } from 'react-navigation';
import ListItem from './ListItem'

// function getRecentItemsformState(list){
//   var RecentList=[];
//   list.data.forEach(element => {
//     if(list.recents.indexOf(element.id) >=0){
//       RecentList.push(element);

//     }
//   });
// }
const RecentItemsList = ({groc }) => (
  <View>
    {<FlatList
      data={groc.data}
      renderItem={({ item }) => (
        <ListItem item={item} />
      )}
    />}
  </View>
);

RecentItemsList.propTypes = {
  groc: PropTypes.object.isRequired, 
};

const mapStateToProps = state => ({
  groc: state.groc,
});



export default connect(mapStateToProps)(RecentItemsList);

