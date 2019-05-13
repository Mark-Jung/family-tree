import React, { Component } from 'react';
import { AppRegistry, Dimensions, View, Text, ScrollView, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, Platform, Image } from 'react-native';
import { Body, CheckBox, Container, Content, Form, Icon, Input, Item, Label, ListItem, Picker } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Button from 'apsl-react-native-button'


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
        //title: 'Log In',
        header: null,
        headerVisible: false,
      };

    
    /* To make this page the initial page and no longer callable later/no longer part of the stack
    
        this.props.navigation.dispatch(
            NavigationActions.reset({
             index: 0,
             actions: [NavigationActions.navigate({ routeName: "LogIn" })]
            })
           );*/
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

        const toRelations = NavigationActions.navigate({
            routeName: 'Relations',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'Relations' }),
        });


        setTimeout(() => {
            this.props.navigation.navigate('Relations') 
        }, 1000);

        return (
            <View style={{flex:1}}>
                 <Image
                    style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,}}
                    source={require('./FAM_logo.png')}
                    resizeMode='contain'
                    />
            </View>
            /*<Container>
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
            </Container>*/

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