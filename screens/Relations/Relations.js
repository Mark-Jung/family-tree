import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import CustomHeader from '../../components/Common/CustomHeader'

import { connect } from 'react-redux';

import styles from './styles';

const {
    flatListStyle
} = styles;

class RelationsComponent extends Component {
    static navigationOptions = {
        title: 'Relations',
      };
    render() {
        const toDetails = NavigationActions.navigate({
            routeName: 'Details',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'Details' }),
        });
        return (
            <View style={flatListStyle} >
                <Text>
                    {this.props.error_message}
                </Text>

                <Button
                    title="go to details"
                    onPress={() => this.props.navigation.dispatch(toDetails)}
                >

                </Button>
            </View>
        );
    }
}

export { RelationsComponent };

const mapStateToProps = (state, ownProps) => {
    const { relations } = state;
    const { error_message } = relations;
    return {
        ...ownProps,
        error_message,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export const Relations = connect(mapStateToProps, mapDispatchToProps)(RelationsComponent);