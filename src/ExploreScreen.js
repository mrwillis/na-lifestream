/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TextInput,
} from 'react-native'
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
//import MapView from 'react-native-maps';
import styles from "./Styles";

export default class ExploreScreen extends React.Component {
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
            <ScrollView 
                  horizontal={false}>
                <View style={styles.container}>
                  <Text
                    style={{
                      fontSize:  12,
                    }}>
                    {'\n'} 
                  </Text>
                <TextInput
                  style={{
                    height: 30, 
                    width:  340 ,
                    borderWidth: 1,
                    borderColor: "rgba(109,148,208,1)",
                    backgroundColor:  "rgba(109,148,208,1)",
                    left:  20,
                  }}
                  placeholder={"  Explore Here"}
                  placeholderTextColor={"rgba(198,198,204,1)"}
                  onChangeText={(text) => {this.setState({text})}}
                  onSubmitEditing={() => {this.setState({text: ''})}}
                  value={(this.state && this.state.text) || ''}
                />
                <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
                />
                <Image source={require('./img/sample-explore.png')} style={{width: 380, height: 600}}/>
              </View>
            </ScrollView>
            );
    }
}

