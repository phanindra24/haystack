import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const MyFlatlist = ({ increment, decrement, shoppingliststate }) => (
  
  <View>
  <Text>{shoppingliststate}</Text>
  <Button
    title={shoppingliststate==3 ? 'three':'three?'}
    onPress={increment}
  />
  </View>
);


const mapStateToProps = state => ({
  shoppingliststate : state.displayShoppingList.value,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'Increment' }),
  decrement: () => dispatch({ type: 'Decrement' }),
});

export default connect(mapStateToProps,mapDispatchToProps)(MyFlatlist);
