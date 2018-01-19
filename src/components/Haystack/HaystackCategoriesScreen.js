import React from 'react';
import { Text, Image, View, FlatList, SectionList, TouchableHighlight, Button, StyleSheet } from 'react-native';


class HaystackCategoriesScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'CATEGORIES',
    };

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        { title: 'D', data: ['Devin'] },
                        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
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
