import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from 'apsl-react-native-button'
import CustomHeader from '../../components/Common/CustomHeader'

import { connect } from 'react-redux';

import styles from './styles';

const {
    flatListStyle
} = styles;

class AddRelationsComponent extends Component {
    static navigationOptions = {
        title: 'Add Relation',
      };
    render() {
        
        const toRelations = NavigationActions.navigate({
            routeName: 'Relations',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'Relations' }),
        });
        
        const toAddRelations = NavigationActions.navigate({
            routeName: 'AddRelations',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'AddRelations' }),
        });

        return (
            <View style={flatListStyle} style={{flex: 1}}>
                <ScrollView>
                    <Text>
                        I'm AddRelations
                    </Text>
                </ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                    <View style={{width: 150}}>
                        <Button
                            style={{backgroundColor: '#DB9872', borderColor: '#DB9872', borderRadius: 22,}}
                            textStyle={{color: 'white'}}
                            onPress={() => this.props.navigation.dispatch(toAddRelations)}>
                            Add Another
                        </Button>
                    </View>
                    <View style={{width: 150}}>
                        <Button
                            style={{backgroundColor: '#94878F', borderColor: '#94878F', borderRadius: 22,}}
                            textStyle={{color: 'white'}}
                            onPress={() => this.props.navigation.dispatch(toRelations)}>
                            Done
                        </Button>
                    </View>
                </View>
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