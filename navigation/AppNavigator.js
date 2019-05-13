import React from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { 
    createStackNavigator,
    createAppContainer,
    defaultNavigationOptions,
} from 'react-navigation';

import {
    LogIn,
    Details,
    Relations,
    AddRelations,
} from './../screens';

const MainStack = createStackNavigator
({
    LogIn: {
        screen: LogIn,
    },
    Relations: {
        screen: Relations,
    },
    Details: {
        screen: Details,
    },
    AddRelations: {
        screen: AddRelations,
    },
}, {
    initialRouteName: 'Relations',
    defaultNavigationOptions: {
        headerStyle: {
        backgroundColor: '#86ADDB',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    },
});
  

const Main = createAppContainer(MainStack);
export default Main;