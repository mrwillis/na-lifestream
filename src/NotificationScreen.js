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
                NOTIFICATION
                </Text>
                <Image source={require('./img/sample-notification.png')} style={{width: 380, height: 560}}/>
              </View>
            </ScrollView>
            );
    }
}
