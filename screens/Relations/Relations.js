import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Container, Header, Content, Left, List, ListItem, Right } from 'native-base';
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
 
            <Container>
            
            <Content>
            <List>
                <ListItem onPress={() => this.props.navigation.dispatch(toDetails)}>
                    <Left><Text style={{fontSize: 20}}>Amy Yang</Text></Left> 
                    <Right><Text style={{fontWeight: "bold", color: '#DB9872'}}>Me</Text></Right>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.dispatch(toDetails)}>
                    <Left><Text style={{fontSize: 20}}>Lexi Ryan</Text></Left> 
                    <Right><Text style={{fontWeight: "bold", color: '#DB9872'}}>Mother</Text></Right>
                </ListItem>
                
            </List>
            </Content>
            </Container>
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