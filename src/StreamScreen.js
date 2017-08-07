/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * npm install --save react-navigation
 */

import React from "react";
import {Image, View} from "react-native";
import PresentStream from "./stream/PresentStream";
import styles from "./Styles";

export default class StreamScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'LiveStream',
        tabBarIcon: ({tintColor}) => (
            <Image source={require('./img/icon-stream.png')}
                   style={[styles.icon]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <PresentStream streamStyle={{height: 200, width: 200}}/>
            </View>
        );
    }
}

