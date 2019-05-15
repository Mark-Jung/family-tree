import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Container, Header, Icon, Content, Item, Left, List, ListItem, Picker, Right } from 'native-base';
import { NavigationActions } from 'react-navigation';
import _ from 'lodash';


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
    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};
      
        return {
          title: params.title,
          headerLeft: null,
          headerRight: params.headerRight,
        }
      }
      
      _setNavigationParams() {
        let title = 'Relations';
      
        let headerRight = 
        <Button transparent 
            onPress={() => this.props.navigation.dispatch(this._toAddRelations)}>
            <Text style={{fontSize: 16, color: 'white', paddingRight: 20}}>
                Add
            </Text>
        </Button>;

        this.props.navigation.setParams({ 
          title,
          headerRight,
        });
      }
      
      componentWillMount() {
        this._setNavigationParams();
      }
      
      _toAddRelations = NavigationActions.navigate({
        routeName: 'AddRelations',
        params: {},
        action: NavigationActions.navigate({ routeName: 'AddRelations' }),
    });

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



    populateRelations = () => {
        return _.map(this.props.all_relations, (item, index)=>{
            const toDetails = NavigationActions.navigate({
                routeName: 'Details',
              
                params: {'itemID': item.id, 
                        'name': item.first + " " + item.last, 
                        'birth_year': item.birth_date, 
                        'relation': item.relation,
                    },
                
              
                action: NavigationActions.navigate({ routeName: 'Details', }),
            });

            if(item.relation == "self"){
                return null;
            }
            
            return (
                <ListItem onPress={() => this.props.navigation.dispatch(toDetails)}>
                    <Left><Text style={{fontSize: 20}}>{item.first + " " + item.last}</Text></Left> 
                    <Right><Text style={{fontWeight: "bold", color: '#DB9872'}}>{item.relation}</Text></Right>

                </ListItem>
            )
        })
    }

    render() {
        
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
                {this.populateRelations()}
                
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