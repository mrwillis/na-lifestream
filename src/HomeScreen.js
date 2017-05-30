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

export default class HomeScreen extends React.Component {
    static navigationOptions = {
    tabBarVisible: true,
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-home.png')}
                                    //source={{uri: 'http://findicons.com/files/icons/2330/open_source_icons_gcons/32/home.png'}}
                                    //style={[styles.icon, {tintColor: tintColor}]}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        let pic1 = {
        uri: 'https://cdn.dribbble.com/users/964850/screenshots/2296322/attachments/434125/work_2.png'
        };
        let pic2 = {
        uri: 'https://cdn.dribbble.com/users/964850/screenshots/2296322/attachments/434124/work1_allist.png'
        };
        let pic3 = {
        uri: 'https://cdn.dribbble.com/users/964850/screenshots/2296322/attachments/434127/work2_alllist.png'
        };
        return (
                <View>
                <Text style={styles.instructions}>
                To get started{'\n'}
                Go to Explore to Follow Some Users
                </Text>
                <Button
                onPress={() => this.props.navigation.navigate('Explore')}
                title="Explore"
                />
                <Image
                source={require('./img/sample-home.png')}
                //source ={pic3}
                style={{width: 380, height: 600}}/>
                </View>
                );
    }
}
