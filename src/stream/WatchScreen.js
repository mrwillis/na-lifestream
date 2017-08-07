/**
 * Created by julia on 6/17/2017.
 */

import React from "react";
import {Button, Image, View} from "react-native";
import styles from "../Styles";
import {RTCView} from "react-native-webrtc";
import Reactotron from "reactotron-react-native";
import {Stream} from "./Stream";


export default class WatchStream extends Stream {
    static navigationOptions = {
        tabBarVisible: true,
        tabBarLabel: 'LiveStream',
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../img/icon-stream.png')}
                   style={[styles.icon]}
            />
        ),
    };

    state = {
        remoteStream: null
    };

    joinRoom = (roomName) => {
        this.socket.emit('join', {roomName: roomName})
    };
    gotRemoteStream = (event) => {
        Reactotron.log('got remote stream');
        this.setState({
            remoteStream: event.stream.toURL()
        })
    };

    constructor() {
        super();
        this.conn.onaddstream = this.gotRemoteStream;
    }

    createOffer() {
        this.conn.createOffer(this.gotLocalDescription, (error) => {
            Reactotron.error(error)
        });
    }

    render() {
        return (
            <View>
                <Button onPress={() => this.joinRoom('jw')} title="Join room"/>
                <Button onPress={() => this.createOffer()} title="Make offer"/>
                <RTCView streamURL={this.state.remoteStream} style={{height: 200, width: 200}} mirror={true}/>
            </View>
        )
    }
}
