/**
 * Created by julia on 6/17/2017.
 */

import Reactotron from "reactotron-react-native";

Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
