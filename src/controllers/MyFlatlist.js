import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, View, FlatList, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';


const MyFlatlist = ({ increment, decrement, shoppingliststate }) => (

  <View>
    <Button
      title={'Change List'}
      onPress={increment}
    />
    {<FlatList
      data={shoppingliststate}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    />}
  </View>


);


const mapStateToProps = state => ({
  shoppingliststate: state.displayShoppingList,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'Increment' }),
  decrement: () => dispatch({ type: 'Decrement' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyFlatlist);

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
