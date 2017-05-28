/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * npm install --save react-navigation
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';


class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarVisible: true,
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-home.png')}
                                    //source={{uri: 'http://findicons.com/files/icons/2330/open_source_icons_gcons/32/home.png'}}
                                    //style={[styles.icon, {tintColor: tintColor}]}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        let pic1 = {
        uri: 'https://cdn.dribbble.com/users/964850/screenshots/2296322/attachments/434125/work_2.png'
        };
        let pic2 = {
        uri: 'https://cdn.dribbble.com/users/964850/screenshots/2296322/attachments/434124/work1_allist.png'
        };
        let pic3 = {
        uri: 'https://cdn.dribbble.com/users/964850/screenshots/2296322/attachments/434127/work2_alllist.png'
        };
        return (
                <View>
                <Text style={styles.instructions}>
                To get started{'\n'}
                Go to Explore to Follow Some Users
                </Text>
                <Button
                onPress={() => this.props.navigation.navigate('Explore')}
                title="Explore"
                />
                <Image
                source={require('./img/sample-home.png')}
                //source ={pic3}
                style={{width: 380, height: 600}}/>
                </View>
                );
    }
}

class ExploreScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: 'Explore',
    tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-explore.png')}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        return (
                <View>
                <Text>Explore Page</Text>
                <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
                />
                <Image source={require('./img/sample-explore.png')} style={{width: 380, height: 600}}/>
                </View>
                );
    }
}

class StreamScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: 'LiveStream',
    tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-stream.png')}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        return (
                <View style={styles.container}>
                <Image source={require('./img/sample-stream.png')} style={{width: 380, height: 680}}/>
                </View>
                );
    }
}

class NotificationScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: 'Notification',
    tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-notification.png')}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        return (
                <View>
                <Text>Notification Page Here</Text>
                <Image source={require('./img/sample-notification.png')} style={{width: 380, height: 560}}/>
                </View>
                );
    }
}

class ProfileScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
                                    <Image source={require('./img/icon-profile.png')}
                                    style={[styles.icon]}
                                    />
                                    ),
    };
    render() {
        return (
                <View>
                <Text>Profile Page</Text>
                <Image source={require('./img/sample-profile.png')} style={{width: 380, height: 600}}/>
                </View>
                );
    }
}

const AwesomeProject = TabNavigator({
                                    Home: {screen: HomeScreen},
                                    Explore: {screen: ExploreScreen},
                                    Stream: {screen: StreamScreen},
                                    Notification: {screen: NotificationScreen},
                                    Profile: {screen: ProfileScreen},
                                    }, {
                                    tabBarOptions: {
                                        activeTintColor: '#e91e63',
                                        showIcon:true,
                                        showLabel:false,
                                        labelStyle: {
                                            fontSize: 12,
                                        },
                                        style: {
                                            backgroundColor: 'blue',
                                        },
                                    }
                                    });



const styles = StyleSheet.create({
                                 container: {
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#F5FCFF',
                                 },
                                 welcome: {
                                    fontSize: 20,
                                    textAlign: 'center',
                                    margin: 10,
                                 },
                                 instructions: {
                                    textAlign: 'center',
                                    color: '#333333',
                                    marginBottom: 5,
                                 },
                                 icon: {
                                    width: 26,
                                    height: 26,
                                 },
                                 });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
