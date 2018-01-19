import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Text, View, FlatList, StyleSheet, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


const ListItem = ({ item, increment, decrement }) => (
    <View style={{ flexDirection: 'row' }}>
        <Icon.Button name="circle-with-plus" size={30} onPress={() => increment(item.id)}></Icon.Button>
        <Text style={styles.item}>{item.key}</Text>
        <Text style={styles.itemCount}>{item.count}</Text>
        <Button style={styles.decrementButton} title={'-'} onPress={() => decrement(item.id)} />
    </View>
);

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,  
};

const mapDispatchToProps = dispatch => ({
    increment: (id) => dispatch({ type: 'Increment', id }),
    decrement: (id) => dispatch({ type: 'Decrement', id }),
});

export default connect(null,mapDispatchToProps)(ListItem);


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
    // increment:{
    //   color:'#007AFF',
    //   backgroundColor:'#000000',
    //   marginLeft:0,
    //   marginRight:0
    // },
    decrementButton: {
        alignSelf: 'flex-end',
    }
});
