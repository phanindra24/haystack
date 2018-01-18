import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, View, FlatList, StyleSheet, Picker } from 'react-native';
import { NavigationActions } from 'react-navigation';


const MyFlatlist = ({ increment, decrement, shoppingliststate, isLoggedIn }) => (

  <View>

    {<FlatList
      data={shoppingliststate}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row' }}>
        <Button
            title={'+'}
            onPress={()=>increment(item.id)}
          />
          <Text style={styles.item}>{item.key}</Text>
          
          <Text style={styles.itemCount}>{item.count}</Text>
          <Button style={styles.decrementButton}
            title={'-'}
            onPress={()=>decrement(item.id)}
          />
        </View>
      )}
    />}
  </View>


);


const mapStateToProps = state => ({
  shoppingliststate: state.displayShoppingList,
});

const mapDispatchToProps = dispatch => ({
  increment: (id) => dispatch({ type: 'Increment',id }),
  decrement: (id) => dispatch({ type: 'Decrement',id }),
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
    // marginLeft: 'auto'
  },
  itemCount: {
    padding: 10,
    fontSize: 18,
    height: 44,
    marginLeft: 'auto'
  },
  decrementButton:{
    alignSelf: 'flex-end',
  }
});
