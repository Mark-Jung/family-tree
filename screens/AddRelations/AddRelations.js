import React, { Component } from 'react';
import { View, Text, Button, AppRegistry } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Picker, Icon, ListItem, CheckBox, Body } from 'native-base';
import { NavigationActions } from 'react-navigation';
import CustomHeader from '../../components/Common/CustomHeader'

import { connect } from 'react-redux';

import styles from './styles';

const {
    flatListStyle
} = styles;

class AddRelationsComponent extends Component {

    onValueChange2 = () => {

    }

    static navigationOptions = {
        title: 'Add Relation',
      };
    render() {
        const toDetails = NavigationActions.navigate({
            routeName: 'Details',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'Details' }),
        });
        
        return (
            <Container>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
                <Content>
                <Form>
                    <Item floatingLabel style={{
                        width: 150,
                    }}>
                        <Label>First Name</Label>
                        <Input />
                    </Item>
                </Form>
                </Content>
                <Content>
                <Form>
                    <Item floatingLabel floatingLabel style={{
                        width: 150,
                    }}>
                        <Label>Last Name</Label>
                        <Input />
                    </Item>
                </Form>
                </Content>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
                <Content>
                <Form>
                    <Item floatingLabel >
                        <Label>Birth Year</Label>
                        <Input />
                    </Item>
                </Form>
                </Content>
                <Content>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                        <Text>deceased</Text>
                        </Body>
                    </ListItem>
                </Content>
                <Content>
                <Form>
                    <Item floatingLabel >
                        <Label>Death Year</Label>
                        <Input />
                    </Item>
                </Form>
                </Content>
            </View>
            
            </Container>
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