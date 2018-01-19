import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, View, FlatList, StyleSheet, Picker } from 'react-native';
import { NavigationActions } from 'react-navigation';
import ListItem from './ListItem'


const RecentItemsList = ({ increment, decrement, shoppingliststate }) => (

  <View>
    {<FlatList
      data={shoppingliststate}
      renderItem={({ item }) => (
        <ListItem item={item} onPressFirst={increment} onPressSecond={decrement} />
      )}
    />}
  </View>
);



const mapStateToProps = state => ({
  shoppingliststate: state.displayShoppingList,
});

const mapDispatchToProps = dispatch => ({
  increment: (id) => dispatch({ type: 'Increment', id }),
  decrement: (id) => dispatch({ type: 'Decrement', id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentItemsList);

