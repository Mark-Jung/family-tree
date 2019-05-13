import React, { Component } from 'react';
import { AppRegistry, Dimensions, View, Text, ScrollView, TouchableNativeFeedback, Platform } from 'react-native';
import { Body, CheckBox, Container, Content, Form, Icon, Input, Item, Label, ListItem, Picker } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Button from 'apsl-react-native-button'
import _ from 'lodash';
import CustomHeader from '../../components/Common/CustomHeader'

import { connect } from 'react-redux';

import styles from './styles';

import {
    thunk_load_relation,
} from '../../ducks/relations';

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

    populateRelations = () => {
        return _.map(this.props.all_relations, (item, index)=>{
            const toDetails = NavigationActions.navigate({
                routeName: 'Details',
              
                params: {},
              
                action: NavigationActions.navigate({ routeName: 'Details' }),
            });
            
            return (
                
                <Picker.Item label={item.first + " " + item.last} value={item.userid} />
            )
        })
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
            <Container style={{flex: 1,}}>
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
                        <Input onChangeText={(text) => this.setState({birth_year: text})}
                                value={this.state.birth_year}/>
                    </Item>
                </Form>
                </Content>

                <Content>
                    <ListItem style={{marginTop: 21, 
                            borderBottomColor: 'white'
                        }}>
                        <CheckBox 
                            checked={this.state.is_deceased}
                            color="gray"
                            onPress={() => this.setState({ is_deceased: !this.state.is_deceased })}
                            />
                        <Body>
                        <Text> deceased</Text>
                        </Body>
                    </ListItem>
                </Content>
                
                {this.state.is_deceased? this.DeathYearInput(): null}
                
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
                            selectedValue={this.state.gender}
                            onValueChange={this.onGenderChange.bind(this)}
                        >
                            
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Other" value="other" />
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
                            checked={this.state.is_step}
                            color="gray"
                            onPress={() => this.setState({ is_step: !this.state.is_step })} />
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
                            checked={this.state.is_adopted}
                            color="gray"
                            onPress={() => this.setState({ is_adopted: !this.state.is_adopted })} /> 
                        <Body>
                        <Text style={{marginLeft: 3}}>adopted or adoptive</Text>
                        </Body>
                    </ListItem>
                </Content>
                
            </View>


            <View style={{flexDirection: 'row', 
                            justifyContent: 'space-between',
                            marginLeft: 10,
                            marginRight: 10,}}>
                    <View style={{width: 85, }}>
                        <Button
                            style={this.state.relation == "parent" ? 
                                {backgroundColor: '#DB9872', 
                                borderColor: '#DB9872', 
                                borderRadius: 22,
                                borderWidth: 3,
                                height: 40,} : 
                                {backgroundColor: '#ffffff', 
                                borderColor: '#DB9872', 
                                borderRadius: 22,
                                borderWidth: 3,
                                height: 40,}}
                            textStyle={this.state.relation == "parent" ? {color: 'white', fontSize: 16} 
                                : {color: 'black', fontSize: 16}}
                            onPress={() => this.setState({relation: "parent"})}>
                            Parent
                        </Button>
                    </View>
                    <View style={{width: 85, }}>
                        <Button
                            style={this.state.relation == "child" ? 
                                {backgroundColor: '#DB9872', 
                                borderColor: '#DB9872', 
                                borderRadius: 22,
                                borderWidth: 3,
                                height: 40,} : 
                                {backgroundColor: '#ffffff', 
                                borderColor: '#DB9872', 
                                borderRadius: 22,
                                borderWidth: 3,
                                height: 40,}}
                            textStyle={this.state.relation == "child" ? {color: 'white', fontSize: 16} 
                                : {color: 'black', fontSize: 16}}
                            onPress={() => this.setState({relation: "child"})}>
                            Child
                        </Button>
                    </View>
                    <View style={{width: 85, }}>
                        <Button
                            style={this.state.relation == "sibling" ? 
                                {backgroundColor: '#DB9872', 
                                borderColor: '#DB9872', 
                                borderRadius: 22,
                                borderWidth: 3,
                                height: 40,} : 
                                {backgroundColor: '#ffffff', 
                                borderColor: '#DB9872', 
                                borderRadius: 22,
                                borderWidth: 3,
                                height: 40,}}
                            textStyle={this.state.relation == "sibling" ? {color: 'white', fontSize: 16} 
                                : {color: 'black', fontSize: 16}}
                            onPress={() => this.setState({relation: "sibling"})}>
                            Sibling
                        </Button>
                    </View>
                    <View style={{width: 85, }}>
                        <Button
                            style={this.state.relation == "partner" ? 
                                {backgroundColor: '#DB9872', 
                                borderColor: '#DB9872', 
                                borderRadius: 22,
                                borderWidth: 3,
                                height: 40,} : 
                                {backgroundColor: '#ffffff', 
                                borderColor: '#DB9872', 
                                borderRadius: 22,
                                borderWidth: 3,
                                height: 40,}}
                            textStyle={this.state.relation == "partner" ? {color: 'white', fontSize: 16} 
                                : {color: 'black', fontSize: 16}}
                            onPress={() => this.setState({relation: "partner"})}>
                            Partner
                        </Button>
                    </View>
                    
            </View>
            
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',}}>
                <Text style={{marginTop: 13, marginLeft: 10}}>of</Text> 
                <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholderStyle={{ color: "#9ab2ce" }}
                            style={{ width: Dimensions.get('window').width - 20,
                                    marginRight: 10}}
                            placeholder="an existing family member"
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.related_to}
                            onValueChange={this.onRelatedToChange.bind(this)}
                        >
                            <Picker.Item label="me" value="userID" />
                            {this.populateRelations()}
                            
                        </Picker>
                </Item> 
            </View>


            <Text onPress={() => this.setState({show_optional: !this.state.show_optional})}
                style={{marginLeft: 10, marginTop: 40}}>
                {this.state.show_optional ? "- Optional Fields" : "+ Optional Fields"}
            </Text>

            {this.state.show_optional ? this.OptionalFieldsInput() : null}

            
            <View style={{
                flatListStyle,
                flex: 1,
                justifyContent: 'flex-end',
                marginTop: 30,
              }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                    <View style={{width: 150}}>
                        <Button
                            style={{backgroundColor: '#DB9872', borderColor: '#DB9872', borderRadius: 22, marginLeft: 8.5}}
                            textStyle={{color: 'white'}}
                            onPress={() => this.props.navigation.dispatch(toAddRelations)}>
                            Add Another
                        </Button>
                    </View>
                    <View style={{width: 150}}>
                        <Button
                            style={{backgroundColor: '#94878F', borderColor: '#94878F', borderRadius: 22, marginRight: 8.5}}
                            textStyle={{color: 'white'}}
                            onPress={() => this.props.navigation.dispatch(toDetails)}>
                            Done
                        </Button>
                    </View>
                </View>
            </View>
            </ScrollView>
            </Container>
        );
    }
}



export { AddRelationsComponent };


const mapStateToProps = (state, ownProps) => {
    const { relations } = state;
    const { error_message, all_relations } = relations;
    return {
        ...ownProps,
        all_relations,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export const AddRelations = connect(mapStateToProps, mapDispatchToProps)(AddRelationsComponent);