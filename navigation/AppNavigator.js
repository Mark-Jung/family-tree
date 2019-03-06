import React from 'react';
import { 
    createStackNavigator,
    createAppContainer,
    defaultNavigationOptions,
} from 'react-navigation';

import {
    Details,
    Relations,
    AddRelations,
} from './../screens';

const MainStack = createStackNavigator
({
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