import React from 'react'
import {
    Platform,
} from 'react-native';
import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStream,
    MediaStreamTrack,
    getUserMedia
} from 'react-native-webrtc'


import io from 'socket.io-client'

/**
 * Represents the stream being presented
 */
export default class PresentStream extends React.Component {
    configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
    socket = {};

    state = {
        presenterUser: '',
        localStream: {}
    };

    constructor() {
        super();
        this.getLocalStream(true);
        // this.socket = io.connect('http://192.168.56.1');
        // this.setupSocketHooks()
    }

    setupSocketHooks() {
        this.socket.on('connect', (data) => {
            console.log('connected');
            this.getLocalStream(true)
        })
    }


    /**
     * Gets the presenter's stream
     * @param isFront
     */
    getLocalStream = (isFront) => {
        let videoSourceId;

        // on android, you don't have to specify sourceId manually, just use facingMode
        // uncomment it if you want to specify
        if (Platform.OS === 'ios') {
            MediaStreamTrack.getSources(sourceInfos => {
                console.log("sourceInfos: ", sourceInfos);

                for (let i = 0; i < sourceInfos.length; i++) {
                    const sourceInfo = sourceInfos[i];
                    if (sourceInfo.kind === "video" && sourceInfo.facing === (isFront ? "front" : "back")) {
                        videoSourceId = sourceInfo.id;
                    }
                }
            });
        }
        getUserMedia({
            audio: true,
            video: {
                mandatory: {
                    minWidth: 640, // Provide your own width, height and frame rate here
                    minHeight: 360,
                    minFrameRate: 30,
                },
                facingMode: (isFront ? "user" : "environment"),
                optional: (videoSourceId ? [{sourceId: videoSourceId}] : []),
            }
        }, (stream) => {
            console.log('getUserMedia success', stream);
            this.setState({
                localStream: stream
            })
        }, (error) => {
            console.log('error')
        });
    };

    render() {
        return ( <RTCView streamURL={this.state.localStream.toUrl()}/> )
    }
}



