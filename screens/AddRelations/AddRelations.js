import React, { Component } from 'react';
import { AppRegistry, Button, Dimensions, View, Text, View, Text, ScrollView, TouchableNativeFeedback, Platform } from 'react-native';
import { Body, CheckBox, Container, Content, Form, Icon, Input, Item, Label, ListItem, Picker } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Button from 'apsl-react-native-button'
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
<<<<<<< HEAD
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
=======
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
                        <Label>First Name</Label>
                        <Input />
                    </Item>
                </Form>
                </Content>
                <Content>
                <Form>
                    <Item floatingLabel floatingLabel style={{
                        width: 150,
                        paddingBottom: 5
                    }}>
                        <Label>Last Name</Label>
                        <Input />
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
                        <Label>Birth Year</Label>
                        <Input />
                    </Item>
                </Form>
                </Content>
                <Content>
                    <ListItem style={{marginTop: 21, 
                            borderBottomColor: 'white'
                        }}>
                        <CheckBox checked={false} color="gray" />
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
                        <Label>Death Year</Label>
                        <Input />
                    </Item>
                </Form>
                </Content>
>>>>>>> master
            </View>

            <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: Dimensions.get('window').width - 10}}
                            placeholder="Preferred Gender"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            
                        >
                            <Picker.Item label="Male" value="key0" />
                            <Picker.Item label="Female" value="key1" />
                            <Picker.Item label="Other" value="key2" />
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
                        <CheckBox checked={false} color="gray" />
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
                        <CheckBox checked={false} color="gray" />
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