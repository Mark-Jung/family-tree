import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';

const {
    flatListStyle
} = styles;

class DetailsComponent extends Component {

    render() {
        return (
            <View style={flatListStyle}>
                <Text>
                    I'm details
                </Text>
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