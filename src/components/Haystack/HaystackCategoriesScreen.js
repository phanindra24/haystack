import React from 'react';
import { Text, Image, View, FlatList, SectionList, TouchableHighlight, Button, StyleSheet } from 'react-native';
import LoginStatusMessage from '../../controllers/LoginStatusMessage';
import AuthButton from '../../controllers/AuthButton';
import CategoriesList from '../../controllers/CategoriesList';


class HaystackCategoriesScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'CATEGORIES',
    };

    render() {
        return (
            <View style={styles.container}>
                <CategoriesList />
                <LoginStatusMessage />
                <AuthButton />
            </View>
        );
    }
}

module.exports = HaystackCategoriesScreen;

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
