import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text h1>Paramètres</Text>
            </View>
        )
    }
}