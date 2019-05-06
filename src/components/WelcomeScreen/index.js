//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {};
export default class WelcomeScreen extends Component<Props> {
    render () { 
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Test React Native Navigation</Text>
                <Text style={styles.native}>Welcome React Native</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    welcome: {
        flex: 1,
        backgroundColor: 'chartreuse',
        color: 'white',
    },
    native: {
        flex: 1,
        backgroundColor: 'crimson',
        color: 'white'
    }
});