import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

import styles from './styles';

const {
    flatListStyle
} = styles;


class DetailsComponent extends Component {

    render() {
        const toAddRelations = NavigationActions.navigate({
            routeName: 'AddRelations',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'AddRelations' }),
        });
        
        
        return (
            <View style={flatListStyle}>
                <Text>
                    I'm details
                </Text>
                <Button
                    title="go to AddRelations"
                    onPress={() => this.props.navigation.dispatch(toAddRelations)}
                ></Button>
            </View>
        );
    }
}

export { DetailsComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);