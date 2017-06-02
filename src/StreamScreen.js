/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * npm install --save react-navigation
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import PresentStream from "./PresentStream";
import styles from "./Styles";

export default class StreamScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: 'LiveStream',
    tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-stream.png')}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        return (
                <View style={styles.container}>
                
                </View>
                );
    }
}

