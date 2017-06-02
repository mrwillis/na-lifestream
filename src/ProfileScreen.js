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
    Image,
    ScrollView,
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
          <ScrollView 
                  horizontal={false}>
              <View style={styles.container}>
                  <Text
                    style={{
                      fontSize:  8,
                    }}>
                    {'\n'} 
                  </Text>
                  <Text
                    style={{
                      color: "rgba(255,255,255,1)",
                      fontSize: 20,
                      fontWeight: "500",
                      fontFamily: 'Helvetica Neue',
                  }}> 
                PROFILE
                </Text>
                <Image source={require('./img/sample-profile.png')} style={{width: 380, height: 600}}/>
              </View>
            </ScrollView>
            );
    }
}
