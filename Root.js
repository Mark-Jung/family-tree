import React, { Component } from 'react';
import { Platform, View, StatusBar, StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  