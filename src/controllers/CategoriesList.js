import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, View, FlatList,SectionList, StyleSheet, Picker } from 'react-native';
import { NavigationActions } from 'react-navigation';
import ListItem from './ListItem'

function getCategoriesfromState(list){
    var catList=[];
    var catWithItemsList=[];
    list.forEach(element => {
        var catIndex= catList.indexOf(element.cat)
        if(catIndex < 0){
            catList.push(element.cat);
            catWithItemsList.push({title : element.cat, data :[element]})
        }else{
            catWithItemsList[catIndex].data.push(element)
        }
    });
    return catWithItemsList;
}

const CategoriesList = ({ groc }) => (
    <View>
        {/* {<FlatList
            data={getCategoriesfromState(groc)}
            renderItem={({ item }) => (
                <ListItem item={item} />
            )}
        />} */}
        <SectionList
                    sections={getCategoriesfromState(groc)}
                    renderItem={({ item }) => <ListItem item={item} />}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader} >{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
    </View>
);

CategoriesList.propTypes = {
    groc: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    groc: state.groc,
});



export default connect(mapStateToProps)(CategoriesList);

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })