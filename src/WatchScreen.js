/**
 * Created by julia on 6/17/2017.
 */

import io from "socket.io-client";
import React from "react";
import {Button, Image, View} from "react-native";
import styles from "./Styles";
import {Config} from "./config";


export default class WatchStream extends React.Component {
    static navigationOptions = {
        tabBarVisible: true,
        tabBarLabel: 'LiveStream',
        tabBarIcon: ({tintColor}) => (
            <Image source={require('./img/icon-stream.png')}
                   style={[styles.icon]}
            />
        ),
    };

    joinRoom = (roomName) => {
        this.socket.emit('join', {roomName: roomName})
    };

    constructor() {
        super();
        this.socket = io.connect(Config.SIGNALING_SERVER);
    }


    render() {
        return (
            <View>
                <Button onPress={() => this.joinRoom('jw')} title="Join room"/>
            </View>
        )
    }
}
