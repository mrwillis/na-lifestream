Extra stuff you must to do run on your environment apart from npm install.

WebRTC native:

- iOS: https://github.com/oney/react-native-webrtc/blob/master/Documentation/iOSInstallation.md
- Android: https://github.com/oney/react-native-webrtc/blob/master/Documentation/AndroidInstallation.md

## Using Reactotron

If you are using android, you need to do the following steps:

For one device:

- `adb reverse tcp:9090 tcp:9090` to port forward port `9090` on the device to port `9090` on the host PC

For two devices:

- First figure out which device you wish to debug. I recommend the physical device. To find the address of the device, run
`adb devices`. You should see two devices, one with an IP and port and the other that looks like a MAC address.
Pick the MAC address and do this: `adb -s [ADDRESS] reverse tcp:9090 tcp:9090`


