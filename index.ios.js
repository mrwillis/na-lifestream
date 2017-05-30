/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * npm install --save react-navigation
 * npm install react-native-webrtc --save
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
import PresentStream from "./src/PresentStream";

import HomeScreen from "./src/HomeScreen";
import ExploreScreen from "./src/ExploreScreen";
import StreamScreen from "./src/StreamScreen";
import NotificationScreen from "./src/NotificationScreen";
import ProfileScreen from "./src/ProfileScreen";

import styles from "./src/Styles";

const AwesomeProject = TabNavigator({
                                    Home: {screen: HomeScreen},
                                    Explore: {screen: ExploreScreen},
                                    Stream: {screen: StreamScreen},
                                    Notification: {screen: NotificationScreen},
                                    Profile: {screen: ProfileScreen},
                                    }, {
                                    tabBarOptions: {
                                        activeTintColor: '#e91e63',
                                        showIcon:true,
                                        showLabel:false,
                                        labelStyle: {
                                            fontSize: 12,
                                        },
                                        style: {
                                            backgroundColor: 'blue',
                                        },
                                    }
                                    });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
