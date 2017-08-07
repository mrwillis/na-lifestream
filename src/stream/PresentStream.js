import React from "react";
import {Button, View} from "react-native";

import PropTypes from "prop-types";
import {getUserMedia, RTCView} from "react-native-webrtc";

import Reactotron from "reactotron-react-native";
import {Stream} from "./Stream";

export default class PresentStream extends Stream {

    static propTypes = {
        streamStyle: PropTypes.object
    };

    state = {
        presenterUser: '',
        localStream: null
    };

    constructor() {
        super();
        this.getLocalStream(true);
    }

    // applyToHost = (jw) => {
    //     Reactotron.log('feafaef');
    //     fetch(Config.SIGNALING_SERVER + '/create-room', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             roomName: jw,
    //             userName: 'Julian Wilson'
    //         })
    //     }).then(Utils.handleErrors).then(() => {
    //         // Server agrees we can make a new room. Now associate the socket connection with the specific namespace
    //         this.socket = io.connect(Config.SIGNALING_SERVER + '/' + jw);
    //         // And apply to be the host of the room
    //         this.socket.on('connect', () => {
    //             this.socket.emit('apply-to-host')
    //         });
    //
    //     }).catch((error) => {
    //         Reactotron.log(error)
    //     });
    // };

    joinRoom = (roomName) => {
        this.socket.emit('join', {roomName: roomName})
    };

    /**
     * Gets the presenter's stream
     * @param isFront
     */
    getLocalStream = (isFront) => {
        getUserMedia({
            audio: true,
            video: {
                mandatory: {
                    minWidth: 640, // Provide your own width, height and frame rate here
                    minHeight: 360,
                    minFrameRate: 30,
                },
                facingMode: (isFront ? "user" : "environment")
            }
        }, (stream) => {
            this.setState({
                localStream: stream.toURL()
            });
            this.conn.addStream(stream)
        }, (error) => {
            Reactotron.log(error)
        });
    };

    render() {
        return (
            <View>
                <Button onPress={() => this.joinRoom('jw')} title="Press to join room 'jw'"/>
                <RTCView streamURL={this.state.localStream} style={this.props.streamStyle} mirror={true}/>
            </View>
        )
    }
}



