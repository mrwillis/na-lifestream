import React from "react";
import {RTCIceCandidate, RTCPeerConnection, RTCSessionDescription} from "react-native-webrtc";

import io from "socket.io-client";
import Reactotron from "reactotron-react-native";
import {Config} from "../config";


export class Stream extends React.Component {
    configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
    socket = {};
    /**
     * Handles when the client generates ICE candidates
     * @param event
     */
    gotIceCandidate = (event) => {
        if (event.candidate) {
            this.socket.emit('ice-candidate-exchange', {roomName: 'jw', candidate: event.candidate});
        }
    };
    /**
     * Handles when the client receives remote SDPs
     * @param sdp
     */
    gotRemoteDescription = (sdp) => {
        this.conn.setRemoteDescription(new RTCSessionDescription(sdp), () => {
            if (sdp.type === 'offer') {
                this.conn.createAnswer(this.gotLocalDescription, (error) => {
                    Reactotron.error(error)
                })
            }
        }, (error) => {
            Reactotron.error(error)
        })
    };
    /**
     * Handles when the client generates SDPs
     * @param description
     */
    gotLocalDescription = (description) => {
        Reactotron.log('Got description');
        this.conn.setLocalDescription(description, () => {
            this.socket.emit('sdp', {sdp: description, roomName: 'jw'})
        }, () => {
            Reactotron.error('Set local description error.')
        }, {})
    };
    /**
     * Handles when the client receives remote ice candidates
     * @param candidate
     */
    gotRemoteIceCandidate = (candidate) => {
        this.conn.addIceCandidate(new RTCIceCandidate(candidate))
    }

    constructor() {
        super();
        this.socket = io.connect(Config.SIGNALING_SERVER);
        this.conn = new RTCPeerConnection(this.configuration);

        this.conn.onicecandidate = this.gotIceCandidate;
        this.socket.on('ice-candidate-exchange', this.gotRemoteIceCandidate);
        this.socket.on('sdp', this.gotRemoteDescription)
    }

}
