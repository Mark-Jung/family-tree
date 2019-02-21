import React from 'react';
import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import {
    Details,
    Relations,
} from './../screens';

const MainStack = createStackNavigator({
    Relations: {
        screen: Relations,
    },
    Details: {
        screen: Details,
    }
});
  

const Main = createAppContainer(MainStack);

export default Main;