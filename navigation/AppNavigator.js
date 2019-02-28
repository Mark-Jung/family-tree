import React from 'react';
import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import {
    Details,
    Relations,
    AddRelations,
} from './../screens';

const MainStack = createStackNavigator({
    Relations: {
        screen: Relations,
    },
    Details: {
        screen: Details,
    },
    AddRelations: {
        screen: AddRelations,
    }
});
  

const Main = createAppContainer(MainStack);

export default Main;