import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Container, Header, Icon, Content, Item, Left, List, ListItem, Picker, Right } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

import {
    thunk_load_relation,
} from '../../ducks/relations';

import styles from './styles';
import { thunk_load_dashboard } from '../../ducks/relations';

const {
    flatListStyle
} = styles;


class RelationsComponent extends Component {
    static navigationOptions = {
        title: 'Relations',
    };

    componentDidMount() {
       this.props.load_relations();
    }

    constructor(props) {
        super(props);
        this.state = {
            arrange_by: undefined,
            is_ascending: true,
        };
    }
    onArrangeChange(value: string) {
        this.setState({
            arrange_by: value
        });
    }

    render() {
        const toDetails = NavigationActions.navigate({
            routeName: 'Details',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'Details' }),
        });

        console.log(this.props.all_relations);
        return (
 
            <Container>
            <Content>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholderStyle={{ color: "#9ab2ce" }}

                            placeholder="Arrange by"
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.arrange_by}
                            onValueChange={this.onArrangeChange.bind(this)}
                        >
                            
                            <Picker.Item label="Age" value="age" />
                            <Picker.Item label="Name" value="name" />
                        </Picker>
                </Item>
                
                <Button iconUp transparent onPress={() => this.setState({is_ascending: !this.state.is_ascending})}>
                    <Text style={{fontSize: 16, color: 'black'}}>
                        {this.state.is_ascending ? "Ascending" : "Descending"}
                    </Text>
                    <Icon name={this.state.is_ascending ? "arrow-up" : "arrow-down"} style={{fontSize: 20, color: 'grey'}}/>
                </Button>
            </View>
            
            
         

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
    const { error_message, all_relations } = relations;
    return {
        ...ownProps,
        error_message,
        all_relations,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        load_relations: () => {
            dispatch(thunk_load_relation())
        }
    }
}

export const Relations = connect(mapStateToProps, mapDispatchToProps)(RelationsComponent);