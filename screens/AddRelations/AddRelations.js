import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

import styles from './styles';

const {
    flatListStyle
} = styles;

class AddRelationsComponent extends Component {

    render() {
        const toDetails = NavigationActions.navigate({
            routeName: 'Details',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'Details' }),
        });
        
        return (
            <View style={flatListStyle}>
                <Text>
                    I'm AddRelations
                </Text>

                <Button
                    title="go to details"
                    onPress={() => this.props.navigation.dispatch(toDetails)}
                ></Button>
            </View>
        );
    }
}

export { AddRelationsComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export const AddRelations = connect(mapStateToProps, mapDispatchToProps)(AddRelationsComponent);