import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { List, ListItem, Item, Left, Right } from 'native-base';
import Button from 'apsl-react-native-button'
import CustomHeader from '../../components/Common/CustomHeader'
import _ from 'lodash';

import { connect } from 'react-redux';

import {
    thunk_load_details,
} from '../../ducks/relations';

import styles from './styles';


const {
    flatListStyle
} = styles;


class DetailsComponent extends Component {



    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};
      
        return {
          title:       params.title,
          headerRight: params.headerRight,
        }
      }
      
      _setNavigationParams() {
        let title       = 'Details';
        let headerRight = <Button
            style={{ backgroundColor: '#86ADDB', borderColor: '#86ADDB', paddingRight: 15, }}
            textStyle={{ color: 'white' }}
            onPress={() => this.props.navigation.dispatch(this._toAddRelations)}>
            Edit
        </Button>;
      
        this.props.navigation.setParams({ 
          title,
          headerRight, 
        });
      }
      
      componentWillMount() {
        this._setNavigationParams();
      }
      componentDidMount() {
        let this_id = this.props.navigation.getParam('itemID');
        this.props.load_details(this_id);
        //this.populateDetails();
      }
      
      _toAddRelations = NavigationActions.navigate({
        routeName: 'AddRelations',
        params: {},
        action: NavigationActions.navigate({ routeName: 'AddRelations' }),
    });

    populateDetails = () => {
        return _.map(this.props.all_relations, (item, index)=>{
            if (item.id == this.props.navigation.getParam('itemID')){
                this.setState({
                    death_year: item.death_year,
                    is_deceased: item.is_deceased,
                    gender: item.gender,
                    is_step: item.is_step,
                    is_adopted: item.is_adopted,
                    lives_in: item.lives_in,
                    nickname: item.nickname,
                    populate_called: "true",
                })

            }
        });

            return (
                <ListItem onPress={() => this.props.navigation.dispatch(toDetails)}>
                    <Left><Text style={{fontSize: 20}}>{item.first + " " + item.last}</Text></Left> 
                    <Right><Text style={{fontWeight: "bold", color: '#DB9872'}}>{item.relation}</Text></Right>

                </ListItem>
            )
        
    }

    constructor(props) {
        super(props);
        this.state = {
            state_id: this.props.navigation.getParam('itemID'),
            name: this.props.navigation.getParam('name'), 
            relation: this.props.navigation.getParam('relation'), 
            birth_year: this.props.navigation.getParam('birth_year'), 
            death_year: "",
            is_deceased: false,
            gender: "",
            is_step: false, 
            is_adopted: false,
            lives_in: "",
            nickname: "",
            populate_called: "false",
        };
        
    }
    

    render() {
        
        const toAddRelations = NavigationActions.navigate({
            routeName: 'AddRelations',
            params: {},
            action: NavigationActions.navigate({ routeName: 'AddRelations' }),
        });


        const toDetails = NavigationActions.navigate({
            routeName: 'Details',

            params: {},

            action: NavigationActions.navigate({ routeName: 'Details' }),
        });

        return (
            <View style={flatListStyle}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, paddingTop: 10 }}>
                    {this.state.name}
                </Text>
                <Text style={{ color: '#DB9872', textAlign: 'center', fontSize: 20, paddingBottom: 25, }}>
                    {this.state.relation}
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 15,}}>
                        <Text style={{ textAlign: 'left', fontSize: 24, color: 'grey' }}>
                            Birth Year
                        </Text>
                        <Text style={{ textAlign: 'left', fontSize: 24, color: 'grey' }}>
                            Nickname
                        </Text>
                        <Text style={{ textAlign: 'left', fontSize: 24, color: 'grey' }}>
                            Lives in
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', }}>
                        <Text style={{ textAlign: 'left', fontSize: 24 }}>
                            {this.state.birth_year}
                        </Text>
                        <Text style={{ textAlign: 'left', fontSize: 24 }}>
                            {this.props.nickname}
                        </Text>
                        <Text style={{ textAlign: 'left', fontSize: 24 }}>
                            {this.state.lives_in}
                        </Text>
                        <Text style={{ textAlign: 'left', fontSize: 24 }}>
                            
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 3 }}>
                    {/*<Text style={{ textAlign: 'left', fontSize: 24, color: 'grey', marginLeft: 15}}>
                        Relations
                    </Text>
                    <List>
                        <ListItem onPress={() => this.props.navigation.dispatch(toDetails)}>
                            <Left><Text style={{ fontSize: 20 }}>Amy Yang</Text></Left>
                            <Right><Text style={{ fontWeight: "bold", color: '#DB9872' }}>Me</Text></Right>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.dispatch(toDetails)}>
                            <Left><Text style={{ fontSize: 20 }}>Lexi Ryan</Text></Left>
                            <Right><Text style={{ fontWeight: "bold", color: '#DB9872' }}>Mother</Text></Right>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.dispatch(toDetails)}>
                            <Left><Text style={{ fontSize: 20 }}>Lexi Ryan</Text></Left>
                            <Right><Text style={{ fontWeight: "bold", color: '#DB9872' }}>Mother</Text></Right>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.dispatch(toDetails)}>
                            <Left><Text style={{ fontSize: 20 }}>Lexi Ryan</Text></Left>
                            <Right><Text style={{ fontWeight: "bold", color: '#DB9872' }}>Mother</Text></Right>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.dispatch(toDetails)}>
                            <Left><Text style={{ fontSize: 20 }}>Lexi Ryan</Text></Left>
                            <Right><Text style={{ fontWeight: "bold", color: '#DB9872' }}>Mother</Text></Right>
                        </ListItem>
                    </List>*/}
                    <Button
                        style={{ backgroundColor: '#94878F', borderColor: '#94878F', borderRadius: 22, }}
                        textStyle={{ color: 'white' }}
                        onPress={() => this.props.navigation.dispatch(toAddRelations)}>
                        Add Relation
                        </Button>
                </View>
            </View>
        );
    }
}

export { DetailsComponent };

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
        load_details: (this_id) => {
            dispatch(thunk_load_details(this_id))
        }
    }
}

export const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);