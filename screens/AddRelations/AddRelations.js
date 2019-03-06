import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Picker, Icon, ListItem, CheckBox, Body } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

import styles from './styles';

const {
    flatListStyle
} = styles;

class AddRelationsComponent extends Component {

    onValueChange2 = () => {

    }

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
            <Container>
            <Header />
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>First Name</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Last Name</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Birth Year</Label>
                        <Input />
                    </Item>

                    {/* 
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Preferred Gender"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Male" value="key0" />
                            <Picker.Item label="Female" value="key1" />
                            <Picker.Item label="Other" value="key2" />
                        </Picker>
                    </Item> */}

                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                        <   Text>deceased</Text>
                        </Body>
                    </ListItem>

                    <Text>
                        This person is the 
                    </Text>

                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>step</Text>
                        </Body>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>adopted/adoptive</Text>
                        </Body>
                    </ListItem>
                    
                </Form>
                </Content>
            </Container>

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