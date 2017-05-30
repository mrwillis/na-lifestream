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


export default class NotificationScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: 'Notification',
    tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-notification.png')}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        return (
                <View>
                <Text>Notification Page Here</Text>
                <Image source={require('./img/sample-notification.png')} style={{width: 380, height: 560}}/>
                </View>
                );
    }
}
