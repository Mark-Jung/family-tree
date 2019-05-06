import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { List, ListItem, Item, Left, Right } from 'native-base';
import Button from 'apsl-react-native-button'
import CustomHeader from '../../components/Common/CustomHeader'

import { connect } from 'react-redux';

import {
    thunk_load_details,
} from '../../ducks/details';

import styles from './styles';

const {
    flatListStyle
} = styles;


class DetailsComponent extends Component {
    static navigationOptions = {
        title: 'Details',
    };

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.navigation.getParam('name'), 
            relation: this.props.navigation.getParam('relation'), 
            birth_year: this.props.navigation.getParam('birth_year'), 
            nickname: this.props.navigation.getParam('nickname'), 
            lives_in: this.props.navigation.getParam('lives_in'), 

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
                            {this.state.nickname}
                        </Text>
                        <Text style={{ textAlign: 'left', fontSize: 24 }}>
                            {this.state.lives_in}
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
    return {
        ...ownProps,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);