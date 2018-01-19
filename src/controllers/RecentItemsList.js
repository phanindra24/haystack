import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, View, FlatList, StyleSheet, Picker } from 'react-native';
import { NavigationActions } from 'react-navigation';
import ListItem from './ListItem'


const RecentItemsList = ({state_RecentItems }) => (
  <View>
    {<FlatList
      data={state_RecentItems}
      renderItem={({ item }) => (
        <ListItem item={item} />
      )}
    />}
  </View>
);

RecentItemsList.propTypes = {
  state_RecentItems: PropTypes.array.isRequired, 
};

const mapStateToProps = state => ({
  state_RecentItems: state.state_RecentItems,
});



export default connect(mapStateToProps)(RecentItemsList);

