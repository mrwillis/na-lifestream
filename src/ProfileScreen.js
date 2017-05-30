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
import styles from "./Styles";

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-profile.png')}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        return (
                <View>
                <Text>Profile Page</Text>
                <Image source={require('./img/sample-profile.png')} style={{width: 380, height: 600}}/>
                </View>
                );
    }
}
