/**
 * Created by julia on 6/11/2017.
 */
import React from "react";
import HomeScreen from "./HomeScreen";
import StreamScreen from "./StreamScreen";
import NotificationScreen from "./NotificationScreen";
import ProfileScreen from "./ProfileScreen";
import {TabNavigator} from "react-navigation";
import WatchScreen from "./WatchScreen";

const Main = TabNavigator({
    Home: {screen: HomeScreen},
    // Explore: {screen: ExploreScreen},
    Stream: {screen: StreamScreen},
    Notification: {screen: NotificationScreen},
    Profile: {screen: ProfileScreen},
    Watch: {screen: WatchScreen}
}, {
    tabBarOptions: {
        activeTintColor: '#e91e63',
        showIcon: true,
        showLabel: false,
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: "rgba(8,80,150,1)",
        },
    }
});

export default Main