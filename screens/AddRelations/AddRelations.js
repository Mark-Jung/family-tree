import React, { Component } from 'react';
import { AppRegistry, Button, Dimensions, View, Text,  } from 'react-native';
import { Body, CheckBox, Container, Content, Form, Icon, Input, Item, Label, ListItem, Picker } from 'native-base';
import { NavigationActions } from 'react-navigation';
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
    
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined,
            deceased: false,
            step: false, 
            adopted: false,
            first: undefined,
            last: undefined, 
            birth: undefined,
            death: undefined,
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }

    deceasedToggle = () => {
        if (this.state.deceased){
            this.setState({deceased: false});
        } else {
            this.setState({deceased: true});
        }
    }

    stepToggle = () => {
        if (this.state.step){
            this.setState({step: false});
        } else {
            this.setState({step: true});
        }
    }

    adoptedToggle = () => {
        if (this.state.adopted){
            this.setState({adopted: false});
        } else {
            this.setState({adopted: true});
        }
    }

    render() {
        const toDetails = NavigationActions.navigate({
            routeName: 'Details',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'Details' }),
        });
        
        return (
            <Container>
            <View style={{
                
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
                <Content>
                <Form>
                    <Item floatingLabel style={{
                        width: 150,
                        paddingBottom: 5
                    }}>
                        <Label style={{color: '#9ab2ce'}}>First Name</Label>
                        <Input onChangeText={(text) => this.setState({first: text})}
                                value={this.state.first}/>
                    </Item>
                </Form>
                </Content>
                
                <Content>
                <Form>
                    <Item floatingLabel floatingLabel style={{
                        width: 150,
                        paddingBottom: 5
                    }}>
                        <Label style={{color: '#9ab2ce'}}>Last Name</Label>
                        <Input onChangeText={(text) => this.setState({last: text})}
                                value={this.state.last}/>
                    </Item>
                </Form>
                </Content>
            </View>

            <View style={{
                
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
                <Content>
                <Form>
                    <Item floatingLabel style={{
                        paddingBottom: 5,
                        marginTop: 5
                    }}>
                        <Label style={{color: '#9ab2ce'}}>Birth Year</Label>
                        <Input onChangeText={(text) => this.setState({first: text})}
                                value={this.state.birth}/>
                    </Item>
                </Form>
                </Content>
                <Content>
                    <ListItem style={{marginTop: 21, 
                            borderBottomColor: 'white'
                        }}>
                        <CheckBox 
                            checked={this.state.deceased}
                            color="gray"
                            onPress={this.deceasedToggle}
                            />
                        <Body>
                        <Text> deceased</Text>
                        </Body>
                    </ListItem>
                </Content>
                
                <Content style={{marginRight: 12}}>
                <Form>
                    <Item floatingLabel style={{
                        paddingBottom: 5,
                        marginTop: 5,
                        marginLeft: 0,
                    }}>
                        <Label style={{color: '#9ab2ce'}}>Death Year</Label>
                        <Input onChangeText={(text) => this.setState({death: text})}
                                value={this.state.death}
                                disabled={!this.state.deceased}/>
                    </Item>
                </Form>
                </Content>
            </View>

            <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholderStyle={{ color: "#9ab2ce" }}
                            style={{ width: Dimensions.get('window').width - 10,
                                    marginTop: 10}}
                            placeholder="Preferred Gender"
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            
                            <Picker.Item label="Male" value="key1" />
                            <Picker.Item label="Female" value="key2" />
                            <Picker.Item label="Other" value="key3" />
                        </Picker>
                    </Item> 

            <View style={{
                
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginLeft: 13,
              }}>
                <Text style={{
                    marginTop: 44,
                }}>
                    This person is the
                </Text>
                <Content>
                    <ListItem style={{marginTop: 30, 
                            borderBottomColor: 'white',
                            width: 70,
                            marginLeft: 9,
                    }}>
                        <CheckBox 
                            checked={this.state.step}
                            color="gray"
                            onPress={this.stepToggle}/>
                        <Body>
                        <Text> step</Text>
                        </Body>
                    </ListItem>
                </Content>
                <Content>
                    <ListItem style={{marginTop: 30, 
                            borderBottomColor: 'white',
                            marginLeft: 0,
                            marginTop: 24,
                        }}>
                        <CheckBox
                            checked={this.state.adopted}
                            color="gray"
                            onPress={this.adoptedToggle}/>
                        <Body>
                        <Text style={{marginLeft: 3}}>adopted or adoptive</Text>
                        </Body>
                    </ListItem>
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