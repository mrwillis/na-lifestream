Extra stuff you must to do run on your environment apart from npm install.

WebRTC native:

- iOS: https://github.com/oney/react-native-webrtc/blob/master/Documentation/iOSInstallation.md
- Android: https://github.com/oney/react-native-webrtc/blob/master/Documentation/AndroidInstallation.md

## Using two devices

If you are using two devices, it's important that you only try to debug on one device. Otherwise,
everytime you reload the app on one device, the other device will crash with some cryptic error about
the socket being disconnected. So make sure you select `Debug JS Remotely` on only one device.

## Using Reactotron

If you are using android, you need to do the following steps:

For one device:

- `adb reverse tcp:9090 tcp:9090` to port forward port `9090` on the device to port `9090` on the host PC

For two devices:

- First figure out which device you wish to debug. I recommend the physical device. To find the address of the device, run
`adb devices`. You should see two devices, one with an IP and port and the other that looks like a MAC address.
Pick the MAC address and do this: `adb -s [ADDRESS] reverse tcp:9090 tcp:9090`

## Configuring with the signaling server

Everytime you join a new Wi-Fi network, you will get assigned an IP in the network. It will usually be something like `192.168.0.#`
In your `config.js` file, you need to change the IP to your network IP.


