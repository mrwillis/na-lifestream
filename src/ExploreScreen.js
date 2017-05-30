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

export default class ExploreScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: 'Explore',
    tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-explore.png')}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        return (
                <View>
                <Text>Explore Page</Text>
                <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
                />
                <Image source={require('./img/sample-explore.png')} style={{width: 380, height: 600}}/>
                </View>
                );
    }
}

