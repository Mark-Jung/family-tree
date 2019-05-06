import React, { Component } from 'react';
import { AppRegistry, Dimensions, View, Text, ScrollView, TouchableNativeFeedback, Platform } from 'react-native';
import { Body, CheckBox, Container, Content, Form, Icon, Input, Item, Label, ListItem, Picker } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Button from 'apsl-react-native-button'
import CustomHeader from '../../components/Common/CustomHeader'

import { connect } from 'react-redux';

import styles from './styles';

import {
    thunk_load_relation,
} from '../../ducks/relations';

const {
    flatListStyle
} = styles;

class LogInComponent extends Component {

    static navigationOptions = {
        title: 'Log In',
      };

    
    constructor(props) {
        super(props);
        this.state = {
            first: undefined,
            last: undefined, 
            birth_year: undefined,
            death_year: undefined,
            is_deceased: false,
            gender: undefined,
            is_step: false, 
            is_adopted: false,
            relation: undefined,
            related_to: undefined,
            notes: undefined,

            show_optional: false,

            birth_date: undefined,
            lives_in: undefined,
            nickname: undefined,
        };
    }
    onGenderChange(value: string) {
        this.setState({
            gender: value
        });
    }

    onRelatedToChange(value: string) {
        this.setState({
            relatedTo: value
        });
    }

    DeathYearInput = () => {
        return (
            
                <Content style={{marginRight: 12}}>
                    <Form>
                        <Item floatingLabel style={{
                            paddingBottom: 5,
                            marginTop: 5,
                            marginLeft: 0,
                        }}>
                            <Label style={{color: '#9ab2ce'}}>Death Year</Label>
                            <Input onChangeText={(text) => this.setState({death_year: text})}
                                    value={this.state.death_year}
                                    disabled={!this.state.is_deceased}/>
                        </Item>
                    </Form>
                    </Content>
        )
            
    }

    OptionalFieldsInput = () => {
        return (
            
                <Content style={{marginLeft: 13}}>
                    <Form>
                        <Item floatingLabel style={{
                            paddingBottom: 5,
                            marginTop: 5,
                            marginLeft: 0,
                        }}>
                            <Label style={{color: '#9ab2ce'}}>Birth date (mm/dd)</Label>
                            <Input onChangeText={(text) => this.setState({birth_date: text})}
                                    value={this.state.birth_date}/>
                        </Item>
                        <Item floatingLabel style={{
                            paddingBottom: 5,
                            marginTop: 5,
                            marginLeft: 0,
                        }}>
                            <Label style={{color: '#9ab2ce'}}>Place of Residence</Label>
                            <Input onChangeText={(text) => this.setState({lives_in: text})}
                                    value={this.state.lives_in}/>
                        </Item>
                        <Item floatingLabel style={{
                            paddingBottom: 5,
                            marginTop: 5,
                            marginLeft: 0,
                        }}>
                            <Label style={{color: '#9ab2ce'}}>Nickname</Label>
                            <Input onChangeText={(text) => this.setState({nickname: text})}
                                    value={this.state.nickname}/>
                        </Item>
                    
                    </Form>
                    </Content>
        )
            
    }

    render() {
        
        const toDetails = NavigationActions.navigate({
            routeName: 'Details',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'Details' }),
        });
        
        const toAddRelations = NavigationActions.navigate({
            routeName: 'AddRelations',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'AddRelations' }),
        });



        return (
            <Container>
            <ScrollView>
            <View style={{
                
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
                <Content>
                <Form>
                    <Item floatingLabel style={{
                        
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
                        
                        paddingBottom: 5
                    }}>
                        <Label style={{color: '#9ab2ce'}}>Last Name</Label>
                        <Input onChangeText={(text) => this.setState({last: text})}
                                value={this.state.last}/>
                    </Item>
                </Form>
                </Content>
            </View>

            </ScrollView>
            </Container>
        );
    }
}



export { LogInComponent };


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export const LogIn = connect(mapStateToProps, mapDispatchToProps)(LogInComponent);